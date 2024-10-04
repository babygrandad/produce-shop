import React from 'react'
import styles from './Sidemenu.module.css'
import logo from '../../assets/Garden Palette Logo.png'
import {Store, Person, ShoppingCart, ManageAccounts, Logout } from '@mui/icons-material';
function Sidemenu() {
	return (
		<aside className={`${styles['sidemenu-container']}`}>
			<button className={styles["menu-button"]} data-role="toggle">
        O
      </button>
      <div className={styles["sidemenu-wrapper"]}>
        <div className={styles["logo-container"]}>
          <img src={logo} alt="" className={styles["logo-image"]} />
        </div>
        <nav className={styles['main-nav']}>
          <ul>
            <li><a href=""><Store className={styles['sidemenu-icon']} /><span>Shop</span></a></li>
            <li><a href=""><Person className={styles['sidemenu-icon']} /><span>Profile</span></a></li>
            <li><a href=""><ShoppingCart className={styles['sidemenu-icon']} /><span>Cart</span></a></li>
            <li><a href=""><ManageAccounts className={styles['sidemenu-icon']} /><span>Management</span></a></li>
          </ul>
        </nav>
        <div className={styles["user-profile"]}>
          <img src="https://i.pinimg.com/736x/e4/ea/7a/e4ea7a052f09288f1490c1037b3f7181.jpg" alt="" className={styles["user-profile-image"]} />
          <span className={styles["user-profile-name"]}>Naruto Uzumaki</span>
          <span className={styles["user-profile-email"]}>naruto@example.com</span>
        </div>
        <div className={styles["logout-container"]}>
          <ul><li><a href=""><Logout className={styles['sidemenu-icon']} /><span>Logout</span></a></li></ul>
        </div>
      </div>
		</aside>
	)
}

export default Sidemenu

