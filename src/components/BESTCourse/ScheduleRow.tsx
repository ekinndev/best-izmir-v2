import { useTranslation } from 'next-i18next';

import { Row, Col } from 'antd';
import styles from './courschedule.module.scss';

const ScheduleRow = (props: { events: string[] }) => {
  //Etkinlik 10 gün. Saatlerin yazılacağı sütunla beraber toplam 11 sütun var.
  //Prop olarak saatler ve etkinliklerin bulunduğu bir obje arrayi alınır alınır
  const { events } = props;
  const { t } = useTranslation('ac');
  return (
    <div className={styles.rowContainer}>
      <Row gutter={18}>
        {events.map((event, index) => (
          <Col key={index} className={styles.column}>
            {event}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ScheduleRow;
