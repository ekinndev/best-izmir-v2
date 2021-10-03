/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Layout as ALayout, Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import MENU_CONSTANT from '../../constants/Menu';

const Layout = ({ children }) => {
  const router = useRouter();
  const selectedKeys = router.pathname.split('/').map(item => `/${item}`);
  const { Header, Footer, Content, Sider } = ALayout;
  const { SubMenu } = Menu;

  const { t } = useTranslation('menu');

  return (
    <ALayout>
      <Sider>
        {/* <div className="logo" /> */}

        <Menu
          theme="dark"
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
                      <Link href={menuItem.route + item.route}>{t(item.languageKey)}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            }
            return (
              <Menu.Item key={menuItem.id} icon={menuItem.icon}>
                <Link href={menuItem.route}>{t(menuItem.languageKey)}</Link>
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
