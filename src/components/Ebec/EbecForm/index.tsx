import React from 'react';
/*import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';*/

import { Form, Input, Row, Col, Divider } from 'antd';

const ApplyFrom = ({ contestant }: { contestant: string }) => {
  return (
    <div>
      <Divider orientation="center">{contestant}</Divider>
      <Row gutter={32}>
        <Col className="gutter-row" span={12}>
          <Form.Item label="İsim:" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item label="Soyisim:" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="Öğrenci Numarası:" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Email:" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Telefon Numarası:" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Fakülte:" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Bölüm:" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
    </div>
  );
};

/*export const getServerSideProps: GetServerSideProps = async ({ locale = 'en' }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'pages', 'ebec'])) },
});*/
export default ApplyFrom;
