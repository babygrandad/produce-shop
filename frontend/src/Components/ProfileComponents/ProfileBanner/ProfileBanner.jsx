import React, {useState, useEffect}from 'react'
import styles from './ProfileBanner.module.css'
import { Edit, Person } from '@mui/icons-material'
import { getUser } from '../../../utils/auth/auth';

function ProfileBanner() {
	const [user, setUserState] = useState({});

	useEffect(() => {
		const userData = getUser(); // Call getUser to retrieve user data from local storage
		if (userData) {
				setUserState(userData); // Update the state with the retrieved user data
		}
}, []);

	return (
		<div className={styles["profile-banner-container"]}>
		<div className={styles["banner-image-wrapper"]}>
			<img  src="https://i.pinimg.com/736x/e4/ea/7a/e4ea7a052f09288f1490c1037b3f7181.jpg" alt="" className={styles["banner-image"]} />
		</div>
		<div className={styles["banner-details-wrapper"]}>
			<span className={styles["profile-section-identity"]}>Profile <Person /></span>
			<span className={styles["banner-name"]}>{user.fullName}</span>
			<span className={styles["banner-email"]}>{user.email}</span>
			<span className={styles["banner-role"]}>{user && user.roles && user.roles.length > 0 ? user.roles[0] : "No Role"}</span>
		</div>

		<button className={styles['edit-profile-button']}><Edit /> Edit Profile</button>
	</div>
	)
}

export default ProfileBanner