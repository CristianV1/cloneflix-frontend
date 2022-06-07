import React from "react";
import styles from "./ContentCard.module.css";

const ContentCard = ({ onClick, background, title }) => {
  return (
    <div onClick={onClick} className={styles.contentCard__container}>
      <img className={styles.contentCard__background} src={background} />
    </div>
  );
};

export default ContentCard;
