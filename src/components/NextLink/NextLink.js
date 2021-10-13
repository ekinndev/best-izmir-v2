/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

const NextLink = ({ children, ...props }) => (
  <Link {...props}>
    <a>{children}</a>
  </Link>
);

export default NextLink;
