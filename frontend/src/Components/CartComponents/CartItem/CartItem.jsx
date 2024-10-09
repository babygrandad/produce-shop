import React, { useState, useEffect } from "react";
import styles from './CartItem.module.css';
import { DeleteForever } from "@mui/icons-material";

function CartItem({ cartItem, onDelete, onQuantityChange }) {
  const { id, quantity, description, salePrice, category, image } = cartItem;
  const formattedPrice = parseFloat(salePrice).toFixed(2);
  
  // Local state for quantity
  const [inputQuantity, setInputQuantity] = useState(quantity);

  // Effect to update local state if the cartItem quantity changes
  useEffect(() => {
    setInputQuantity(quantity);
  }, [quantity]);

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;

    // Update the local state
    setInputQuantity(newQuantity);

    // Call the parent function to update quantity in the cart
    onQuantityChange(id, newQuantity);
  };

  return (
    <div className={styles["cart-item-container"]}>
      <button 
        className={styles["cart-item-delete"]}
        onClick={() => onDelete(id)}>
        <DeleteForever />
      </button>
      <div className={styles["cart-item-image-wrapper"]}>
        <img
          className={`${styles["cart-item-image"]} ${styles["cart-item-section-wrapper"]}`}
          src={image}
          alt=""
        />
      </div>
      <div className={`${styles["cart-item-details-wrapper"]}`}>
        <span className={styles["cart-item-category"]}>{category}</span>
        <span className={styles["cart-item-name"]}>{description}</span>
        <span className={styles["cart-item-cost-price"]}>R {formattedPrice}</span>
      </div>
      <div className={`${styles["cart-item-quantity-wrapper"]} ${styles["cart-item-section-wrapper"]}`}>
        <span className={styles["cart-item-identifier"]}>Quantity</span>
        <input
          className={styles["cart-item-quantity"]}
          type="number"
          value={inputQuantity}
          onChange={handleQuantityChange} // Handle input changes
        />
      </div>
      <div className={`${styles["cart-item-total-wrapper"]} ${styles["cart-item-section-wrapper"]}`}>
        <span className={styles["cart-item-identifier"]}>Cost</span>
        <span className={styles["cart-item-added-cost"]}>R {parseFloat(salePrice * inputQuantity).toFixed(2)}</span> {/* Calculate total cost based on quantity */}
      </div>
    </div>
  );
}

export default CartItem;
