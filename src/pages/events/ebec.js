import React from 'react';
import PropTypes from 'prop-types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Ebec = props => {
  return <div>Ebec</div>;
};

Ebec.propTypes = {};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'menu'])),
  },
});

export default Ebec;
