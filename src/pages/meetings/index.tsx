import React, { useCallback, useEffect, useState } from 'react';
import { getSession } from 'next-auth/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AiOutlineSearch } from 'react-icons/ai';
import { Table, Input, Button, Space, Switch, message } from 'antd';
import { useTranslation } from 'next-i18next';
import styles from './styles.module.scss';
import firestore from '../../utils/db';
import NextLink from '../../components/NextLink/NextLink';
import { useAppSelector } from '../../hooks/storeHooks';
import { GetServerSideProps } from 'next';
import firebase from 'firebase/app';
import type { FilterDropdownProps, ColumnType } from 'antd/lib/table/interface';

interface TableData {
  created: string;
  createdByEmail: string;
  createdByName: string;
  friendlyName: string;
  id: string;
  controls: JSX.Element;
  isAttandable: boolean;
  key: string;
}

const Meetings = () => {
  const [data, setData] = useState<TableData[] | undefined>(undefined);
  const [loadingMeetingStatus, setLoadingMeetingStatus] = useState(false);
  const [querySnapshotData, setQuerySnapShotData] = useState<firebase.firestore.QuerySnapshot | undefined>(undefined);
  const { t } = useTranslation('meeting');
  const loggedInUser = useAppSelector(state => state.common.userInfo);

  const handleSearch = (selectedKeys: unknown, confirm: Function) => {
    confirm();
  };

  const handleReset = (clearFilters: Function | undefined) => {
    clearFilters?.();
  };

  const getColumnSearchProps = <T extends unknown>(dataIndex: string): ColumnType<T> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownProps) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm)}
            icon={<AiOutlineSearch />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => <AiOutlineSearch style={{ color: filtered ? '#1890ff' : undefined }} />,
    // eslint-disable-next-line no-confusing-arrow

    render: (text: string): string => text,
  });

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      ...getColumnSearchProps<TableData>('id'),
      render: (text: string) => <NextLink href={`/meetings/${text}`}>{text}</NextLink>,
    },
    {
      title: 'Name',
      dataIndex: 'friendlyName',
      key: 'friendlyName',
      ...getColumnSearchProps<TableData>('friendlyName'),
    },
    {
      title: "Creator's Email",
      dataIndex: 'createdByEmail',
      key: 'createdEmail',
      ...getColumnSearchProps<TableData>('createdByEmail'),
    },
    {
      title: "Creator's Name",
      dataIndex: 'createdByName',
      key: 'createdByName',
      ...getColumnSearchProps<TableData>('createdByName'),
    },
    {
      title: 'Create Time',
      dataIndex: 'created',
      key: 'createTime',
    },
    {
      title: 'Status',
      dataIndex: 'controls',
      key: 'controls',
    },
  ];

  const changeMeetingStatus = useCallback(
    async (id, value) => {
      setLoadingMeetingStatus(true);
      try {
        const meetingRef = await firestore.collection('meetings').doc(id);
        await meetingRef.update({
          isAttandable: value,
        });

        return message.success(t('meetingUpdateSuccessMessage'));
      } catch (e) {
        return message.error(t('unexpectedErrorMessage'));
      } finally {
        setLoadingMeetingStatus(false);
      }
    },
    [t],
  );

  useEffect(() => {
    const initFunc = async () => {
      try {
        const querySnapshot = await firestore.collection('meetings').get();
        setQuerySnapShotData(querySnapshot);
      } catch (e) {
        setQuerySnapShotData(undefined);
      }
    };

    initFunc();
  }, []);

  useEffect(() => {
    if (querySnapshotData) {
      const tableData: TableData[] = [];

      querySnapshotData.forEach(doc => {
        const docTableData = doc.data() as TableData;

        tableData.push({
          ...docTableData,
          key: doc.id,
          id: doc.id,
          controls: (
            <Switch
              defaultChecked={docTableData.isAttandable}
              onChange={val => changeMeetingStatus(doc.id, val)}
              disabled={loadingMeetingStatus}
            />
          ),
        });
      });

      setData(tableData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingMeetingStatus, querySnapshotData]);

  return !loggedInUser?.isAdmin ? null : (
    <div className={styles.meetings}>
      <div style={{ overflowX: 'auto', width: '100%' }}>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

Meetings.propTypes = {};

export const getServerSideProps: GetServerSideProps = async ({ locale = 'en', ...ctx }) => {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'pages', 'meeting'])) },
  };
};

export default Meetings;
