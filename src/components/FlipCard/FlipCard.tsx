'use client';

import { useState } from 'react';

import Image from 'next/image';

import styles from './FlipCard.module.scss';

export const FlipCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.flipCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles.cardSide}
        style={{
          transform: isHovered
            ? 'perspective(1000px) rotateY(180deg)'
            : 'perspective(1000px) rotateY(0deg)',
          transition: isHovered ? 'all 0.4s' : 'all 0.9s',
        }}
      >
        <h2 className={styles.cardTitle}>Cross-platform frameworks</h2>
        <Image src={require('./image.png')} alt={'image'} className={styles.image} />
      </div>
      <div
        className={styles.cardSide}
        style={{
          transform: isHovered
            ? 'perspective(1000px) rotateY(0deg)'
            : 'perspective(1000px) rotateY(-180deg)',
          transition: isHovered ? 'all 0.4s' : 'all 0.9s',
        }}
      >
        <h2 className={styles.cardTitle} style={{ color: '#52525B' }}>
          Cross-platform frameworks
        </h2>

        <div className={styles.elementsBlock}>
          <div className={styles.cardElement}>React Native</div>
          <div className={styles.cardElement}>Android/IOS</div>
        </div>
      </div>
    </div>
  );
};
