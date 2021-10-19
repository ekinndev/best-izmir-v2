import React from 'react';
import PropTypes from 'prop-types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout, Collapse } from 'antd';
import { useTranslation } from 'next-i18next';
import Hero from '../components/Hero/Hero';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import FAQ_QUESTIONS from '../constants/Faq';

const Faq = props => {
  const { Panel } = Collapse;

  const { t } = useTranslation('faq');

  return (
    <Layout>
      <Hero titleId="heroTitleFAQ" contentId="heroContentFaq" image="/images/pages/faq.webp" />
      <SectionTitle type="h2" titleId="sectionTitleFAQ" />
      <Collapse>
        {FAQ_QUESTIONS.map(question => (
          <Panel header={t(question.questionKey)} key={question.questionKey}>
            <p>{t(question.answerKey)}</p>
          </Panel>
        ))}
      </Collapse>
      ,
    </Layout>
  );
};

Faq.propTypes = {};

export const getServerSideProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'pages', 'faq', 'hero'])) },
});

export default Faq;
