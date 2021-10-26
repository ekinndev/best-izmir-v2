import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ titleId, type }) => {
  const { t } = useTranslation('common');

  return React.createElement(type, { className: styles.sectionTitle }, t(titleId).toUpperCase());
};

SectionTitle.propTypes = {};

export default SectionTitle;
