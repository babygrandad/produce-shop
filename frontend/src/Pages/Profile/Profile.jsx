import React from 'react'
import styles from './Profile.module.css'
import ProfileBanner from '../../Components/ProfileComponents/ProfileBanner/ProfileBanner'
import { Edit, Security } from '@mui/icons-material'

function Profile() {
	return (
		<div className={styles['profile-container']}>

			<ProfileBanner />

			<div className={styles["security-banner-container"]}>
				<div className={styles["banner-details-wrapper"]}>
				<span className={styles["profile-section-identity"]}>Security <Security /></span>
				<span className={styles["banner-confirmed-email"]}>Email Confirmed: <b>True</b></span>
				<span className={styles["banner-two-factor"]}>Two Factor Authentication: <b>False</b></span>
				</div>
				<button className={styles['change-password-button']}><Edit /> Change Password</button>
			</div>

		</div>
	)
}

export default Profile