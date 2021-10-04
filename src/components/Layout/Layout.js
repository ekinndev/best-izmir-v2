/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Layout as ALayout, Menu, Switch, Row, Col } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { BsSun, BsMoon } from 'react-icons/bs';
import MENU_CONSTANT from '../../constants/Menu';
import SidebarStyles from './Sidebar.module.scss';
import LogoStyles from '../Logo/Logo.module.scss';
import Logo from '../Logo/Logo';
import { toggleTheme } from '../../store/slices/common';

const Layout = ({ children }) => {
  const router = useRouter();
  const selectedKeys = router.pathname.split('/').map(item => `/${item}`);
  const { Header, Footer, Content, Sider } = ALayout;
  const { SubMenu } = Menu;
  const theme = useSelector(state => state.common.theme);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation('menu');

  const toggleLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('tr');
    } else {
      i18n.changeLanguage('en');
    }
  };

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <ALayout>
      <Sider className={SidebarStyles.sidebar} theme={theme}>
        <div className={LogoStyles.logo}>
          <Logo width={225} height={125} isDark={theme === 'dark'} />
        </div>
        <Row justify="space-between">
          <Col>
            <Switch
              size="default"
              defaultChecked={i18n.language === 'en'}
              onChange={toggleLanguage}
              unCheckedChildren="TR"
              checkedChildren="EN"
            />
          </Col>
          <Col>
            <Switch
              size="default"
              defaultChecked={theme === 'dark'}
              onChange={toggleThemeHandler}
              unCheckedChildren={<BsSun />}
              checkedChildren={<BsMoon />}
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
                <Link href={menuItem.route}>
                  <a>{t(menuItem.languageKey)}</a>
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <ALayout>
        {/* <Header /> */}
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </ALayout>
    </ALayout>
  );
};

Layout.propTypes = {};

export default Layout;
