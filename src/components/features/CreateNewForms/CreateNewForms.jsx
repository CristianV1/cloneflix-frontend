import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllContents } from "../../../redux/actions/actions";
import ContentCard from "../ContentCard/ContentCard";
import styles from "./CreateNewForms.module.css";
let items = [];

export const CreateNewUserForm = () => {
  const dispatch = useDispatch();
  const allContents = useSelector((states) => states.contents);

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    isAdmin: false,
  });

  useEffect(() => {
    dispatch(getAllContents());
  }, []);

  const [contents, setContents] = useState([]);
  const [errors, setErrors] = useState("");

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.CreateNewUserForm__container}>
      <form onSubmit={handleSubmit} className={styles.CreateNewUserForm__form}>
        <h4>Crear usuario</h4>
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
        <span>Es Admin?</span>
        <select
          value={inputs.isAdmin}
          onChange={(e) => {
            setInputs({ ...inputs, isAdmin: e.target.value });
          }}
        >
          <option value={"false"}>Falso</option>
          <option value={"true"}>Verdadero</option>
        </select>
        <h4>Todo el Contenido </h4>
        <div className={styles.content__items__container}>
          {items.map((item) => (
            <ContentCard
              onClick={() => {
                setContents([...contents, item.name]);
              }}
              background={item.img}
              title={item.name}
            />
          ))}
        </div>

        <h4>Contenido permitido</h4>
        <div className={styles.content__available__container}>
          {contents.map((content) => (
            <span className={styles.content__available}>{content}</span>
          ))}
        </div>
        <input type="submit" value="Crear usuario" />
      </form>
    </div>
  );
};

export const CreateNewContentForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState("");

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: inputs.username,
        password: inputs.password,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((user) => {
        console.log(user);
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
      })
      .catch((err) => {
        console.error("Error es: ", err);
      });
    console.log("fetcheado");
  };

  return (
    <div className={styles.CreateNewUserForm__container}>
      <form onSubmit={handleSubmit} className={styles.CreateNewUserForm__form}>
        <h4>Crear usuario</h4>
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

        <h4>Todo el Contenido </h4>
        <div className={styles.content__items__container}>
          {items.map((item) => (
            <ContentCard
              onClick={() => {
                setCategories([...categories, item.name]);
              }}
              background={item.img}
              title={item.name}
            />
          ))}
        </div>

        <h4>Contenido permitido</h4>
        <div className={styles.content__available__container}>
          {categories.map((category) => (
            <span className={styles.content__available}>{category}</span>
          ))}
        </div>
        <input type="submit" value="Crear usuario" />
      </form>
    </div>
  );
};
