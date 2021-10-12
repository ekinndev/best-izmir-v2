/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const NextLink = ({ children, ...props }) => (
  <Link {...props}>
    <a>{children}</a>
  </Link>
);

NextLink.propTypes = {
  children: PropTypes.element.isRequired,
};

export default NextLink;
