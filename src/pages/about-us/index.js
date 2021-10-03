import React from 'react';
import PropTypes from 'prop-types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const AboutUs = props => {
  return <div>About Us</div>;
};

AboutUs.propTypes = {};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'menu'])),
  },
});

export default AboutUs;
