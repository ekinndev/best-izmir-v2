import React from 'react';
import PropTypes from 'prop-types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Col, Layout as ALayout, Row, Form, Input, Button } from 'antd';
import { useTranslation } from 'next-i18next';
import Hero from '../../components/Hero/Hero';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Contact = props => {
  const { t } = useTranslation('formSettings');

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <ALayout>
      <Hero
        contentId="heroContentContactUs"
        titleId="heroTitleContactUs"
        image="https://via.placeholder.com/1430x500"
      />
      <section className="contact_us">
        <SectionTitle titleId="sectionTitleContactUs" type="h2" />
        <Row justify="space-between">
          <Col sm={{ span: 24 }} md={{ span: 10 }}>
            <Form name="contact_us" {...layout}>
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
                    type: 'number',
                    required: true,
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
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 14 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }}>
            <div style={{ overflowX: 'auto' }}>
              <iframe
                // eslint-disable-next-line max-len
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.377709592156!2d27.226501515168586!3d38.45584047964118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b97d94e40b5037%3A0xad7e4fcf964882ba!2sBEST%20%C4%B0zmir%20Toplulu%C4%9Fu%20Ofisi!5e0!3m2!1sen!2str!4v1634219101564!5m2!1sen!2str"
                width="600"
                height="450"
                title="best-izmir"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </section>
    </ALayout>
  );
};

Contact.propTypes = {};

export const getServerSideProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'menu', 'pages', 'hero', 'formSettings'])) },
});

export default Contact;
