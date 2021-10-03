import React from 'react';
import PropTypes from 'prop-types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const MWIzmir = props => {
  return <div>MWIzmir</div>;
};

MWIzmir.propTypes = {};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'menu'])),
  },
});

export default MWIzmir;
