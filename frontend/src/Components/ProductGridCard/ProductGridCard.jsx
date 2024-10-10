import React, { useState, useEffect } from "react";
import styles from "./ProductGridCard.module.css";
import { NavLink } from "react-router-dom";
import { AddShoppingCart, AnalyticsOutlined } from "@mui/icons-material";
import CartApi from "../../utils/Api/CartApi";
import { getUser } from "../../utils/auth/auth";

import { toast } from 'react-toastify';


function ProductGridCard({ product }) {
  const { id, description, salePrice, category, image } = product;
	const [user, setUserState] = useState ({})

	useEffect(() => {
		const userData = getUser(); // Call getUser to retrieve user data from local storage
		if (userData) {
				setUserState(userData); // Update the state with the retrieved user data
		}
}, []);

  // converts the int values to float values
  const formattedPrice = parseFloat(salePrice).toFixed(2);

  const handleAddToCart = () => {
    try {
      CartApi.addItem(product);
      toast.success('Item added to cart successfully!');
    } catch (error) {
      toast.error('Failed to add item to cart. Please try again.');
    }
  };
  

  return (
    <div key={id} className={styles["product-grid-card"]}>
      {user && Array.isArray(user.roles) && (user.roles[0] === "Admin" || user.roles[0] === "Manager") ?
			(<NavLink
        to={`/product-sales/${id}`}
        state={{ product }}
        className={`${styles["product-stats-icon"]} ${styles["product-item"]}`}
      >
        <AnalyticsOutlined />
        <span className={styles["product-stats-tooltip"]}>
          View product sales.
        </span>
      </NavLink>)
			:
			""}
      <div
        className={`${styles["product-category"]} ${styles["product-item"]}`}
      >
        {category}
      </div>
      <div className={`${styles["product-name"]} ${styles["product-item"]}`}>
        {description}
      </div>
      <div className={`${styles["product-image"]} ${styles["product-item"]}`}>
        <img src={image} alt="" />
      </div>
      <div className={styles["product-bottom-section"]}>
        <div className={`${styles["product-price"]} ${styles["product-item"]}`}>
          R {formattedPrice}
        </div>
        <div
          className={`${styles["product-add-to-cart"]} ${styles["product-item"]}`}
          onClick={handleAddToCart}
        >
          <AddShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default ProductGridCard;
