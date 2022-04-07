interface staticPages {
  page: string;
  titleKey: string;
  descriptionKey?: string;
}

const staticPages: staticPages[] = [
  {
    page: '/',
    titleKey: 'homePageTitle',
    descriptionKey: 'homePageDescription',
  },
  {
    page: '/about-us',
    titleKey: 'aboutUsPageTitle',
    descriptionKey: 'aboutUsPageDescription',
  },
  {
    page: '/events/ebec',
    titleKey: 'ebecPageTitle',
    descriptionKey: 'ebecPageDescription',
  },
  {
    page: '/events/mw-izmir',
    titleKey: 'mwIzmirPageTitle',
    descriptionKey: 'mwIzmirPageDescription',
  },
  {
    page: '/events/yfs',
    titleKey: 'yfsPageTitle',
    descriptionKey: 'yfsPageDescription',
  },
  {
    page: '/events/beinci',
    titleKey: 'beinciPageTitle',
    descriptionKey: 'beinciPageDescription',
  },
  {
    page: '/events/best-courses-in-autumn',
    titleKey: 'autumnCoursePageTitle',
    descriptionKey: 'autumnCoursePageDescription',
  },
  {
    page: '/faq',
    titleKey: 'faqPageTitle',
    descriptionKey: 'faqPageDescription',
  },
  {
    page: '/contact',
    titleKey: 'contactPageTitle',
    descriptionKey: 'contactPageDescription',
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
