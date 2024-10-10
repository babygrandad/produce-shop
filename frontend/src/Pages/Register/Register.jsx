import React, { useState } from "react";
import styles from "./Register.module.css";
import { toast } from "react-toastify";
import { Close } from "@mui/icons-material";
import { RegisterUser } from "../../utils/Api/RegisterApi";

function Register({ setShowRegister }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const userData = {
      name,
      surname,
      email,
      password,
			confirmPassword
    };

    const response = await RegisterUser(userData);
    if (response.success) {
      toast.success("Registration successful!");
      handleClose();
    } else {
      toast.error(response.message);
    }
  };

  const handleClose = () => {
    setShowRegister(false);
  };

  return (
    <div className={styles["register-container"]}>
      <form className={styles["register-form"]} onSubmit={handleRegister}>
        <span className={styles["form-identity"]}>Register</span>

        <span className={styles["form-close"]} onClick={handleClose}>
          <Close />
        </span>

        <div className={styles["input-group"]}>
          <label className={styles["form-label"]} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            placeholder='eg "Richard"'
            name="name"
            className={styles["form-input"]}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span className={styles["input-validation"]}></span>
        </div>

        <div className={styles["input-group"]}>
          <label className={styles["form-label"]} htmlFor="surname">
            Surname
          </label>
          <input
            type="text"
            placeholder='eg "Smith"'
            name="surname"
            className={styles["form-input"]}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
          <span className={styles["input-validation"]}></span>
        </div>

        <div className={styles["input-group"]}>
          <label className={styles["form-label"]} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder='eg "richard@example.com"'
            name="email"
            className={styles["form-input"]}
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
            className={styles["form-input"]}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className={styles["input-validation"]}></span>
        </div>

        <div className={styles["input-group"]}>
          <label className={styles["form-label"]} htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="password"
            name="confirmPassword"
            className={styles["form-input"]}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className={styles["input-group"]}>
          <button type="submit" className={styles["form-button"]}>
            Submit
          </button>
        </div>

        <div className={styles["input-group"]}>
          <p className={styles["form-direct"]}>
            Already have an account?{" "}
            <a href="/login" className={styles["form-link"]}>
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
