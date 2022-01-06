import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AiOutlineSearch } from 'react-icons/ai';
import { Table, Input, Button, Space, Modal, Form, message } from 'antd';
import { CSVLink } from 'react-csv';
import { useTranslation } from 'next-i18next';
import { useSelector } from 'react-redux';
import firebase from 'firebase/app';
import { v4 as uuidv4 } from 'uuid';
import firestore from '../../../utils/db';
import styles from './styles.module.scss';

const Meetings = () => {
  const router = useRouter();
  const { meetingId } = router.query;
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [csvData, setCsvData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('pages');
  const { t: profileT } = useTranslation('profile');
  const loggedInUser = useSelector(state => state.common.userInfo);

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
  };

  const handleReset = clearFilters => {
    clearFilters();
  };
  const [manuelForm] = Form.useForm();

  const addManuelUser = async values => {
    const { participantName, participantEmail } = values;

    const payload = {
      email: participantEmail || 'Manuel',
      name: participantName,
      created: firebase.firestore.Timestamp.now().toDate().toLocaleString(),
    };

    if (!participantName) return false;

    setLoading(true);

    try {
      const meeting = await firestore.collection('meetings').doc(meetingId);

      const userMeeting = meeting.collection('attendees').doc(uuidv4());

      await userMeeting.set(payload);

      message.success(profileT('successAttentMeeting'));

      return true;
    } catch (e) {
      message.error(profileT('unexpectedError'));

      return false;
    } finally {
      setLoading(false);
      manuelForm.resetFields();
      setShowModal(false);
    }
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

      if (!showModal) setCsvData(tableCsvData);
    };

    initFunc();
  }, [meetingId, showModal]);

  return !loggedInUser?.isAdmin ? null : (
    <div className={styles.meetings}>
      <Head>
        <title>{`${t('meetingIdPageTitle')} ${meetingId} | ${t('bestIzmir')}`}</title>
      </Head>
      <Modal
        title="Manuel"
        visible={showModal}
        confirmLoading={loading}
        onOk={() => manuelForm.submit()}
        onCancel={() => setShowModal(false)}
      >
        <Form form={manuelForm} name="participant" onFinish={addManuelUser}>
          <Form.Item label="Email" name="participantEmail">
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label={profileT('name')}
            name="participantName"
            rules={[{ required: true, message: t('participantNameErrorMessage') }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <div style={{ overflowX: 'auto', width: '100%' }}>
        <div className={styles.table_header}>
          {csvData && (
            <CSVLink filename={`${meetingId}.csv`} data={csvData}>
              EXCEL
            </CSVLink>
          )}
          <Button type="primary" onClick={() => setShowModal(true)}>
            {profileT('addManuelButtonText')}
          </Button>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

Meetings.propTypes = {};

export const getServerSideProps = async ({ locale, ...ctx }) => {
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
    props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'pages', 'profile'])) },
  };
};
export default Meetings;
