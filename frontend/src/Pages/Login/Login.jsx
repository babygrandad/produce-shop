
import React ,{ useState } from 'react'
import styles from './Login.module.css'
import { toast, ToastContainer } from 'react-toastify';
import { Close } from '@mui/icons-material'
import { LoginUser } from '../../utils/Api/LoginApi';

function Login() {
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

	const handleLogin = async (e) => {
		e.preventDefault();

		const userData = {
				email,
				password,
		};

		const response = await LoginUser(userData);
		if (response.success) {
				// Notify user of successful login
				toast.success("Login successful!");
				// Handle successful login (e.g., redirect user)
		} else {
				// Notify user of failed login
				toast.error(response.message);
		}
};

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
					<input type="email" placeholder='eg "richard@example.com"' name='email' className={`${styles["form-input"]}`} onChange={(e) => setEmail(e.target.value)} required/>
					<span className={styles['input-validation']}></span>
				</div>

				<div className={styles["input-group"]}>
					<label className={styles['form-label']} htmlFor="password" >Password</label>
					<input type="password" placeholder='password' name='password' className={`${styles["form-input"]}`} onChange={(e) => setPassword(e.target.value)} required />
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