import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSession, getSession, signOut } from 'next-auth/client';
import { Button, message, Spin, Form, Input } from 'antd';
import { useTranslation } from 'next-i18next';
import firebase from 'firebase/app';
import { useSelector } from 'react-redux';
import firestore from '../../utils/db';
import styles from './styles.module.scss';

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

const Profile = props => {
  const [session] = useSession();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('profile');
  const loggedInUser = useSelector(state => state.common.userInfo);

  const onError = () => {
    message.error(t('unexpectedError'));
  };

  const onScan = async value => {
    const val = value?.meeting_id ?? value;

    if (!val) return false;
    setLoading(true);
    try {
      const meeting = await firestore.collection('meetings').doc(val);
      const meetingData = await meeting.get();

      if (!meetingData.exists) {
        return message.error(t('findMeetingError'));
      }

      const fetchedMeetingData = meetingData.data();

      if (!fetchedMeetingData.isAttandable) {
        return message.error(t('attentError'));
      }

      const userMeeting = meeting.collection('attendees').doc(loggedInUser.userId);
      const userMeetingData = await userMeeting.get();

      if (userMeetingData.exists) {
        return message.error(t('duplicateAttentMeeting'));
      }

      await userMeeting.set({
        email: session.user.email,
        name: session.user.name,
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
        <QrReader delay={2000} onError={onError} onScan={onScan} style={{ width: '100%', maxWidth: '500px' }} />
      )}

      <Form name="meeting" onFinish={onScan}>
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
      <Button danger type="primary" htmlType="button" onClick={signOut}>
        Çıkış Yap
      </Button>
    </div>
  );
};

Profile.propTypes = {};

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
    props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'profile', 'pages'])) },
  };
};

export default Profile;
