import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const Footer = props => {
  const AFooter = Layout.Footer;

  return (
    <AFooter className="footer-menu">
      <div className="fmenu-wrap">
        <h3 className="ftitle">asas</h3>
        <ul className="fmenu">
          <li className="fmenu-item">asas</li>
          <li className="fmenu-item">asas</li>
          <li className="fmenu-item">asas</li>
          <li className="fmenu-item">asas</li>
          <li className="fmenu-item">asas</li>
          <li className="fmenu-item">asas</li>
        </ul>
      </div>

      <div className="fmenu-wrap">
        <h3 className="ftitle">asas</h3>
        <ul className="fmenu">
          <li className="fmenu-item">asas</li>
          <li className="fmenu-item">asas</li>
          <li className="fmenu-item">asas</li>
          <li className="fmenu-item">asas</li>
          <li className="fmenu-item">asas</li>
          <li className="fmenu-item">asas</li>
        </ul>
      </div>
    </AFooter>
  );
};

Footer.propTypes = {};

export default Footer;
