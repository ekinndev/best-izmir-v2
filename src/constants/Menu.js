/* eslint-disable object-curly-newline */
import { FcCalendar, FcHome, FcInfo, FcPhone, FcPicture, FcBusinessman } from 'react-icons/fc';

const MENU_CONSTANT = [
  {
    id: '/',
    subMenu: false,
    languageKey: 'Home',
    subMenuComponents: [],

    icon: <FcHome />,
    route: '/',
  },
  {
    id: '/about-us',
    subMenu: false,
    languageKey: 'About',
    subMenuComponents: [],

    route: '/about-us',
    icon: <FcInfo />,
  },
  {
    id: '/events',
    subMenu: true,
    languageKey: 'Events',
    subMenuComponents: [
      {
        id: '/ebec',
        languageKey: 'Ebec',
        subMenu: false,
        route: '/ebec',
        subMenuComponents: [],

        icon: null,
      },
      {
        id: '/mw-izmir',
        languageKey: 'MwIzmir',
        subMenu: false,
        route: '/mw-izmir',
        subMenuComponents: [],

        icon: null,
      },
      {
        id: '/yfs',
        subMenu: false,
        languageKey: 'Yfs',
        route: '/yfs',
        subMenuComponents: [],

        icon: null,
      },
      {
        id: '/beinci',
        languageKey: 'beinci',
        subMenu: false,
        route: '/beinci',
        subMenuComponents: [],

        icon: null,
      },
      {
        id: '/autumn-course',
        languageKey: 'bestCourse',
        subMenu: false,
        route: '/autumn-course',
        subMenuComponents: [],

        icon: null,
      },
    ],

    route: '/events',
    icon: <FcCalendar />,
  },
  {
    id: '/gallery',
    languageKey: 'Gallery',
    subMenu: false,
    route: '/gallery',
    subMenuComponents: [],

    icon: <FcPicture />,
  },
  {
    id: '/contact',
    subMenu: false,
    languageKey: 'Contact',
    route: '/contact',
    subMenuComponents: [],

    icon: <FcPhone />,
  },
  {
    id: '/profile',
    languageKey: 'Profil',
    subMenu: false,
    route: '/profile',
    subMenuComponents: [],

    icon: <FcBusinessman />,
  },
];

export default MENU_CONSTANT;
