import React from 'react'
import styles from './ProfileBanner.module.css'
import { Edit, Person } from '@mui/icons-material'

function ProfileBanner() {
	return (
		<div className={styles["profile-banner-container"]}>
		<div className={styles["banner-image-wrapper"]}>
			<img  src="https://i.pinimg.com/736x/e4/ea/7a/e4ea7a052f09288f1490c1037b3f7181.jpg" alt="" className={styles["banner-image"]} />
		</div>
		<div className={styles["banner-details-wrapper"]}>
			<span className={styles["profile-section-identity"]}>Profile <Person /></span>
			<span className={styles["banner-name"]}>Naruto Uzumaki</span>
			<span className={styles["banner-email"]}>Naruto@example.com</span>
			<span className={styles["banner-role"]}>Administrator</span>
		</div>

		<button className={styles['edit-profile-button']}><Edit /> Edit Profile</button>
	</div>
	)
}

export default ProfileBanner