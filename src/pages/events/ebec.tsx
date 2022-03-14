import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import ebecLogo from '../../assets/logos/ebec.svg';
import styles from '../events/Ebec.module.scss';
import Image from 'next/image';
import { AiOutlineDownload } from 'react-icons/ai';
import {
  Layout as ALayout,
  Tabs,
  Button,
  Collapse,
  Card,
  Form,
  Steps,
  message,
  Carousel,
  Divider,
  Row,
  Col,
  Image as AntImage,
} from 'antd';
import { useTranslation } from 'next-i18next';
import EBEC_FAQ from '../../constants/Ebecfaq';
import ApplyForm from '../../components/Ebec/EbecForm';
import EbecPyrmaidImage from '../../assets/ebec/ebecPyramid.png';
import innDesImg from '../../assets/ebec/innovativeDesign.jpg';
import caseStdyImg from '../../assets/ebec/caseStudy.jpg';
import karsiyakaKollektif from '../../assets/ebec/karsiyaka_kolektif.jpg';
import aemTextileImg from '../../assets/ebec/aem-textile_logo.svg';
import erdincAltunImg from '../../assets/ebec/erdinc-altun-img.jpg';
import nuriAzbarImg from '../../assets/ebec/nuri-azbar-img.jpg';
import ilkerErolImg from '../../assets/ebec/ilker-erol-img.jpg';
import sinemToktayImg from '../../assets/ebec/sinem-toktay-img.jpg';

import axios from 'axios';

interface StepType {
  title: string;
  content: JSX.Element;
}

const { TabPane } = Tabs;
const Ebec = () => {
  const { Panel } = Collapse;
  const { Step } = Steps;

  const { t } = useTranslation('ebec');

  const steps: StepType[] = [
    {
      title: t('firstContestantTitle'),
      content: <ApplyForm contestant={t('firstContestantTitle')} showSelect={false} />,
    },
    {
      title: t('secondContestantTitle'),
      content: <ApplyForm contestant={t('secondContestantTitle')} showSelect={false} />,
    },
    {
      title: t('thirdContestantTitle'),
      content: <ApplyForm contestant={t('thirdContestantTitle')} showSelect={false} />,
    },
    {
      title: t('fourthContestantTitle'),
      content: <ApplyForm contestant={t('fourthContestantTitle')} showSelect={true} />,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const [form] = Form.useForm();

  const handleNextStep = async () => {
    await form.validateFields();
    setFormData(prevState => ({ ...prevState, [current]: form.getFieldsValue() }));
    form.resetFields();
    next();
  };
  const applyForm = async () => {
    await form.validateFields();

    const payload = { ...formData, [current]: form.getFieldsValue() };

    try {
      setLoading(true);
      await axios.post('/api/ebec-mail', payload);
      message.success(t('applySuccessText'));
    } catch (e) {
      message.error(t('errorMessageText'));
    } finally {
      setLoading(false);
    }
  };
  return (
    <ALayout>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image src={ebecLogo} alt="ebec-logo" />
        </div>

        <Row justify="center">
          <Col xs={24} md={24}>
            <Tabs className={styles.tabStyle} defaultActiveKey="1" centered>
              <TabPane className={styles.tabContent} tab={t('whatIsEbecTitle')} key="1">
                <div className={styles.explanationText}>
                  <h2>{t('whatIsEbecTitle')}</h2>
                  <p>{t('whatIsEbecText')}</p>
                </div>

                <div className={styles.explanationText}>
                  <h2>{t('ebecPyramidTitle')}</h2>
                  <h3>{t('localStepTitle')}</h3>
                  <p>{t('localStepText')}</p>
                  <h3>{t('nationalStepTitle')}</h3>
                  <p>{t('nationalStepText')}</p>
                  <h3>{t('finalStepTitle')}</h3>
                  <p>{t('finalStepText')}</p>
                </div>
                <div className={styles.ebecPyramidImage}>
                  <Image src={EbecPyrmaidImage} alt="ebec-pyramid-img" />
                </div>
                <div className={styles.explanationText}>
                  <h2>{t('ebecCategoriesTitle')}</h2>

                  <Carousel autoplay>
                    <div className={styles.firstCarouselElement}>
                      <Image src={innDesImg} layout="fill" objectFit="cover" alt="innovative-design-img" />

                      <div className={styles.comptetitionExpl}>
                        <h3>{t('innovativeDesignTitle')}</h3>
                        <p>{t('innovativeDesignText')}</p>
                      </div>
                    </div>
                    <div className={styles.secondCarouselElement}>
                      <Image src={caseStdyImg} layout="fill" objectFit="cover" alt="case-study-img" />

                      <div className={styles.comptetitionExpl}>
                        <h3>{t('caseStudyTitle')}</h3>
                        <p>{t('caseStudyText')}</p>
                      </div>
                    </div>
                  </Carousel>

                  <Button
                    style={{ marginTop: '1rem' }}
                    block
                    href="/booklet.pdf"
                    type="primary"
                    icon={<AiOutlineDownload />}
                  >
                    {t('downlaodBookletText')}
                  </Button>
                </div>
              </TabPane>
              <TabPane className={styles.tabContent} tab={t('howToApplyTitle')} key="2">
                <Form layout="vertical" className={styles.applyForm} form={form}>
                  <p className={styles.explanationText}>{t('howToApplyText')}</p>

                  <div className={styles.formSteps}>
                    <Steps current={current}>
                      {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                      ))}
                    </Steps>
                  </div>

                  <div className="steps-content">{steps[current].content}</div>
                  <div className="steps-action">
                    {current < steps.length - 1 && (
                      <span className={styles.buttonContainer}>
                        <Button type="primary" onClick={handleNextStep}>
                          {t('nextStepButtonText')}
                        </Button>
                      </span>
                    )}
                    {current === steps.length - 1 && (
                      <span className={styles.buttonContainer}>
                        <Button type="primary" onClick={applyForm} loading={loading} disabled={loading}>
                          {t('applyButtonText')}
                        </Button>
                      </span>
                    )}
                    {current > 0 && (
                      <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        {t('previousStepButtonText')}
                      </Button>
                    )}
                  </div>
                </Form>
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
              <TabPane className={styles.tabContent} tab={t('judgesTitle')} key="5">
                <div>
                  <Divider />
                  <div className={styles.judgeCard}>
                    <div className={styles.judgeCardImg}>
                      <Image className={styles.judgeImg} src={erdincAltunImg} alt="erdinc-altun-image" />
                    </div>
                    <div className={styles.judgeInformation}>
                      <h2>Erdinç Altun</h2>
                      <p>Industrial Sustainability Environment and Energy Manager at Ferrero</p>
                      <a href="https://www.linkedin.com/in/erdin%C3%A7-altun-9685054a">LinkedIn</a>
                    </div>
                  </div>
                  <Divider />
                  <div className={styles.judgeCard}>
                    <div className={styles.judgeCardImg}>
                      <Image className={styles.judgeImg} src={nuriAzbarImg} alt="nuri-azbar-img" />
                    </div>
                    <div className={styles.judgeInformation}>
                      <h2>Prof. Dr. Nuri Azbar</h2>
                      <p>Bioengineering</p>
                      <a href="https://www.linkedin.com/in/nuri-azbar-96319a32/">LinkedIn</a>
                    </div>
                  </div>
                  <Divider />
                  <div className={styles.judgeCard}>
                    <div className={styles.judgeCardImg}>
                      <Image className={styles.judgeImg} src={ilkerErolImg} alt="ilker-erol-image" />
                    </div>
                    <div className={styles.judgeInformation}>
                      <h2>İlker Erol</h2>
                      <p>Environmental Engineering</p>
                      <a href="https://www.linkedin.com/in/erol-ilker-8938a137/">LinkedIn</a>
                    </div>
                  </div>
                  <Divider />
                  <div className={styles.judgeCard}>
                    <div className={styles.judgeCardImg}>
                      <Image className={styles.judgeImg} src={sinemToktayImg} alt="sinem-toktay-image" />
                    </div>
                    <div className={styles.judgeInformation}>
                      <h2>Sinem Toktay</h2>
                      <p>Head of Innovation and Entrepreneurship Policies Unit at İzmir Development Agency</p>
                      <a href="https://www.linkedin.com/in/sinem/">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane className={styles.tabContent} tab={t('collaborationText')} key="6"></TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    </ALayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale = 'en' }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'pages', 'ebec'])) },
});

export default Ebec;
