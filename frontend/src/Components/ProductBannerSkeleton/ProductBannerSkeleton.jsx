import React from "react";
import styles from "./ProductBannerSkeleton.module.css";

function ProductBannerSkeleton({ product }) { 
  const {id, description, salePrice, category, image} = product
  const formattedPrice = parseFloat(salePrice).toFixed(2);


  return (
    <div className={styles["banner-skeleton-container"]}>
      <div className={styles["banner-skeleton-image-wrapper"]}>
        <img src={image} className={`${styles["banner-skeleton-image"]} ${styles["skeleton-item"]}`}/>
      </div>
      <div className={styles["banner-skeleton-details-wrapper"]}>
			<span className={`${styles["banner-product-summary"]} `}>Product Summery</span>
        <div className={`${styles["banner-skeleton-category"]} ${styles["skeleton-item"]}`}>{category}</div>
        <div className={`${styles["banner-skeleton-name"]} ${styles["skeleton-item"]}`}>{description}</div>
				<div className={`${styles["banner-skeleton-current-price"]} ${styles["skeleton-item"]}`}>Current Price:</div>
				<div className={`${styles["banner-skeleton-price-value"]} ${styles["skeleton-item"]}`}>R {formattedPrice}</div>
      </div>
    </div>
  );
}

export default ProductBannerSkeleton;
