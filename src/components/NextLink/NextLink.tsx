/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

interface NextLink {
  children: React.ReactNode;
  href: string;
}

const NextLink = ({ children, href, ...props }: NextLink) => (
  <Link href={href} {...props}>
    <a>{children}</a>
  </Link>
);

export default NextLink;
