interface staticPages {
  page: string;
  titleKey: string;
}

const staticPages: staticPages[] = [
  {
    page: '/',
    titleKey: 'homePageTitle',
  },
  {
    page: '/about-us',
    titleKey: 'aboutUsPageTitle',
  },
  {
    page: '/events/ebec',
    titleKey: 'ebecPageTitle',
  },
  {
    page: '/events/mw-izmir',
    titleKey: 'mwIzmirPageTitle',
  },
  {
    page: '/events/yfs',
    titleKey: 'yfsPageTitle',
  },
  {
    page: '/events/beinci',
    titleKey: 'beinciPageTitle',
  },
  {
    page: '/events/autumn-course',
    titleKey: 'autumnCoursePageTitle',
  },
  {
    page: '/faq',
    titleKey: 'faqPageTitle',
  },
  {
    page: '/contact',
    titleKey: 'contactPageTitle',
  },
  {
    page: '/profile',
    titleKey: 'profilePageTitle',
  },
  {
    page: '/meetings',
    titleKey: 'meetingsPageTitle',
  },
  {
    page: '/meetings/create',
    titleKey: 'meetingsCreatePageTitle',
  },
  {
    page: '/signin',
    titleKey: 'loginPageTitle',
  },
];

export default staticPages;
