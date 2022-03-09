import { useTranslation } from 'next-i18next';

import { Form, Input, Row, Col, Divider, Select } from 'antd';

const ApplyFrom = ({ contestant }: { contestant: string }) => {
  const { t } = useTranslation('ebec');
  return (
    <div>
      <Divider orientation="center">{contestant}</Divider>
      <Row gutter={32}>
        <Col className="gutter-row" span={12}>
          <Form.Item name="Name" label={t('formName')} rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={12}>
          <Form.Item name="Surname" label={t('formSurname')} rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="StudentId" label={t('formStudentId')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="Email" label={t('formEmail')} rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="PhoneNumber" label={t('formPhoneNumber')} rules={[{ required: true, max: 12 }]}>
        <Input />
      </Form.Item>
      <Form.Item name="Faculty" label={t('formFaculty')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="Major" label={t('formMajor')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="CompetitionType" label={t('fromCompetitionTypeText')} rules={[{ required: true }]}>
        <Select>
          <Select.Option value="case-study">{t('caseStudyTitle')}</Select.Option>
          <Select.Option value="innovative-design">{t('innovativeDesignTitle')}</Select.Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default ApplyFrom;
