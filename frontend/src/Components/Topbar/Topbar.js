import React from 'react'
import styles from './Topbar.module.css'

function Topbar() {
  return (
	<div className={`${styles['topbar-container']}`}>
		<div className={styles["page-identity-container"]}>
			<h2 className={styles["page-identity"]}>
				Products
			</h2>
		</div>
	</div>
  )
}

export default Topbar