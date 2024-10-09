import React from 'react'
import styles from './SecurityBanner.module.css'
import { Security, Edit } from '@mui/icons-material'

function SecurityBanner() {
	return (
		<div className={styles["security-banner-container"]}>
				<div className={styles["banner-details-wrapper"]}>
				<span className={styles["profile-section-identity"]}>Security <Security /></span>
				<span className={styles["banner-confirmed-email"]}>Email Confirmed: <b>True</b></span>
				<span className={styles["banner-two-factor"]}>Two Factor Authentication: <b>False</b></span>
				</div>
				<button className={styles['change-password-button']}><Edit /> Change Password</button>
			</div>
	)
}

export default SecurityBanner