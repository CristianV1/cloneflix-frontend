import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { setUser } from "../../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (typeof user == "string") {
      setErrors(user);
      setTimeout(() => {
        setErrors("");
      }, 5000);
    } else if (typeof user == "object") {
      document.cookie = `token=${user.token};path=/;samesite=strict`;
      console.log(user.logedUser);
      console.log(user.logedUser.logedUser);

      localStorage.setItem("user", JSON.stringify(user.logedUser));
      navigate("/home");
    }
  }, [user]);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState("");

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser(inputs));
  };

  return (
    <div className={styles.loginForm__container}>
      <form onSubmit={handleSubmit} className={styles.loginForm__form}>
        <h4>Inicia sesion</h4>
        {errors && <span className={styles.errors}>{errors}</span>}
        <input
          type="text"
          placeholder="nombre de usuario"
          name="username"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="contraseña"
          name="password"
          onChange={handleInputChange}
        />
        <input type="submit" value="Iniciar sesion" />
      </form>
    </div>
  );
};

export default LoginForm;
