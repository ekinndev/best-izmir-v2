import { useTranslation } from 'next-i18next';
import { Col } from 'antd';
import styles from './courschedule.module.scss';
const ScheduleCell = ({ event }: { event: string }) => {
  const { t } = useTranslation('ac');
  if (event === 'Weekend Trip')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'yellow' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'Wake Up')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'lightsalmon' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'Arrival')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'grey' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'Free Time')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'red' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'Dinner Time')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'darkgreen' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'Get 2 Know')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'green' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'Social Activity')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'lightgreen' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'Breakfast')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'purple' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'Arrival to Faculty')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'cyan' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'Offical Opening')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'grey' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'Academic Activity')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'lightblue' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'Coffee Break')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'brown' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'Free Time & Preparation for the Night')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'red' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'Lunch')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'pink' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'Evaulation/Exam')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'lightblue' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'Official Closing')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'grey' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'City Rally')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'yellow' }}>
        <h3>{event}</h3>
      </Col>
    );
  else if (event === 'Departure')
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'grey' }}>
        <h3>{event}</h3>
      </Col>
    );
  else
    return (
      <Col className={styles.column} span={12} style={{ backgroundColor: 'orange' }}>
        <h2>{event}</h2>
      </Col>
    );
};

export default ScheduleCell;
