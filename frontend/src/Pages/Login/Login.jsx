import React from 'react'
import styles from './Login.module.css'
import { Close } from '@mui/icons-material'

function Login() {
	return (
		<div className={styles['login-container']}>
			<form className={styles['login-form']}>
				<span className={styles['form-identity']}>
					Login
				</span>

				<span className={styles['form-close']}>
					<Close />
				</span>

				<div className={styles["input-group"]}>
					<label className={styles['form-label']} htmlFor="email" >Email</label>
					<input type="email" placeholder='eg "richard@example.com"' name='email' className={`${styles["form-input"]}`} />
					<span className={styles['input-validation']}></span>
				</div>

				<div className={styles["input-group"]}>
					<label className={styles['form-label']} htmlFor="password" >Password</label>
					<input type="password" placeholder='password' name='password' className={`${styles["form-input"]}`} />
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

export default Login