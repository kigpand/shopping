import React from "react";
import { useNavigate } from "react-router-dom";
import useDataStore from "../../store/dataStore";
import styles from "./list.module.scss";

const List = ({ content }) => {
  const nav = useNavigate();
  const { changeContentData } = useDataStore();

  const goView = () => {
    changeContentData(content);
    nav("/viewContent");
  };

  return (
    <div className={styles.list} onClick={goView}>
      <img src={content.imgUrl} className={styles.img} alt="listImg"></img>
      <div className={styles.title}>{content.title}</div>
      <div className={styles.address}>{content.address}</div>
      <div className={styles.price}>{content.price}</div>
    </div>
  );
};

export default List;
