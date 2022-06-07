import React from "react";
import LoginForm from "../../features/LoginForm/LoginForm";
import logo from "../../../assets/cloneflix-logo.png";
import background from "../../../assets/netflix-background.jpg";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login__container}>
      <img src={logo} className={styles.login__logo} />
      <div className={styles.login__background__container}>
        <div className={styles.login__background__dark}></div>
        <img src={background} className={styles.login__background} />
      </div>
      <LoginForm className={styles.login__form} />
    </div>
  );
};

export default Login;
