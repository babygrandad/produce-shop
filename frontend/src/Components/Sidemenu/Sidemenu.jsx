import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate correctly
import styles from "./Sidemenu.module.css";
import logo from "../../assets/Garden Palette Logo.png";
import { Store, Person, ShoppingCart, Logout } from "@mui/icons-material";
import { removeUser } from "../../utils/auth/auth";
import { toast } from "react-toastify";
import { getUser } from "../../utils/auth/auth";

function Sidemenu() {
		const [user, setUserState] = useState ()
    const navigate = useNavigate(); // Initialize navigate

    const handleLogout = () => {
        removeUser(); 
        navigate("/");
				toast.success("Logged out successfully") 
    };

		useEffect(() => {
			const userData = getUser(); // Call getUser to retrieve user data from local storage
			if (userData) {
					setUserState(userData); // Update the state with the retrieved user data
			}
	}, []);


  return (
    <aside className={`${styles["sidemenu-container"]}`}>
      <div className={styles["sidemenu-wrapper"]}>
        <div className={styles["logo-container"]}>
          <img src={logo} alt="" className={styles["logo-image"]} />
        </div>

        <nav className={styles["main-nav"]}>
          <ul>
            <li>
              <a href="/shop"
								className={styles["sidemenu-nav"]}>
                <Store className={styles["sidemenu-icon"]} />
                <span>Shop</span>
              </a>
            </li>
						{user ?
						(<li>
              <a href="/profile"
								className={styles["sidemenu-nav"]}>
                <Person className={styles["sidemenu-icon"]} />
                <span>Profile</span>
              </a>
            </li>)
						:
						""}
            <li>
              <a href="/cart"
								className={styles["sidemenu-nav"]}>
                <ShoppingCart className={styles["sidemenu-icon"]} />
                <span>Cart</span>
              </a>
            </li>
            {/*link omitted due to time constraints. I will implement it on my spare time*/}
            {/*<li><a href="/accounts"><ManageAccounts className={styles['sidemenu-icon']} /><span>Management</span></a></li>*/}
          </ul>
        </nav>

        <div className={styles["logout-container"]}>
          <ul>
            <li>
              <button
								className={styles["sidemenu-nav"]}
								onClick={handleLogout}	>
                <Logout className={styles["sidemenu-icon"]} />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidemenu;
