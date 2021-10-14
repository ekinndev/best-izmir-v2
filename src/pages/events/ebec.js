import React from 'react';
import PropTypes from 'prop-types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Ebec = props => <div>Ebec</div>;

Ebec.propTypes = {};

export const getServerSideProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'pages'])) },
});

export default Ebec;
