import React from "react";
import styles from "./ProductBannerSkeleton.module.css";

function ProductBannerSkeleton({ }) { 



  return (
    <div className={styles["banner-skeleton-container"]}>
      <div className={styles["banner-skeleton-image-wrapper"]}>
        <div className={`${styles["banner-skeleton-image"]} ${styles["skeleton-item"]}`}></div>
      </div>
      <div className={styles["banner-skeleton-details-wrapper"]}>
			<span className={`${styles["banner-product-summary"]} ${styles["skeleton-item"]}`}></span>
        <div className={`${styles["banner-skeleton-category"]} ${styles["skeleton-item"]}`}></div>
        <div className={`${styles["banner-skeleton-name"]} ${styles["skeleton-item"]}`}></div>
				<div className={`${styles["banner-skeleton-current-price"]} ${styles["skeleton-item"]}`}></div>
				<div className={`${styles["banner-skeleton-price-value"]} ${styles["skeleton-item"]}`}></div>
      </div>
    </div>
  );
}

export default ProductBannerSkeleton;
