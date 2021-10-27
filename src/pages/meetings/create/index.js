import React, { useState, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSession, useSession } from 'next-auth/client';
import QrCode from 'qrcode.react';
import { Button, Input, Form, message, Table } from 'antd';
import { useTranslation } from 'next-i18next';
import firebase from 'firebase/app';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles.module.scss';
import firestore from '../../../utils/db';

const CreateMeeting = () => {
  const [meetingKey, setMeetingKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState(null);
  const [showQr, setShowQr] = useState(false);
  const [session] = useSession();
  const { t } = useTranslation('meeting');

  const setQr = val => {
    setMeetingKey(val);
    setShowQr(true);
  };

  useEffect(() => {
    const initFunc = async () => {
      const querySnapshot = await firestore.collection('meetings').get();

      const tableDataArray = [];

      querySnapshot.forEach(doc => {
        tableDataArray.push({
          key: doc.id,
          id: doc.id,
          ...doc.data(),
        });
      });
      setTableData(tableDataArray);
    };

    initFunc();
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
      render: text => (
        <Button type="text" onClick={() => setQr(text)}>
          {text}
        </Button>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'friendlyName',
      key: 'friendlyName',
    },
    {
      title: "Creator's Email",
      dataIndex: 'createdByEmail',
      key: 'createdEmail',
    },
    {
      title: "Creator's Name",
      dataIndex: 'createdByName',
      key: 'createdByName',
    },
    {
      title: 'Create Time',
      dataIndex: 'created',
      key: 'createTime',
    },
  ];

  const onSubmit = async values => {
    setLoading(true);
    const uniqueId = uuidv4();
    try {
      await firestore.collection('meetings').doc(uniqueId).set({
        createdByName: session.user.name,
        createdByEmail: session.user.email,
        friendlyName: values.meeting_name,
        created: firebase.firestore.Timestamp.now().toDate().toLocaleString(),
        isAttandable: true,
      });
      setMeetingKey(uniqueId);
      setShowQr(true);
      message.success(t('meetingSuccessMessage'));

      return true;
    } catch (e) {
      message.error(t('unexpectedErrorMessage'));

      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.meeting_create}>
      {showQr && (
        <QrCode
          value={meetingKey}
          size={210}
          imageSettings={{
            src: '/images/logo.webp',
            x: null,
            y: null,
            height: 32,
            width: 32,
            excavate: true,
          }}
        />
      )}
      <Form name="meeting" onFinish={onSubmit}>
        <Form.Item
          label={t('meetingNameLabel')}
          name="meeting_name"
          rules={[{ required: true, message: t('meetingNameErrorMessage') }]}
        >
          <Input placeholder={t('meetingNameLabel')} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            {!loading ? t('meetingButtonText') : t('meetingButtonLoadingText')}
          </Button>
        </Form.Item>
      </Form>

      <div style={{ overflowX: 'auto', width: '100%' }}>
        <Table columns={columns} dataSource={tableData} />
      </div>
    </div>
  );
};

CreateMeeting.propTypes = {};

export const getServerSideProps = async ({ locale, ...ctx }) => {
  const session = await getSession(ctx);

  if (!session || !session.user.isAdmin) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'meeting', 'pages'])) },
  };
};

export default CreateMeeting;
