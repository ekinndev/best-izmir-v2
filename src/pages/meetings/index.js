import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSession } from 'next-auth/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AiOutlineSearch } from 'react-icons/ai';
import { Table, Input, Button, Space, Switch, message } from 'antd';
import { useTranslation } from 'next-i18next';
import styles from './styles.module.scss';
import firestore from '../../utils/db';
import NextLink from '../../components/NextLink/NextLink';

const Meetings = props => {
  const [data, setData] = useState(null);
  const [loadingMeetingStatus, setLoadingMeetingStatus] = useState(false);
  const [querySnapshotData, setQuerySnapShotData] = useState(null);
  const { t } = useTranslation('meeting');

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
  };

  const handleReset = clearFilters => {
    clearFilters();
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
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
    filterIcon: filtered => <AiOutlineSearch style={{ color: filtered ? '#1890ff' : undefined }} />,
    // eslint-disable-next-line no-confusing-arrow
    onFilter: (value, record) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',

    render: text => text,
  });

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      ...getColumnSearchProps('id'),
      render: text => <NextLink href={`/meetings/${text}`}>{text}</NextLink>,
    },
    {
      title: 'Name',
      dataIndex: 'friendlyName',
      key: 'friendlyName',
      ...getColumnSearchProps('friendlyName'),
    },
    {
      title: "Creator's Email",
      dataIndex: 'createdByEmail',
      key: 'createdEmail',
      ...getColumnSearchProps('createdByEmail'),
    },
    {
      title: "Creator's Name",
      dataIndex: 'createdByName',
      key: 'createdByName',
      ...getColumnSearchProps('createdByName'),
    },
    {
      title: 'Create Time',
      dataIndex: 'created',
      key: 'createTime',
    },
    {
      title: 'Is Attandable',
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
        setQuerySnapShotData([]);
      }
    };

    initFunc();
  }, []);

  useEffect(() => {
    if (querySnapshotData) {
      const tableData = [];

      querySnapshotData.forEach(doc => {
        tableData.push({
          key: doc.id,
          id: doc.id,
          ...doc.data(),
          controls: (
            <Switch
              defaultChecked={doc.data().isAttandable}
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

  return (
    <div className={styles.meetings}>
      <div style={{ overflowX: 'auto', width: '100%' }}>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

Meetings.propTypes = {};

export const getServerSideProps = async ({ locale, ...ctx }) => {
  const session = await getSession(ctx);
  if (!session && !session.user.isAdmin) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'pages', 'meetings'])) },
  };
};

export default Meetings;
