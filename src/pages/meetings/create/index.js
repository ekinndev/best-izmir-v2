import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSession, useSession } from 'next-auth/client';
import QrCode from 'qrcode.react';
import { Button, Input, Form, message } from 'antd';
import { useTranslation } from 'next-i18next';
import styles from './styles.module.scss';
import firestore from '../../../utils/db';

const CreateMeeting = () => {
  const [meetingKey, setMeetingKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [session] = useSession();
  const { t } = useTranslation('meeting');

  const onSubmit = async values => {
    setLoading(true);
    try {
      const getMeetingData = await firestore.collection('meetings').doc(values.meeting_name).get();
      if (getMeetingData.exists) {
        return message.error(`${t('duplicateMeetingErrorMessage')} ${values.meeting_name}`);
      }
      await firestore.collection('meetings').doc(values.meeting_name).set({
        createdByName: session.user.name,
        createdByEmail: session.user.email,
      });
      setMeetingKey(values.meeting_name);
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
      {showQr && <QrCode value={meetingKey} size={210} />}
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
    props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'meeting'])) },
  };
};

export default CreateMeeting;
