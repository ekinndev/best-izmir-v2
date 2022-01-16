import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Col, Layout as ALayout, Row, Form, Input, Button, message } from 'antd';
import { useTranslation } from 'next-i18next';
import axios from 'axios';
import Hero from '../../components/Hero/Hero';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ContactHeroImage from '../../assets/pages/contact.webp';

interface FormValues {
  user: {
    email: string;
    message: string;
    name: string;
    number?: string;
    subject: string;
  };
}

const Contact = () => {
  const { t } = useTranslation('formSettings');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: FormValues) => {
    try {
      setLoading(true);
      await axios.post('/api/mail', values?.user);
      message.success(t('contactFormMessages.successSentMessage'));
    } catch (e) {
      message.error(t('contactFormMessages.errorSentMessage'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <ALayout>
      <Hero contentId="heroContentContactUs" titleId="heroTitleContactUs" image={ContactHeroImage} />
      <section className="contact_us">
        <SectionTitle titleId="sectionTitleContactUs" type="h2" />
        <Row justify="center" gutter={[16, 24]}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10 }}>
            <Form
              name="contact_us"
              onFinish={onSubmit}
              labelAlign="left"
              labelCol={{ xs: { span: 24 }, sm: { span: 4 } }}
              wrapperCol={{ xs: { span: 24 }, sm: { span: 20 } }}
            >
              <Form.Item
                name={['user', 'name']}
                label={t('contactFormLabels.name')}
                rules={[
                  {
                    required: true,
                    type: 'string',
                    message: t('validations.nameRequired'),
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'email']}
                label={t('contactFormLabels.email')}
                rules={[
                  {
                    type: 'email',
                    required: true,
                    message: t('validations.emailRequired'),
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'number']}
                label={t('contactFormLabels.phone')}
                rules={[
                  {
                    required: false,
                    message: t('validations.phoneNumberRequired'),
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'subject']}
                label={t('contactFormLabels.subject')}
                rules={[
                  {
                    type: 'string',
                    required: true,
                    message: t('validations.subjectRequired'),
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'message']}
                label={t('contactFormLabels.message')}
                rules={[
                  {
                    type: 'string',
                    required: true,
                    message: t('validations.messageRequired'),
                  },
                ]}
              >
                <Input.TextArea autoSize={{ minRows: 10, maxRows: 10 }} />
              </Form.Item>
              <Form.Item wrapperCol={{ xs: { span: 24, offset: 12 }, sm: { span: 24, offset: 12 } }}>
                <Button type="primary" htmlType="submit" disabled={loading} loading={loading}>
                  {t('contactFormLabels.btnText')}
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <div style={{ overflowX: 'auto', textAlign: 'center' }}>
              <iframe
                // eslint-disable-next-line max-len
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.3777095 92156!2d27.226501515168586!3d38.45584047964118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b97d94e40b5037%3A0xad7e4fcf964882ba!2sBEST%20%C4%B0zmir%20Toplulu%C4%9Fu%20Ofisi!5e0!3m2!1sen!2str!4v1634219101564!5m2!1sen!2str"
                width="600"
                height="450"
                title="best-izmir"
                style={{ border: '0' }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </section>
    </ALayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale = 'en' }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'pages', 'hero', 'formSettings'])) },
});

export default Contact;
