import { useTranslation } from 'next-i18next';

import { Form, Input, Row, Col, Divider } from 'antd';

const ApplyFrom = ({ contestant }: { contestant: string }) => {
  const { t } = useTranslation('ebec');
  return (
    <div>
      <Divider orientation="center">{contestant}</Divider>
      <Row gutter={32}>
        <Col className="gutter-row" span={12}>
          <Form.Item label={t('formName')} rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item label={t('formSurname')} rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label={t('formStudentId')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label={t('formEmail')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label={t('formPhoneNumber')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label={t('formFaculty')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label={t('formMajor')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
    </div>
  );
};

export default ApplyFrom;
