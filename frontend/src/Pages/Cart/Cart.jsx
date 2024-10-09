import React from "react";
import styles from "./Cart.module.css";
import CartItem from "../../Components/CartComponents/CartItem/CartItem";
import CartSummary from "../../Components/CartComponents/CartSummary/CartSummary";

function Cart() {
  return (
    <div className={styles["cart-container"]}>
      <div className={styles["populated-cart"]}>
        <div className={styles["cart-items"]}>
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
					
				</div>

        <div className={styles["cart-summary"]}>
					<CartSummary />
				</div>
      </div>

			<div className="unpopulated-cart">
				something to say if cart is empty
			</div>
    </div>
  );
}

export default Cart;
