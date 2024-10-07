import React from "react";
import styles from "./ProductBannerSkeleton.module.css";

function ProductBannerSkeleton() {
  return (
    <div className={styles["banner-skeleton-container"]}>
      <div className={styles["banner-skeleton-image-wrapper"]}>
        <div className={`${styles["banner-skeleton-image"]} ${styles["skeleton-item"]}`}>Image</div>
      </div>
      <div className={styles["banner-skeleton-details-wrapper"]}>
			<span className={`${styles["banner-product-summary"]} `}>Product Summery</span>
        <div className={`${styles["banner-skeleton-category"]} ${styles["skeleton-item"]}`}>Fruit</div>
        <div className={`${styles["banner-skeleton-name"]} ${styles["skeleton-item"]}`}>Mango</div>
				<div className={`${styles["banner-skeleton-current-price"]} ${styles["skeleton-item"]}`}>Current Price:</div>
				<div className={`${styles["banner-skeleton-price-value"]} ${styles["skeleton-item"]}`}>R 19.00</div>
      </div>
    </div>
  );
}

export default ProductBannerSkeleton;
