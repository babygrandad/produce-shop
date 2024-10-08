import React from 'react'
import styles from './ProductBanner.module.css'

function ProductBanner( { product } ) {
	const {id, description, salePrice, category, image} = product
  const formattedPrice = parseFloat(salePrice).toFixed(2);


	return (
		<div className={styles["banner-product-container"]}>
      <div className={styles["banner-product-image-wrapper"]}>
        <img src={image} className={`${styles["banner-product-image"]} ${styles["product-item"]}`}/>
      </div>
      <div className={styles["banner-product-details-wrapper"]}>
			<span className={`${styles["banner-product-summary"]} `}>Product Summery</span>
        <div className={`${styles["banner-product-category"]} ${styles["product-item"]}`}>{category}</div>
        <div className={`${styles["banner-product-name"]} ${styles["product-item"]}`}>{description}</div>
				<div className={`${styles["banner-product-current-price"]} ${styles["product-item"]}`}>Current Price:</div>
				<div className={`${styles["banner-product-price-value"]} ${styles["product-item"]}`}>R {formattedPrice}</div>
      </div>
    </div>
	)
}

export default ProductBanner