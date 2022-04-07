import { useTranslation } from 'next-i18next';

import { Row, Col } from 'antd';
import ScheduleRow from './ScheduleRow';
import styles from './courschedule.module.scss';
const CourseSchedule = () => {
  const { t } = useTranslation('ac');

  const row0 = [
    '',
    '02.09.22 Friday',
    '03.09.22 Saturday',
    '04.09.22 Sunday',
    '05.09.22 Monday',
    '06.09.22 Tuesday',
    '07.09.22 Wednesday',
    '08.09.22 Thursday',
    '09.09.22 Friday',
    '10.09.22 Saturday',
    '11.09.22 Sunday',
  ];

  const row1 = [
    '8.00',
    'Arrival',
    'Wake Up',
    'Wake Up',
    'Wake Up',
    'Wake Up',
    'Wake Up',
    'Wake Up',
    'Wake Up',
    'Wake Up',
    'Wake Up',
  ];
  const row2 = [
    '8.30',
    'Arrival',
    'Breakfast',
    'Breakfast',
    'Breakfast',
    'Breakfast',
    'Breakfast',
    'Breakfast',
    'Breakfast',
    'Breakfast',
    'Breakfast',
  ];
  const row3 = [
    '9.00',
    'Arrival',
    'Breakfast',
    'Breakfast',
    'Breakfast',
    'Breakfast',
    'Breakfast',
    'Breakfast',
    'Breakfast',
    'Breakfast',
    'Breakfast',
  ];
  const row4 = [
    '9.30',
    'Arrival',
    'Weekend Trip',
    'Weekend Trip',
    'Arrival to Faculty',
    'Arrival to Faculty',
    'Arrival to Faculty',
    'Arrival to Faculty',
    'Arrival to Faculty',
    'Arrival to Faculty',
    'Departure',
  ];
  const row5 = [
    '10.00',
    'Arrival',
    'Weekend Trip',
    'Weekend Trip',
    'Offical Opening',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'City Rally',
    'Departure',
  ];
  const row6 = [
    '10.30',
    'Arrival',
    'Weekend Trip',
    'Weekend Trip',
    'Offical Opening',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'City Rally',
    'Departure',
  ];
  const row7 = [
    '11.00',
    'Arrival',
    'Weekend Trip',
    'Weekend Trip',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'City Rally',
    'Departure',
  ];
  const row8 = [
    '11.30',
    'Arrival',
    'Weekend Trip',
    'Weekend Trip',
    'Academic Activity',
    'Coffee Break',
    'Coffee Break',
    'Coffee Break',
    'Coffee Break',
    'City Rally',
    'Departure',
  ];
  const row9 = [
    '12.00',
    'Arrival',
    'Weekend Trip',
    'Weekend Trip',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'City Rally',
    'Departure',
  ];
  const row10 = [
    '12.30',
    'Arrival',
    'Weekend Trip',
    'Weekend Trip',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'City Rally',
    'Departure',
  ];
  const row11 = [
    '13.00',
    'Arrival',
    'Weekend Trip',
    'Weekend Trip',
    'Lunch',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'City Rally',
    'Departure',
  ];
  const row12 = [
    '13.30',
    'Arrival',
    'Weekend Trip',
    'Weekend Trip',
    'Lunch',
    'Lunch',
    'Lunch',
    'Lunch',
    'Lunch',
    'City Rally',
    'Departure',
  ];
  const row13 = [
    '14.00',
    'Arrival',
    'Weekend Trip',
    'Weekend Trip',
    'Academic Activity',
    'Lunch',
    'Lunch',
    'Lunch',
    'Lunch',
    'City Rally',
    'Departure',
  ];
  const row14 = [
    '14.30',
    'Arrival',
    'Weekend Trip',
    'Weekend Trip',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Evaulation/Exam',
    'City Rally',
    'Departure',
  ];
  const row15 = [
    '15.00',
    'Arrival',
    'Weekend Trip',
    'Weekend Trip',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',

    'Evaulation/Exam',
    'City Rally',
    'Departure',
  ];
  const row16 = [
    '15.30',
    'Arrival',
    'Weekend Trip',
    'Weekend Trip',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',

    'Evaulation/Exam',
    'City Rally',
    'Departure',
  ];
  const row17 = [
    '16.00',
    'Arrival',
    'Weekend Trip',
    'Weekend Trip',
    'Coffee Break',
    'Coffee Break',
    'Coffee Break',
    'Coffee Break',
    'Evaulation/Exam',
    'City Rally',
    'Departure',
  ];
  const row18 = [
    '16.30',
    'Arrival',
    'Weekend Trip',
    'Weekend Trip',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Evaulation/Exam',
    'City Rally',
    'Departure',
  ];
  const row19 = [
    '17.00',
    'Free Time',
    'Weekend Trip',
    'Weekend Trip',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Official Closing',
    'City Rally',
    'Departure',
  ];
  const row20 = [
    '17.30',
    'Free Time',
    'Weekend Trip',
    'Weekend Trip',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Academic Activity',
    'Official Closing',
    'City Rally',
    'Departure',
  ];
  const row21 = [
    '18.00',
    'Dinner Time',
    'Weekend Trip',
    'Weekend Trip',
    'Free Time & Preparation for the Night',
    'Free Time & Preparation for the Night',
    'Free Time & Preparation for the Night',
    'Free Time & Preparation for the Night',
    'Free Time & Preparation for the Night',
    'City Rally',
    'Departure',
  ];
  const row22 = [
    '18.30',
    'Dinner Time',
    'Weekend Trip',
    'Weekend Trip',
    'Free Time & Preparation for the Night',
    'Free Time & Preparation for the Night',
    'Free Time & Preparation for the Night',
    'Free Time & Preparation for the Night',
    'Free Time & Preparation for the Night',
    'City Rally',
    'Departure',
  ];
  const row23 = [
    '19.00',
    'Dinner Time',
    'Weekend Trip',
    'Weekend Trip',
    'Dinner Time',
    'Dinner Time',
    'Dinner Time',
    'Dinner Time',
    'Dinner Time',
    'City Rally',
    'Departure',
  ];
  const row24 = [
    '19.30',
    'Get 2 Know',
    'Weekend Trip',
    'Weekend Trip',
    'Dinner Time',
    'Dinner Time',
    'Dinner Time',
    'Dinner Time',
    'Dinner Time',
    'City Rally',
    'Departure',
  ];
  const row25 = [
    '20.00',
    'Get 2 Know',
    'Weekend Trip',
    'Weekend Trip',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'City Rally',
    'Departure',
  ];
  const row26 = [
    '20.30',
    'Get 2 Know',
    'Weekend Trip',
    'Weekend Trip',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'City Rally',
    'Departure',
  ];
  const row27 = [
    '21.00',
    'Social Activity',
    'Weekend Trip',
    'Weekend Trip',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'City Rally',
    'Departure',
  ];
  const row28 = [
    '21.30',
    'Social Activity',
    'Weekend Trip',
    'Weekend Trip',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'City Rally',
    'Departure',
  ];
  const row29 = [
    '22.00',
    'Social Activity',
    'Weekend Trip',
    'Weekend Trip',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'City Rally',
    'Departure',
  ];
  const row30 = [
    '22.30',
    'Social Activity',
    'Weekend Trip',
    'Weekend Trip',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'City Rally',
    'Departure',
  ];
  const row31 = [
    '23.00',
    'Social Activity',
    'Weekend Trip',
    'Weekend Trip',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'City Rally',
    'Departure',
  ];
  const row32 = [
    '23.30',
    'Social Activity',
    'Weekend Trip',
    'Weekend Trip',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'City Rally',
    'Departure',
  ];
  const row33 = [
    '00.00',
    'Social Activity',
    'Weekend Trip',
    'Weekend Trip',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'Social Activity',
    'City Rally',
    'Departure',
  ];
  const rows = [
    row0,
    row1,
    row2,
    row3,
    row4,
    row5,
    row6,
    row7,
    row8,
    row9,
    row10,
    row11,
    row12,
    row13,
    row14,
    row15,
    row16,
    row17,
    row18,
    row19,
    row20,
    row21,
    row22,
    row23,
    row24,
    row25,
    row26,
    row27,
    row28,
    row29,
    row30,
    row31,
    row32,
    row33,
  ];
  return (
    <div className={styles.scheduleContainer}>
      {rows.map(row => (
        <ScheduleRow key={row[0]} events={row} />
      ))}
    </div>
  );
};

export default CourseSchedule;
