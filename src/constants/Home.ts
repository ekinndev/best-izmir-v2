/* eslint-disable import/prefer-default-export */
import ebecLogo from '../assets/logos/ebec.svg';
import courseLogo from '../assets/logos/course.svg';
import partnerLogo1 from '../assets/partners/1.png';
import partnerLogo2 from '../assets/partners/2.png';
import partnerLogo3 from '../assets/partners/3.png';
import partnerLogo4 from '../assets/partners/4.png';
import partnerLogo5 from '../assets/partners/5.png';
import partnerLogo6 from '../assets/partners/6.svg';
import partnerLogo7 from '../assets/partners/7.png';
import partnerLogo8 from '../assets/partners/8.png';
import partnerLogo9 from '../assets/partners/9.png';
import partnerLogo10 from '../assets/partners/10.png';
import partnerLogo11 from '../assets/partners/11.png';
import partnerLogo13 from '../assets/partners/13.png';
import partnerLogo14 from '../assets/partners/14.png';
import partnerLogo15 from '../assets/partners/15.png';
import partnerLogo16 from '../assets/partners/16.png';

interface homePageEventsType {
  titleKey: string;
  contentKey: string;
  link: string;
  imageLink: string;
}

export const homePageEvents: homePageEventsType[] = [
  {
    titleKey: 'events.ebecTitle',
    contentKey: 'events.ebecContent',
    link: '/events/ebec',
    imageLink: ebecLogo,
  },
  {
    titleKey: 'events.mwIzmirTitle',
    contentKey: 'events.mwIzmirContent',
    link: '/events/mw-izmir',
    imageLink: 'https://via.placeholder.com/464x150',
  },
  {
    titleKey: 'events.yfsTitle',
    contentKey: 'events.yfsContent',
    link: '/events/yfs',
    imageLink: 'https://via.placeholder.com/464x150',
  },
  {
    titleKey: 'events.beinciTitle',
    contentKey: 'events.beinciContent',
    link: '/events/beinci',
    imageLink: 'https://via.placeholder.com/464x150',
  },
  {
    titleKey: 'events.courseTitle',
    contentKey: 'events.courseContent',
    link: '/events/best-courses-in-autumn',
    imageLink: courseLogo,
  },
];

interface homePagePartners {
  id: number | string;
  imageLink: string;
  width: number;
  height: number;
  externalLink: string;
  partnerName: string;
}

export const homePagePartners: homePagePartners[] = [
  {
    id: '13',
    partnerName: 'Microsoft Logo',
    imageLink: partnerLogo13,
    width: 216,
    height: 46,
    externalLink: 'https://www.microsoft.com/tr-tr',
  },
  {
    id: '14',
    partnerName: 'Bosch Logo',
    imageLink: partnerLogo14,
    width: 240,
    height: 100,
    externalLink: 'https://www.bosch-home.com.tr/',
  },
  {
    id: '15',
    partnerName: 'Vestel Logo',
    imageLink: partnerLogo15,
    width: 192,
    height: 50,
    externalLink: 'https://www.vestel.com.tr/',
  },
  {
    id: '16',
    partnerName: 'Erasmus+ Logo',
    imageLink: partnerLogo16,
    width: 175,
    height: 36,
    externalLink: 'https://erasmus-plus.ec.europa.eu/',
  },
  {
    id: '1',
    partnerName: 'Renkler Makina Logo',
    imageLink: partnerLogo1,
    width: 150,
    height: 34,
    externalLink: 'https://www.renklermakina.com/',
  },
  { id: '2', partnerName: '', imageLink: partnerLogo3, width: 181, height: 90, externalLink: 'http://upegem.org/' },
  {
    id: '3',
    partnerName: 'Teol Logo',
    imageLink: partnerLogo4,
    width: 187,
    height: 67,
    externalLink: 'https://www.teol.com.tr/',
  },
  {
    id: '4',
    partnerName: 'Dilek Matbaacılık Logo',
    imageLink: partnerLogo5,
    width: 300,
    height: 155,
    externalLink: 'http://www.dilekmatbaacilik.com/',
  },
  {
    id: '5',
    partnerName: 'English Time Logo',
    imageLink: partnerLogo6,
    width: 300,
    height: 155,
    externalLink: 'https://www.englishtime.com/',
  },
  {
    id: '6',
    partnerName: 'Kesiad Logo',
    imageLink: partnerLogo7,
    width: 300,
    height: 135,
    externalLink: 'https://www.kesiad.org/',
  },
  {
    id: '7',
    partnerName: 'İspanyol Kültür Derneği Logo',
    imageLink: partnerLogo8,
    width: 272,
    height: 75,
    externalLink: 'http://www.ispanyolkulturdernegi.com/',
  },
  {
    id: '8',
    partnerName: 'Kuşadası Belediyesi Logo',
    imageLink: partnerLogo9,
    width: 102,
    height: 144,
    externalLink: 'https://kusadasi.bel.tr/',
  },
  {
    id: '9',
    partnerName: 'Casa Italia Logo',
    imageLink: partnerLogo10,
    width: 270,
    height: 90,
    externalLink: 'https://www.casaitaliatr.com/',
  },
  {
    id: '10',
    partnerName: 'American Life Logo',
    imageLink: partnerLogo11,
    width: 177,
    height: 76,
    externalLink: 'https://www.americanlife.com.tr/',
  },
  {
    id: '11',
    partnerName: 'Bornova Belediyesi Logo',
    imageLink: partnerLogo2,
    width: 272,
    height: 173,
    externalLink: 'https://bornova.bel.tr/',
  },
];
