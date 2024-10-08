import React from 'react'
import styles from './Register.module.css'
import { Close } from '@mui/icons-material'

function Register() {
	return (
		<div className={styles['register-container']}>
			<form className={styles['register-form']}>
				<span className={styles['form-identity']}>
					Register
				</span>

				<span className={styles['form-close']}>
					<Close />
				</span>
				
				<div className={styles["input-group"]}>
					<label className={styles['form-label']} htmlFor="name" >Name</label>
					<input type="text" placeholder='eg "Richard"' name='name' className={`${styles["form-input"]}`} />
					<span className={styles['input-validation']}></span>
				</div>

				<div className={styles["input-group"]}>
					<label className={styles['form-label']} htmlFor="surname" >Surname</label>
					<input type="text" placeholder='eg "Smith"' name='surname' className={`${styles["form-input"]}`} />
					<span className={styles['input-validation']}></span>
				</div>

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

export default Register