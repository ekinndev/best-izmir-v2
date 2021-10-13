import React from 'react';
import PropTypes from 'prop-types';
import { Col, Layout, Row } from 'antd';
import { FiGithub, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = props => {
  const AFooter = Layout.Footer;

  return (
    <AFooter className="footer-menu">
      <Row justify="space-between">
        <Col span={12}>
          <div className="social_media">
            <a href="https://github.com/BEST-Izmir" target="_blank" rel="noopener noreferrer">
              <FiGithub size="2rem" />
            </a>
            <a href="https://www.linkedin.com/company/bestizmir/" target="_blank" rel="noopener noreferrer">
              <FiLinkedin size="2rem" />
            </a>
            <a href="https://www.instagram.com/best.izmir/" target="_blank" rel="noopener noreferrer">
              <FiInstagram size="2rem" />
            </a>
            <a href="https://www.facebook.com/BEST.IZMIR" target="_blank" rel="noopener noreferrer">
              <FiFacebook size="2rem" />
            </a>
          </div>
        </Col>
        <Col span={12}>
          <div className="copyright_text">Copyright 2020. BEST Izmir</div>
        </Col>
      </Row>
    </AFooter>
  );
};

Footer.propTypes = {};

export default Footer;
