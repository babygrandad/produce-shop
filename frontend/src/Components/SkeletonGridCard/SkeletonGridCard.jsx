import React from 'react';
import styles from './SkeletonGridCard.module.css';

const SkeletonGridCard = () => {
  return (
    <div className={styles['skeleton-grid-card']}>
      <div className={`${styles["skeleton-stats-icon"]} ${styles["skeleton-item"]}`}>
        <span className={`${styles['skeleton-stats-tooltip']}`}></span>
      </div>
      <div className={`${styles["skeleton-category"]} ${styles["skeleton-item"]}`}></div>
      <div className={`${styles["skeleton-name"]} ${styles["skeleton-item"]}`}></div>
      <div className={`${styles["skeleton-image"]} ${styles["skeleton-item"]}`}></div>
      <div className={styles["skeleton-bottom-section"]}>
        <div className={`${styles["skeleton-price"]} ${styles["skeleton-item"]}`}></div>
        <div className={`${styles["skeleton-add-to-cart"]} ${styles["skeleton-item"]}`}></div>
      </div>
    </div>
  );
};

export default SkeletonGridCard;
