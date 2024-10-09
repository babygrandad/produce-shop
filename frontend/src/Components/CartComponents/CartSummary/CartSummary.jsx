import React from 'react'
import styles from './CartSummary.module.css'
import { ShoppingCartCheckout } from '@mui/icons-material'

function CartSummary() {
	return (
		<div className={styles["cart-summary-container"]}>
		<span className={styles["summary-identity"]}>Cart Summary</span>
	<div className={styles["summary-item-wrapper"]}>
		<span className={styles["summary-description"]}>Items: </span>
		<span className={styles["summary-value"]}>2</span>
	</div>
	<div className={styles["summary-item-wrapper"]}>
		<span className={styles["summary-description"]}>Discount: </span>
		<span className={styles["summary-value"]}>R -0.00</span>
	</div>
	<div className={styles["summary-item-wrapper"]}>
		<span className={styles["summary-description"]}>Subtotal: </span>
		<span className={styles["summary-value"]}>55.96</span>
	</div>
	<div className={styles["summary-item-wrapper"]}>
		<span className={styles["summary-description"]}>Total: </span>
		<span className={styles["summary-value"]}>55.96</span>
	</div>

	<button className={styles["checkout-button"]}>
		<ShoppingCartCheckout /> Checkout
	</button>
		</div>
	)
}

export default CartSummary