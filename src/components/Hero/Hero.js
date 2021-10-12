import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import styles from './Hero.module.scss';

const Hero = ({ titleId, contentId, image, link, buttonTextId }) => {
  const { t } = useTranslation('hero');

  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={styles.backdrop} />
      <div className={styles.content}>
        <div className={styles.hero_title}>{t(titleId)}</div>
        <div className={styles.hero_content}>{t(contentId)}</div>
        <a href={link} className={styles.hero_button} target="_blank" rel="noopener noreferrer">
          {t(buttonTextId)}
        </a>
      </div>
    </div>
  );
};

Hero.propTypes = {
  titleId: PropTypes.string,
  contentId: PropTypes.string,
};

Hero.defaultProps = {
  titleId: '',
  contentId: '',
};

export default Hero;
