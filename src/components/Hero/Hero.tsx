import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styles from './Hero.module.scss';
import Logo from '../Logo/Logo';

interface HeroProps {
  titleId: string;
  contentId: string;
  image: string | StaticImageData;
  link?: string;
  buttonTextId?: string;
  showLogo?: boolean;
}

const Hero = ({ titleId, contentId, image, link, buttonTextId, showLogo = false }: HeroProps) => {
  const { t } = useTranslation('hero');

  return (
    <div className={styles.hero}>
      <Image src={image} layout="fill" placeholder="blur" />
      <div className={styles.backdrop} />
      <div className={styles.content}>
        {showLogo && <Logo width={225} height={125} isDark />}
        <h1 className={styles.hero_title}>{t(titleId)}</h1>
        {contentId && <p className={styles.hero_content}>{t(contentId)}</p>}
        {buttonTextId && (
          <a href={link} className={styles.hero_button}>
            {t(buttonTextId)}
          </a>
        )}
      </div>
    </div>
  );
};

Hero.defaultProps = {
  titleId: '',
  contentId: '',
};

export default Hero;
