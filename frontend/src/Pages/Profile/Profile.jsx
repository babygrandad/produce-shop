import React from 'react'
import styles from './Profile.module.css'
import ProfileBanner from '../../Components/ProfileComponents/ProfileBanner/ProfileBanner'
import SecurityBanner from '../../Components/ProfileComponents/SecurityBanner/SecurityBanner'


function Profile() {
	return (
		<div className={styles['profile-container']}>

			<ProfileBanner />

			<SecurityBanner />

		</div>
	)
}

export default Profile