import React from 'react';
import PropTypes from 'prop-types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const YFS = props => {
  return <div>YFS</div>;
};

YFS.propTypes = {};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'menu'])),
  },
});

export default YFS;
