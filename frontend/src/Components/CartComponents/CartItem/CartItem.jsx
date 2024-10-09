import React from "react";
import styles from './CartItem.module.css'
import { DeleteForever } from "@mui/icons-material";

function CartItem() {
  return (
    <div className={styles["cart-item-container"]}>
      <button className={styles["cart-item-delete"]}>
        <DeleteForever />
      </button>
      <div className={` ${styles["cart-item-image-wrapper"]} `}>
        <img
          className={` ${styles["cart-item-image"]} ${styles["cart-item-section-wrapper"]}`}
          src="https://placehold.co/200"
          alt=""
        />
      </div>
      <div className={` ${styles["cart-item-details-wrapper"]} `}>
        <span className={styles["cart-item-category"]}>Fruit</span>
        <span className={styles["cart-item-name"]}>Apples</span>
        <span className={styles["cart-item-cost-price"]}>R 13.99</span>
      </div>
      <div className={` ${styles["cart-item-quantity-wrapper"]} ${styles["cart-item-section-wrapper"]}`}>
        <span className={styles["cart-item-identifier"]}>Quantity</span>
        <input
          className={styles["cart-item-quantity"]}
          type="number"
          value="1"
        />
      </div>
      <div
        className={` ${styles["cart-item-total-wrapper"]} ${styles["cart-item-section-wrapper"]}`}
      >
        <span className={styles["cart-item-identifier"]}>Cost</span>
        <span className={styles["cart-item-added-cost"]}>R 27.98</span>
      </div>
    </div>
  );
}

export default CartItem;
