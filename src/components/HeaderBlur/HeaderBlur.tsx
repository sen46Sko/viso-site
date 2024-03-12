'use client';

import {
  motion,
  scroll,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import Image from 'next/image';

import styles from './HeaderBlur.module.scss';
import logo from './Viso.svg';

export const HeaderBlur = () => {
  const { scrollY } = useScroll();
  const headerControl = useAnimationControls();

  scroll((progress) => console.log(progress));

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > window.innerHeight) {
      headerControl.start({ opacity: 0.7 });
    } else {
      headerControl.start({ opacity: 0 });
    }
  });

  return (
    <>
      <div className={styles.headerBlur} />
      <motion.div
        className={styles.headerBg}
        animate={headerControl}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div className={styles.header}>
        <Image src={logo} alt={'logo'} />

        <div className={styles.navigation}>
          <p>Services</p>
          <p>Industries</p>
          <p>Cases</p>
          <p>Technologies</p>
        </div>

        <div className={styles.contactUs}>Contact us</div>
      </motion.div>
    </>
  );
};
