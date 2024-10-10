import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import CartItem from "../../Components/CartComponents/CartItem/CartItem";
import CartSummary from "../../Components/CartComponents/CartSummary/CartSummary";
import { toast } from "react-toastify";
import CartApi from "../../utils/Api/CartApi";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Function to fetch cart data
    const fetchCartData = async () => {
      try {
        const storedCartItems = await CartApi.getCart(); // Fetch cart data
        setCartItems(storedCartItems);
      } catch (error) {
        toast.error("Failed to load cart items. Please try again.");
      }
    };

    fetchCartData();
  }, []);

  const handleDeleteItem = async (id) => {
    try {
      await CartApi.removeItem(id); // Call your Cart API to delete the item
      const updatedCartItems = await CartApi.getCart(); // Fetch updated cart data
      setCartItems(updatedCartItems); // Update state
      toast.success("Item removed from cart successfully!"); // Show success notification
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove item from cart. Please try again."); // Show error notification
    }
  };

  const handleQuantityChange = async (id, newQuantity) => {
    try {
      await CartApi.updateItemQuantity(id, newQuantity); // Call your Cart API to update the item's quantity
      const updatedCartItems = await CartApi.getCart(); // Fetch updated cart data
      setCartItems(updatedCartItems); // Update state
      toast.success("Item quantity updated successfully!"); // Show success notification
    } catch (error) {
      toast.error("Failed to update item quantity. Please try again."); // Show error notification
    }
  };

  // Handle checkout
  const handleCheckout = async () => {
    try {
      await CartApi.clearCart(); // Clear the cart
      setCartItems([]); // Update the local state to empty
      toast.success("Checkout successful!"); // Show success notification
    } catch (error) {
      toast.error("Failed to complete checkout. Please try again."); // Show error notification
    }
  };

  return (
    <div className={styles["cart-container"]}>
      {cartItems.length > 0 ? (
        <div className={styles["populated-cart"]}>
          <div className={styles["cart-items"]}>
            {cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                onDelete={handleDeleteItem}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </div>

          <div className={styles["cart-summary"]}>
            <CartSummary cart={cartItems} onCheckout={handleCheckout} /> {/* Pass handleCheckout */}
          </div>
        </div>
      ) : (
        <div className={styles["unpopulated-cart"]}>
          You have no items in your cart.
        </div>
      )}
    </div>
  );
}

export default Cart;
