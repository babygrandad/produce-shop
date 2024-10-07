import React from 'react'
import styles from './Sidemenu.module.css'
import logo from '../../assets/Garden Palette Logo.png'
import {Store, Person, ShoppingCart, ManageAccounts, Logout } from '@mui/icons-material';
function Sidemenu() {
	return (
		<aside className={`${styles['sidemenu-container']}`}>
      <div className={styles["sidemenu-wrapper"]}>
        <div className={styles["logo-container"]}>
          <img src={logo} alt="" className={styles["logo-image"]} />
        </div>
        <nav className={styles['main-nav']}>
          <ul>
            <li><a href="/shop"><Store className={styles['sidemenu-icon']} /><span>Shop</span></a></li>
            <li><a href=""><Person className={styles['sidemenu-icon']} /><span>Profile</span></a></li>
            <li><a href=""><ShoppingCart className={styles['sidemenu-icon']} /><span>Cart</span></a></li>
            <li><a href=""><ManageAccounts className={styles['sidemenu-icon']} /><span>Management</span></a></li>
          </ul>
        </nav>
        
        <div className={styles["logout-container"]}>
          <ul><li><a href=""><Logout className={styles['sidemenu-icon']} /><span>Logout</span></a></li></ul>
        </div>
      </div>
		</aside>
	)
}

export default Sidemenu

