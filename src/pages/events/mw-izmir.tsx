import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

const MWIzmir = () => <div>MWIzmir</div>;

export const getServerSideProps: GetServerSideProps = async ({ locale = 'en' }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'pages'])) },
});

export default MWIzmir;
