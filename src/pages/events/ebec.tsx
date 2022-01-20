import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import ebecLogo from '../../assets/logos/ebec.svg';
import styles from '../events/Ebec.module.scss';
import Image from 'next/image';
import { Tabs, Button, Collapse, Card, Form, Steps, message } from 'antd';
import { useTranslation } from 'next-i18next';
import EBEC_FAQ from '../../constants/Ebecfaq';
import ApplyForm from '../../components/Ebec/EbecForm';

const { TabPane } = Tabs;
const Ebec = () => {
  const { Panel } = Collapse;
  const { Step } = Steps;
  const { t } = useTranslation('ebec');
  let placeholders = [
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/500',
  ];

  const steps = [
    {
      title: t('firstContestantTitle'),
      content: <ApplyForm contestant={t('firstContestantTitle')} />,
    },
    {
      title: t('secondContestantTitle'),
      content: <ApplyForm contestant={t('secondContestantTitle')} />,
    },
    {
      title: t('thirdContestantTitle'),
      content: <ApplyForm contestant={t('thirdContestantTitle')} />,
    },
    {
      title: t('fourthContestantTitle'),
      content: <ApplyForm contestant={t('fourthContestantTitle')} />,
    },
  ];

  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  type SizeType = Parameters<typeof Form>[0]['size'];
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image src={ebecLogo} />
        </div>
      </div>

      <Tabs className={styles.tabStyle} defaultActiveKey="1" centered>
        <TabPane className={styles.tabContent} tab={t('whatIsEbecTitle')} key="1">
          <p className={styles.explanationText}>{t('whatIsEbecText')}</p>
          <div className={styles.explanationText}>
            <h2>{t('ebecPyramidTitle')}</h2>
            <h3>{t('localStepTitle')}</h3>
            <p>{t('localStepText')}</p>
            <h3>{t('nationalStepTitle')}</h3>
            <p>{t('nationalStepText')}</p>
            <h3>{t('finalStepTitle')}</h3>
            <p>{t('finalStepText')}</p>
          </div>
          <div className={styles.explanationText}>
            <h2>{t('ebecCategoriesTitle')}</h2>
            <h3>{t('innovativeDesignTitle')}</h3>
            <p>{t('innovativeDesignText')}</p>
            <h3>{t('caseStudyTitle')}</h3>
            <p>{t('caseStudyText')}</p>
          </div>
        </TabPane>
        <TabPane className={styles.tabContent} tab={t('howToApplyTitle')} key="2">
          <p className={styles.explanationText}>{t('howToApplyText')}</p>
          <Form layout="vertical">
            <Steps current={current}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  {t('nextStepButtonText')}
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                  {t('applyButtonText')}
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                  {t('previousStepButtonText')}
                </Button>
              )}
            </div>
          </Form>
        </TabPane>
        <TabPane className={styles.tabContent} tab={t('previousEbecs')} key="3">
          <Card>
            {placeholders.map(image => (
              <Card.Grid>
                <img src={image} alt="prev-ebec-pl-img" />
              </Card.Grid>
            ))}
          </Card>
        </TabPane>
        <TabPane className={styles.tabContent} tab={t('faqTitle')} key="4">
          <Collapse>
            {EBEC_FAQ.map(question => (
              <Panel className={styles.faqPanel} header={t(question.questionKey)} key={question.questionKey}>
                <p>{t(question.answerKey)}</p>
              </Panel>
            ))}
          </Collapse>
        </TabPane>
        <TabPane className={styles.tabContent} tab="Jürilerimiz" key="5"></TabPane>
        <TabPane className={styles.tabContent} tab="Takımımız" key="6"></TabPane>
      </Tabs>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale = 'en' }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'pages', 'ebec'])) },
});

export default Ebec;
