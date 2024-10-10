import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Close } from "@mui/icons-material";
import { LoginUser } from "../../utils/Api/LoginApi";
import { setUser } from "../../utils/auth/auth";

function Login({ setShowLogin }) {
  // Receive setShowLogin as a prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
			email,
			password,
    };

    const response = await LoginUser(userData);
    if (response.success) {
      toast.success("Login successful!");
      setUser(response.data);
      handleClose();
			navigate("/");
    } else {
      toast.error(response.message);
    }
};

  const handleClose = () => {
    setShowLogin(false); // Call to close the login modal
  };

  return (
    <div className={styles["login-container"]}>
      <form className={styles["login-form"]}>
        <span className={styles["form-identity"]}>Login</span>

        <span className={styles["form-close"]} onClick={handleClose}>
          <Close />
        </span>

        <div className={styles["input-group"]}>
          <label className={styles["form-label"]} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder='eg "richard@example.com"'
            name="email"
            className={`${styles["form-input"]}`}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className={styles["input-validation"]}></span>
        </div>

        <div className={styles["input-group"]}>
          <label className={styles["form-label"]} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className={`${styles["form-input"]}`}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className={styles["input-validation"]}></span>
        </div>

        <div className={styles["input-group"]}>
          <button
            type="submit"
            onClick={handleLogin}
            className={styles["form-button"]}
          >
            Submit
          </button>
        </div>

        <div className={styles["input-group"]}>
          <p className={styles["form-direct"]}>
            Don't have an account?{" "}
            <a href="/register" className={styles["form-link"]}>
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
