import React from 'react'
import styles from './ChangePassword.module.css'
import { Close } from '@mui/icons-material'

function ChangePassword() {
	return (
		<div className={styles['change-password-container']}>
			<form className={styles['change-password-form']}>
				<span className={styles['form-identity']}>
					Change Password
				</span>

				<span className={styles['form-close']}>
					<Close />
				</span>

				<div className={styles["input-group"]}>
					<label className={styles['form-label']} htmlFor="password" >Password</label>
					<input type="password" placeholder='password' name='password' className={`${styles["form-input"]}`} />
					<span className={styles['input-validation']}></span>
				</div>

				<div className={styles["input-group"]}>
					<label className={styles['form-label']} htmlFor="confirm-password" >Confirm Password</label>
					<input type="password" placeholder='password' name='confirm-password' className={`${styles["form-input"]}`} />
					<span className={styles['input-validation']}></span>
				</div>

				<div className={styles["input-group"]}>
					<button type='submit' className={styles['form-button']}>Submit</button>
				</div>

			</form>
		</div>
	)
}

export default ChangePassword