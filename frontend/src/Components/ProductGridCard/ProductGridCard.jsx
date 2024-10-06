import React from 'react'
import styles from './ProductGridCard.module.css'
import { NavLink } from 'react-router-dom'

function ProductGridCard({ id = 1, description, salePrice, category, image }) {
	return (
    <div key={id} className={styles['product-grid-card']}>
      <div className={styles["product-stats-icon"]}>
        X
        <span className={styles['product-stats-tooltip']}>View product stats.</span>
      </div>
      <div className={`${styles["product-category"]} ${styles["product-item"]}`}>Categoy</div>
      <div className={`${styles["product-name"]} ${styles["product-item"]}`}>Name</div>
      <div className={`${styles["product-image"]} ${styles["product-item"]}`}>Image</div>
      <div className={styles["product-bottom-section"]}>
        <div className={`${styles["product-price"]} ${styles["product-item"]}`}>Price</div>
        <div className={`${styles["product-add-to-cart"]} ${styles["product-item"]}`}>X</div>
      </div>
    </div>
  );
}

export default ProductGridCard