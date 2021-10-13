import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AiOutlineSearch } from 'react-icons/ai';
import { Table, Input, Button, Space } from 'antd';
import firestore from '../../../utils/db';
import styles from './styles.module.scss';

const Meetings = props => {
  const router = useRouter();
  const { meetingId } = router.query;
  const [data, setData] = useState(null);

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
      width: '10%',
      ...getColumnSearchProps('id'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '50%',
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
  ];

  useEffect(() => {
    const initFunc = async () => {
      const tableData = [];
      const querySnapshot = await firestore.collection('meetings').doc(meetingId).collection('attendees').get();
      querySnapshot.forEach(doc => {
        tableData.push({ key: doc.id, id: doc.id, ...doc.data() });
      });
      setData(tableData);
    };

    initFunc();
  }, [meetingId]);

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
    props: { ...(await serverSideTranslations(locale, ['common', 'menu'])) },
  };
};
export default Meetings;
