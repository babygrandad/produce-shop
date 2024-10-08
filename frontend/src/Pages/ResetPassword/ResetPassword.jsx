import React from 'react'
import styles from './ResetPassword.module.css'
import { Close } from '@mui/icons-material'

function ResetPassword() {
	return (
		<div className={styles['reset-password-container']}>
			<form className={styles['reset-password-form']}>
				<span className={styles['form-identity']}>
					Reset Password
				</span>

				<span className={styles['form-close']}>
					<Close />
				</span>

				<div className={styles["input-group"]}>
					<p className={styles['form-instruction']}>Enter your new password to reset your account.</p>
				</div>

				<div className={styles["input-group"]}>
					<label className={styles['form-label']} htmlFor="password" >Password</label>
					<input type="password" placeholder='password' name='password' className={`${styles["form-input"]}`} />
					<span className={styles['input-validation']}></span>
				</div>

				<div className={styles["input-group"]}>
					<label className={styles['form-label']} htmlFor="confirmPassword" >Confirm Password</label>
					<input type="password" placeholder='password' name='confirmPassword' className={`${styles["form-input"]}`} />
				</div>

				<div className={styles["input-group"]}>
					<button type='submit' className={styles['form-button']}>Submit</button>
				</div>

				<div className={styles["input-group"]}>
					<p className={styles['form-direct']}>Already have an account? <a href='/login' className={styles['form-link']}>Login</a></p>
				</div>

			</form>
		</div>
	)
}

export default ResetPassword