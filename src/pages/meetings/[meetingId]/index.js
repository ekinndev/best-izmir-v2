import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AiOutlineSearch } from 'react-icons/ai';
import { Table, Input, Button, Space } from 'antd';
import { CSVLink } from 'react-csv';
import { useTranslation } from 'next-i18next';
import firestore from '../../../utils/db';
import styles from './styles.module.scss';

const Meetings = () => {
  const router = useRouter();
  const { meetingId } = router.query;
  const [data, setData] = useState(null);
  const [csvData, setCsvData] = useState(null);
  const { t } = useTranslation('pages');

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
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ...getColumnSearchProps('email'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Join Time',
      dataIndex: 'created',
      key: 'createTime',
      ...getColumnSearchProps('name'),
    },
  ];

  useEffect(() => {
    const initFunc = async () => {
      const tableData = [];
      const querySnapshot = await firestore.collection('meetings').doc(meetingId).collection('attendees').get();
      querySnapshot.forEach(doc => {
        tableData.push({ key: doc.id, id: doc.id, ...doc.data() });
      });
      setData(tableData);
      const tableCsvData = tableData.map(userData => ({
        id: userData.id,
        email: userData.email,
        name: userData.name,
        JoinTime: userData.created,
      }));

      setCsvData(tableCsvData);
    };

    initFunc();
  }, [meetingId]);

  return (
    <div className={styles.meetings}>
      <Head>
        <title>{`${t('meetingIdPageTitle')} ${meetingId} | ${t('bestIzmir')}`}</title>
      </Head>
      <div style={{ overflowX: 'auto', width: '100%' }}>
        {csvData && (
          <CSVLink filename={`${meetingId}.csv`} data={csvData}>
            EXCEL
          </CSVLink>
        )}
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
    props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'pages'])) },
  };
};
export default Meetings;
