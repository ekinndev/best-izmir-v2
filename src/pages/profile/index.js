import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSession, getSession, signOut } from 'next-auth/client';
import { Button, message, Spin } from 'antd';
import { useTranslation } from 'next-i18next';
import firestore from '../../utils/db';
import styles from './styles.module.scss';

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

const Profile = props => {
  const [session] = useSession();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('profile');

  const onError = () => {
    message.error(t('unexpectedError'));
  };

  const onScan = async val => {
    if (!val) return false;
    setLoading(true);
    try {
      const meeting = await firestore.collection('meetings').doc(val);
      const meetingData = await meeting.get();

      if (!meetingData.exists) {
        return message.error(t('findMeetingError'));
      }

      const userMeeting = meeting.collection('attendees').doc(session.user.userId);
      const userMeetingData = await userMeeting.get();

      if (userMeetingData.exists) {
        return message.error(t('duplicateAttentMeeting'));
      }

      await userMeeting.set({ email: session.user.email, name: session.user.name });

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
      <div>{session?.user?.email}</div>
      <div>{session?.user?.name}</div>
      <div>{session?.user?.userId}</div>
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
    props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'profile'])) },
  };
};

export default Profile;
