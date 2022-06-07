import React from "react";
import styles from "./TableItem.module.css";
import { AiOutlineClose, AiFillEdit } from "react-icons/ai";

const TableItem = ({ name, description }) => {
  return (
    <div className={styles.tableItem__container}>
      <span className={styles.TableItem__title}>{name}</span>
      {description && (
        <span className={styles.TableItem__text}>{description}</span>
      )}
      <AiFillEdit />
      <AiOutlineClose />
    </div>
  );
};

export default TableItem;
