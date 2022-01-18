/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Layout as ALayout, Menu, Switch, Row, Col } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { signOut, useSession } from 'next-auth/client';
import Footer from './Footer/Footer';
import MENU_CONSTANT from '../../constants/Menu';
import LogoStyles from '../Logo/Logo.module.scss';
import Logo from '../Logo/Logo';
import { fetchUser } from '../../store/slices/common';
import staticPages from '../../constants/Pages';
import useWindowSize from '../../hooks/useWindowSize';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useState<'light' | 'dark' | undefined>(undefined);
  const router = useRouter();
  const [session] = useSession();
  const selectedKeys = router.pathname.split('/').map(item => `/${item}`);
  const { Content, Sider } = ALayout;
  const { SubMenu } = Menu;
  const loggedInUser = useAppSelector(state => state.common.userInfo);
  const dispatch = useAppDispatch();
  const [collapsed, setCollapsed] = useState(true);

  const { t, i18n } = useTranslation('menu');
  const pagesTranslation = useTranslation('pages');
  const size = useWindowSize();

  const toggleLanguage = () => {
    setTimeout(() => {
      router.replace(router.pathname, undefined, { locale: router.locale === 'tr' ? 'en' : 'tr' });
    }, 200);
  };

  const onCollapse = (val: boolean) => {
    setCollapsed(val);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setCollapsed(true);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }, []);

  const pageInfo = staticPages.find(info => info.page === router.pathname);

  useEffect(() => {
    if (session != null && !loggedInUser && session?.user?.email) {
      dispatch(fetchUser(session.user.email));
    } else if (!session && loggedInUser) {
      signOut();
    }
  }, [session, loggedInUser, dispatch]);

  return (
    <ALayout>
      {pageInfo && (
        <Head>
          <meta
            name="title"
            content={`${pagesTranslation.t(pageInfo.titleKey)} | ${pagesTranslation.t('bestIzmir')}`}
          />
          {pageInfo.descriptionKey && <meta name="description" content={pagesTranslation.t(pageInfo.descriptionKey)} />}
          <meta
            name="keywords"
            content="BEST,Izmir,BEST Izmir,Board of european students of technology,ebec,yfs,mw izmir,beinci,best courses,avrupe teknoloji öğrencileri topluluğu,ege üniversitesi,ege university"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="Best Izmir" />

          <title>{`${pagesTranslation.t(pageInfo.titleKey)} | ${pagesTranslation.t('bestIzmir')}`}</title>
        </Head>
      )}
      {size?.width && size.width < 700 && (
        <>
          {/* <Row justify="center">
            <Col>

            </Col>
          </Row> */}

          <Menu
            theme={theme}
            defaultSelectedKeys={['1']}
            mode="horizontal"
            selectedKeys={selectedKeys.length > 1 ? selectedKeys.slice(1) : selectedKeys}
          >
            {MENU_CONSTANT.map(menuItem => {
              if (menuItem.id === '/login' && session) return null;
              if (menuItem.isAdmin && !loggedInUser?.isAdmin) return null;
              if (menuItem.protected && !session) return null;
              if (menuItem.subMenu) {
                return (
                  <SubMenu key={menuItem.id} icon={menuItem.icon} title={t(menuItem.languageKey)}>
                    {menuItem.subMenuComponents.map(item => (
                      <Menu.Item key={item.id} icon={item.icon}>
                        <Link href={menuItem.route + item.route}>
                          <a>{t(item.languageKey)}</a>
                        </Link>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                );
              }
              return (
                <Menu.Item key={menuItem.id} icon={menuItem.icon}>
                  {menuItem.isExternal ? (
                    <a href={menuItem.route}>{t(menuItem.languageKey)}</a>
                  ) : (
                    <Link href={menuItem.route}>
                      <a>{t(menuItem.languageKey)}</a>
                    </Link>
                  )}
                </Menu.Item>
              );
            })}
            <Menu.Item>
              <Row justify="space-between">
                <Switch
                  size="default"
                  defaultChecked={i18n.language === 'en'}
                  onChange={toggleLanguage}
                  unCheckedChildren="TR"
                  disabled={!!session}
                  checkedChildren="EN"
                />
              </Row>
            </Menu.Item>
          </Menu>
        </>
      )}
      {size?.width && size.width >= 700 && (
        <Sider className="sidebar" theme={theme} collapsed={collapsed} onCollapse={onCollapse} collapsible>
          <div className={LogoStyles.logo}>
            {!collapsed && <Logo width={225} height={125} isDark={theme === 'dark'} />}
          </div>
          <Row justify="center">
            <Col>
              <Switch
                size="default"
                defaultChecked={i18n.language === 'en'}
                onChange={toggleLanguage}
                unCheckedChildren="TR"
                disabled={!!session}
                checkedChildren="EN"
              />
            </Col>
          </Row>

          <Menu
            theme={theme}
            defaultSelectedKeys={['1']}
            mode="inline"
            selectedKeys={selectedKeys.length > 1 ? selectedKeys.slice(1) : selectedKeys}
          >
            {MENU_CONSTANT.map(menuItem => {
              if (menuItem.id === '/login' && session) return null;
              if (menuItem.isAdmin && !loggedInUser?.isAdmin) return null;
              if (menuItem.protected && !session) return null;
              if (menuItem.subMenu) {
                return (
                  <SubMenu key={menuItem.id} icon={menuItem.icon} title={t(menuItem.languageKey)}>
                    {menuItem.subMenuComponents.map(item => (
                      <Menu.Item key={item.id} icon={item.icon}>
                        <Link href={menuItem.route + item.route}>
                          <a>{t(item.languageKey)}</a>
                        </Link>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                );
              }
              return (
                <Menu.Item key={menuItem.id} icon={menuItem.icon}>
                  {menuItem.isExternal ? (
                    <a href={menuItem.route}>{t(menuItem.languageKey)}</a>
                  ) : (
                    <Link href={menuItem.route}>
                      <a>{t(menuItem.languageKey)}</a>
                    </Link>
                  )}
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
      )}
      <ALayout className="main-layout">
        {/* <Header /> */}
        <Content>{children}</Content>
        <Footer />
      </ALayout>
    </ALayout>
  );
};

Layout.propTypes = {};

export default Layout;
