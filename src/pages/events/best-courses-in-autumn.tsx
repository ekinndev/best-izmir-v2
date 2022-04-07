import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import styles from '../events/best-courses-in-autumn.module.scss';
import Image from 'next/image';
import courseLogo from '../../assets/best-courses-in-autumn/BESTCoursesLogo.png';
import { Row, Col, Tabs } from 'antd';
import CourseSchedule from '../../components/BESTCourse/CourseSchedule';
const BestCourse = () => {
  const { t } = useTranslation('ac');
  const { TabPane } = Tabs;
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <Image src={courseLogo} placeholder="blur" alt="course-logo" />
        </div>
      </div>
      <div>
        <Row justify="center">
          <Col xs={24} md={24}>
            <Tabs className={styles.tabStyle} defaultActiveKey="1" centered>
              <TabPane className={styles.tabContent} tab="About Course" key="1">
                <div className={styles.courseDescription}>
                  <div className={styles.courseHeader}>
                    <h1>{t('courseTitle')}</h1>
                  </div>
                  <div>
                    <p>{t('courseDescription1')}</p>
                    <p>{t('courseDescription2')}</p>
                    <p>{t('courseDescription3')}</p>
                    <p>{t('courseDescription4')}</p>
                    <p>{t('courseDescription5')}</p>
                    <p>{t('courseDescription6')}</p>
                    <p>{t('courseDescription7')}</p>
                    <p>{t('courseDescription8')}</p>
                    <p>{t('courseDescription9')}</p>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Schedule" key="2">
                <div className={styles.scheduleContainer}>
                  <CourseSchedule />
                </div>
              </TabPane>
              <TabPane className={styles.tabContent} tab="Survival Guide" key="3"></TabPane>
              <TabPane className={styles.tabContent} tab="F.A.Q" key="4"></TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale = 'en' }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'pages', 'ac'])) },
});

export default BestCourse;
