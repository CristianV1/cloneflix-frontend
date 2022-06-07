import React, { useEffect } from "react";
import Navbar from "../../features/Navbar/Navbar";
import styles from "./Home.module.css";
import ContentCard from "../../features/ContentCard/ContentCard";

import { useDispatch, useSelector } from "react-redux";
import { getContents } from "../../../redux/actions/actions";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const contents = useSelector((states) => states.contents);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("contend es: ", contents);
    dispatch(getContents(user.id));
  }, []);
  let items = [
    {
      name: "kunfupanda",
      img: "https://www.nawpic.com/media/2020/kung-fu-panda-nawpic-8.jpg",
    },
    { name: "naruto", img: "https://images3.alphacoders.com/135/135625.jpg" },
    {
      name: "kunfupanda",
      img: "https://www.nawpic.com/media/2020/kung-fu-panda-nawpic-8.jpg",
    },
    { name: "naruto", img: "https://images3.alphacoders.com/135/135625.jpg" },
    {
      name: "kunfupanda",
      img: "https://www.nawpic.com/media/2020/kung-fu-panda-nawpic-8.jpg",
    },
    { name: "naruto", img: "https://images3.alphacoders.com/135/135625.jpg" },
    {
      name: "kunfupanda",
      img: "https://www.nawpic.com/media/2020/kung-fu-panda-nawpic-8.jpg",
    },
    { name: "naruto", img: "https://images3.alphacoders.com/135/135625.jpg" },
    {
      name: "kunfupanda",
      img: "https://www.nawpic.com/media/2020/kung-fu-panda-nawpic-8.jpg",
    },
    { name: "naruto", img: "https://images3.alphacoders.com/135/135625.jpg" },
  ];
  return (
    <div className={styles.home__container}>
      <Navbar />
      <div className={styles.home__section}>
        <h4>Tus series</h4>
        <div className={styles.home__items__container}>
          {contents.map((item, idx) => (
            <ContentCard key={idx} background={item.img} title={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
