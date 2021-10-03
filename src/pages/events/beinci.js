import React from 'react';
import PropTypes from 'prop-types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Beinci = props => {
  return <div>Beinci</div>;
};

Beinci.propTypes = {};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'menu'])),
  },
});

export default Beinci;
