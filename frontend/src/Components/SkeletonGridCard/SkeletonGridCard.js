import React from 'react';
import styles from './SkeletonGridCard.module.css';

const SkeletonGridCard = () => {
  return (
    <div className={styles['skeletonCard']}>
      <div className={styles['skeletonImage']} />
      <div className={styles['skeletonText']} />
      <div className={styles['skeletonText']} />
      <div className={styles['skeletonText']} />
    </div>
  );
};

export default SkeletonGridCard;
