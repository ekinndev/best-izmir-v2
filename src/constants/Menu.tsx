/* eslint-disable object-curly-newline */
import { IconType } from 'react-icons/lib';
import { FcCalendar, FcHome, FcInfo, FcPhone, FcBusinessman, FcSafe, FcHighPriority, FcFaq } from 'react-icons/fc';
import React from 'react';

interface SubMenuItem {
  id: string;
  languageKey: string;
  subMenu: boolean;
  route: string;
  icon: JSX.Element | null;
  subMenuComponents: SubMenuItem[];
}

interface MenuItem {
  id: string;
  subMenu: boolean;
  languageKey: string;
  subMenuComponents: Array<SubMenuItem>;
  icon: JSX.Element | null;
  protected?: boolean;
  isExternal?: string;
  route: string;
  isAdmin?: boolean;
}

const MENU_CONSTANT: MenuItem[] = [
  {
    id: '/',
    subMenu: false,
    languageKey: 'Home',
    subMenuComponents: [],

    icon: <FcHome />,
    route: '/',
  },
  {
    id: '/profile',
    languageKey: 'Profil',
    subMenu: false,
    route: '/profile',
    protected: true,
    subMenuComponents: [],

    icon: <FcBusinessman />,
  },
  {
    id: '/login',
    languageKey: 'Login',
    subMenu: false,
    route: '/signin',
    subMenuComponents: [],

    icon: <FcSafe />,
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
    id: '/faq',
    languageKey: 'Faq',
    subMenu: false,
    route: '/faq',
    subMenuComponents: [],

    icon: <FcFaq />,
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
    id: '/admin',
    languageKey: 'admin',
    subMenu: true,
    isAdmin: true,
    protected: true,
    route: '/meetings',
    subMenuComponents: [
      {
        id: '/meetings',
        languageKey: 'meetings',
        subMenu: false,
        route: '/',
        subMenuComponents: [],

        icon: null,
      },
      {
        id: '/meetings/create',
        languageKey: 'createMeetings',
        subMenu: false,
        route: '/create',
        subMenuComponents: [],
        icon: null,
      },
    ],

    icon: <FcHighPriority />,
  },
];

export default MENU_CONSTANT;
