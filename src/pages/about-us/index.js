import React from 'react';
import PropTypes from 'prop-types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Col, Layout as ALayout, Row } from 'antd';
import { useTranslation } from 'next-i18next';
import Hero from '../../components/Hero/Hero';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import styles from './styles.module.scss';

const AboutUs = props => {
  const { t } = useTranslation('about_us');

  return (
    <ALayout>
      <Hero contentId="heroContentAboutUs" titleId="heroTitleAboutUs" image="/images/pages/aboutus.webp" />
      <section className="about_us">
        <SectionTitle titleId="sectionTitleAboutUs" type="h2" />
        <Row justify="center">
          <Col sm={{ span: 24 }} md={{ span: 14 }}>
            <p className={styles.about_us_text}>{t('aboutUsText')}</p>
          </Col>
        </Row>
      </section>
    </ALayout>
  );
};

AboutUs.propTypes = {};

export const getServerSideProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'pages', 'about_us', 'hero'])) },
});

export default AboutUs;
