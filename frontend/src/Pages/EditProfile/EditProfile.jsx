import React from 'react'
import styles from './EditProfile.module.css'
import { Close } from '@mui/icons-material'

function EditProfile() {
	return (
		<div className={styles['edit-profile-container']}>
			<form className={styles['edit-profile-form']}>
				<span className={styles['form-identity']}>
					Edit Profile
				</span>

				<span className={styles['form-close']}>
					<Close />
				</span>
				
				<div className={styles["input-group"]}>
					<label className={styles['form-label']} htmlFor="name" >Name</label>
					<input type="text"  name='name' className={`${styles["form-input"]}`} />
					<span className={styles['input-validation']}></span>
				</div>

				<div className={styles["input-group"]}>
					<label className={styles['form-label']} htmlFor="surname" >Surname</label>
					<input type="text"  className={`${styles["form-input"]}`} />
					<span className={styles['input-validation']}></span>
				</div>

				<div className={styles["input-group"]}>
					<label className={styles['form-label']} htmlFor="email" >Email</label>
					<input type="email" name='email' className={`${styles["form-input"]}`} />
					<span className={styles['input-validation']}></span>
				</div>

				<div className={styles["input-group"]}>
					<button type='submit' className={styles['form-button']}>Submit</button>
				</div>

			</form>
		</div>
	)
}

export default EditProfile