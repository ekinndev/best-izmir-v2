import { useTranslation } from 'next-i18next';

import { Row, Col } from 'antd';

import ScheduleCell from './ScheduleCell';
const ScheduleRow = ({ events, day }: { events: string[][]; day: number }) => {
  const { t } = useTranslation('ac');
  return (
    <div>
      {events.map((event, index) => (
        <Row key={index} gutter={18}>
          <ScheduleCell event={event[0]} />
          <ScheduleCell event={event[day]} />
        </Row>
      ))}
    </div>
  );
};

export default ScheduleRow;
