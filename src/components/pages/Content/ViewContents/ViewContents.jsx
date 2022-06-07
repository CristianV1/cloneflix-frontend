import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../features/Navbar/Navbar";
import TableItem from "../../../features/TableItem/TableItem";
import styles from "./ViewContents.module.css";

const ViewContents = () => {
  const navigate = useNavigate();
  let items = [
    { name: "ola" },
    { name: "ola" },
    { name: "ola" },
    { name: "ola" },
  ];

  return (
    <div className={styles.viewUser__container}>
      <Navbar />
      <div className={styles.viewUser__items__container}>
        <input
          className={styles.viewUser__create__button}
          type={"button"}
          value={"agregar"}
          onClick={() => {
            navigate("/create-user");
          }}
        />
        {items.map((item) => (
          <TableItem name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default ViewContents;
