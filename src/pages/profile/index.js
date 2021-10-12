import React from 'react';
import PropTypes from 'prop-types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSession, getSession, signOut } from 'next-auth/client';

const Profile = props => {
  const [session] = useSession();

  return (
    <div>
      <div>{session?.user?.email}</div>
      <div>{session?.user?.name}</div>
      <button type="button" onClick={signOut}>
        Çıkış Yap
      </button>
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
    props: { ...(await serverSideTranslations(locale, ['common', 'menu'])) },
  };
};

export default Profile;
