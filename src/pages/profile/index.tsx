import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSession, getSession, signOut } from 'next-auth/client';
import { Button, message, Spin, Form, Input } from 'antd';
import { useTranslation } from 'next-i18next';
import firebase from 'firebase/app';
import firestore from '../../utils/db';
import styles from './styles.module.scss';
import { GetServerSideProps } from 'next';
import { useAppSelector } from '../../hooks/storeHooks';

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

const Profile = () => {
  const [session] = useSession();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('profile');
  const loggedInUser = useAppSelector(state => state.common.userInfo);

  const onError = () => {
    // eslint-disable-next-line no-console
    message.error(t('unexpectedError'));
  };

  const onScanScanner = async (data: string | null) => {
    await scanHandler(data);
  };
  const onScanForm = async (value: { meeting_id: string }) => {
    await scanHandler(value.meeting_id);
  };

  const scanHandler = async (val: string | null) => {
    if (!val) return;

    setLoading(true);
    try {
      const meeting = await firestore.collection('meetings').doc(val);
      const meetingData = await meeting.get();

      if (!meetingData.exists) {
        return message.error(t('findMeetingError'));
      }

      const fetchedMeetingData = meetingData.data();

      if (!fetchedMeetingData?.isAttandable) {
        return message.error(t('attentError'));
      }

      const userMeeting = meeting.collection('attendees').doc(loggedInUser?.userId);
      const userMeetingData = await userMeeting.get();

      if (userMeetingData.exists) {
        return message.error(t('duplicateAttentMeeting'));
      }

      await userMeeting.set({
        email: session?.user?.email,
        name: session?.user?.name,
        created: firebase.firestore.Timestamp.now().toDate().toLocaleString(),
      });

      message.success(t('successAttentMeeting'));

      return true;
    } catch (e) {
      message.error(t('unexpectedError'));

      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.profile}>
      {loading ? (
        <Spin size="large" />
      ) : (
        <QrReader delay={2000} onError={onError} onScan={onScanScanner} style={{ width: '100%', maxWidth: '500px' }} />
      )}

      <Form name="meeting" onFinish={onScanForm}>
        <Form.Item
          label={t('meetingIdLabel')}
          name="meeting_id"
          rules={[{ required: true, message: t('meetingIdErrorMessage') }]}
        >
          <Input placeholder={t('meetingIdLabel')} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            {!loading ? t('meetingButtonText') : t('meetingButtonLoadingText')}
          </Button>
        </Form.Item>
      </Form>
      <div>{session?.user?.email}</div>
      <div>{session?.user?.name}</div>
      <div>{loggedInUser?.userId}</div>
      <Button danger type="primary" htmlType="button" onClick={() => signOut()}>
        Çıkış Yap
      </Button>
    </div>
  );
};

Profile.propTypes = {};

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
    props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'profile', 'pages'])) },
  };
};

export default Profile;
