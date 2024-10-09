import React, { useState, useEffect } from 'react';
import styles from './CartSummary.module.css';
import { ShoppingCartCheckout } from '@mui/icons-material';

function CartSummary({ cart, onCheckout }) { // Accept onCheckout as a prop
  const [items, setItems] = useState(0);
  const [total, setTotal] = useState(0.00);

  useEffect(() => {
    // Calculate total items and total cost whenever cart changes
    const totalItems = cart.reduce((acc, cartItem) => acc + Number(cartItem.quantity), 0);
    const totalCost = cart.reduce((acc, cartItem) => acc + (Number(cartItem.salePrice) * Number(cartItem.quantity)), 0);

    setItems(totalItems);
    setTotal(totalCost.toFixed(2)); // Fix to 2 decimal places
  }, [cart]);

  return (
    <div className={styles["cart-summary-container"]}>
      <span className={styles["summary-identity"]}>Cart Summary</span>
      <div className={styles["summary-item-wrapper"]}>
        <span className={styles["summary-description"]}>Items: </span>
        <span className={styles["summary-value"]}>{items}</span>
      </div>
      <div className={styles["summary-item-wrapper"]}>
        <span className={styles["summary-description"]}>Discount: </span>
        <span className={styles["summary-value"]}>R -0.00</span>
      </div>
      <div className={styles["summary-item-wrapper"]}>
        <span className={styles["summary-description"]}>Subtotal: </span>
        <span className={styles["summary-value"]}>R {total}</span>
      </div>
      <div className={styles["summary-item-wrapper"]}>
        <span className={styles["summary-description"]}>Total: </span>
        <span className={styles["summary-value"]}>R {total}</span>
      </div>

      <button className={styles["checkout-button"]} onClick={onCheckout}> {/* Call onCheckout when clicked */}
        <ShoppingCartCheckout /> Checkout
      </button>
    </div>
  );
}

export default CartSummary;
