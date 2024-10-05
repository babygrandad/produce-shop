import React from 'react';
import styles from './SkeletonGridCard.module.css';

const SkeletonGridCard = () => {
  return (
    <div className={styles['skeleton-grid-card']}>
      <div className="skeleton-stats"></div>
      <div className="skeleton-category">Categoy</div>
      <div className="skeleton-name">Name</div>
      <div className="skeleton-image">Image</div>
      <div className="skeleton-bottomsection">
        <div className="skeleton-price">Price</div>
        <div className="steleton-add-to-cart">button</div>
      </div>
    </div>
  );
};

export default SkeletonGridCard;
