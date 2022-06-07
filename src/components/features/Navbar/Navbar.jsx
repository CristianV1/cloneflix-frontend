import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../assets/cloneflix-logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [counter, setCounter] = useState(0);

  return (
    <nav className={styles.navbar}>
      <Link to={"/home"}>
        <img
          src={logo}
          className={`${styles.navbar__item} ${styles.navbar__logo}`}
        />
      </Link>
      <ul>
        {user && user.isAdmin && (
          <>
            <li>
              <Link to={"#"}>Contenidos</Link>
            </li>
            <li>
              <Link to={"/view-users"}>Usuarios</Link>
            </li>
          </>
        )}
        <li>Bienvenido {user.name}</li>
        <li
          style={{ cursor: "pointer" }}
          onClick={() => {
            document.cookie =
              "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            localStorage.removeItem("user");

            setCounter(counter + 1);
          }}
        >
          cerrar session
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
