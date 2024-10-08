import React from 'react'
import styles from './ForgotPassword.module.css'
import { Close } from '@mui/icons-material'

function ForgotPassword() {
	return (
		<div className={styles['forgot-password-container']}>
			<form className={styles['forgot-password-form']}>
				<span className={styles['form-identity']}>
					Forgot Password
				</span>

				<span className={styles['form-close']}>
					<Close />
				</span>

				<div className={styles["input-group"]}>
					<p className={styles['form-instruction']}>Enter your email address to receive a password reset link.</p>
				</div>

				<div className={styles["input-group"]}>
					<label className={styles['form-label']} htmlFor="email" >Email</label>
					<input type="email" placeholder='eg "richard@example.com"' name='email' className={`${styles["form-input"]}`} />
					<span className={styles['input-validation']}></span>
				</div>

				<div className={styles["input-group"]}>
					<button type='submit' className={styles['form-button']}>Submit</button>
				</div>

				<div className={styles["input-group"]}>
					<p className={styles['form-direct']}>Don't have an account? <a href='/register' className={styles['form-link']}>Register</a></p>
				</div>

			</form>
		</div>
	)
}

export default ForgotPassword