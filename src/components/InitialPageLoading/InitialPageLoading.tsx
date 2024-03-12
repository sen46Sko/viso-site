'use client';

import { useEffect, useState } from 'react';

import { motion, useAnimationControls } from 'framer-motion';

import styles from './InitialPageLoading.module.scss';

export const InitialPageLoading = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });

  const topBlockControls = useAnimationControls();
  const bottomBlockControls = useAnimationControls();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
  }, []);

  return (
    <div className={styles.animationContainer}>
      <motion.div
        className={styles.topBlock}
        initial={{ y: 0 }}
        animate={topBlockControls}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        className={styles.bottomBlock}
        initial={{ y: 0 }}
        animate={bottomBlockControls}
        transition={{ duration: 1.5 }}
      />
      {!isLoaded && windowSize.width > 0 && (
        <motion.div
          className={styles.loader}
          initial={{ x: 0 }}
          whileInView={{ x: windowSize.width }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => {
            setIsLoaded(true);
            topBlockControls.start({ y: -windowSize.height / 2 });
            bottomBlockControls.start({ y: windowSize.height / 2 });
          }}
        />
      )}
    </div>
  );
};
