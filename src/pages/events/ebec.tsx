import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import ebecLogo from '../../assets/logos/ebec.svg';
import styles from '../events/Ebec.module.scss';
import Image from 'next/image';
import { Tabs, Button } from 'antd';
const { TabPane } = Tabs;

const Ebec = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={ebecLogo} />
      </div>

      <Tabs className={styles.tabStyle} defaultActiveKey="1" centered>
        <TabPane className={styles.tabContent} tab="EBEC Nedir?" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane className={styles.tabContent} tab="Nasıl Başvurabilirim?" key="2">
          Content of Tab Pane 2
          <div className={styles.buttonContainer}>
            <Button size="large" type="primary">
              Başvur!
            </Button>
          </div>
        </TabPane>
        <TabPane className={styles.tabContent} tab="Geçmiş Yarışmalar" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane className={styles.tabContent} tab="S.S.S." key="4">
          Content of Tab Pane 4
        </TabPane>
      </Tabs>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale = 'en' }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'pages'])) },
});

export default Ebec;
