import React from 'react'
import styles from './ProductGridCard.module.css'
import { NavLink } from 'react-router-dom'
import {AddShoppingCart, BarChart} from '@mui/icons-material'

function ProductGridCard({ product }) {
  const { id, description, salePrice, category, image } = product;
  
  // converts the int values to float values
  const formattedPrice = parseFloat(salePrice).toFixed(2);

	return (
    <div key={id} className={styles['product-grid-card']}>
      <NavLink
			 to={`/product-sales/${id}`}
			 state={{ product }}
			className={`${styles["product-stats-icon"]} ${styles["product-item"]}`}>
        <BarChart />
        <span className={styles['product-stats-tooltip']}>View product sales.</span>
      </NavLink>
      <div className={`${styles["product-category"]} ${styles["product-item"]}`}>{category}</div>
      <div className={`${styles["product-name"]} ${styles["product-item"]}`}>{description}</div>
      <div className={`${styles["product-image"]} ${styles["product-item"]}`}>
        <img src={image} alt="" />
      </div>
      <div className={styles["product-bottom-section"]}>
        <div className={`${styles["product-price"]} ${styles["product-item"]}`}>$ {formattedPrice}</div>
        <div className={`${styles["product-add-to-cart"]} ${styles["product-item"]}`}>
          <AddShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default ProductGridCard