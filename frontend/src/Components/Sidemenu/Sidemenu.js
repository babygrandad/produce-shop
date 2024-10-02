import React from 'react'
import styles from './Sidemenu.module.css'

function Sidemenu() {
	return (
		<div className={`${styles['sidemenu-container']}`}>
			<div className={styles["logo-container"]}>
				<img src="src/assets/farm-products-svgrepo-com.png" alt="" />
			</div>
		</div>
	)
}

export default Sidemenu

