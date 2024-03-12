'use client';

import { motion, useAnimationControls, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';

import styles from './Header.module.scss';
import logo from './Viso.svg';

export const Header = () => {
  const { scrollY } = useScroll();
  const headerControl = useAnimationControls();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > window.innerHeight) {
      headerControl.start({ top: 0 });
    } else {
      headerControl.start({ top: -90 });
    }
  });
  return (
    <motion.header className={styles.header} animate={headerControl} transition={{ duration: 0.3 }}>
      <Image src={logo} alt={'logo'} />

      <div className={styles.navigation}>
        <p>Services</p>
        <p>Industries</p>
        <p>Cases</p>
        <p>Technologies</p>
      </div>

      <div className={styles.contactUs}>Contact us</div>
    </motion.header>
  );
};
