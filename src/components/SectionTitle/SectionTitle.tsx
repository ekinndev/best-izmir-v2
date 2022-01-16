import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './SectionTitle.module.scss';

interface SectionTitle {
  titleId: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const SectionTitle = ({ titleId, type }: SectionTitle) => {
  const { t } = useTranslation('common');

  return React.createElement(type, { className: styles.sectionTitle }, t(titleId));
};

export default SectionTitle;
