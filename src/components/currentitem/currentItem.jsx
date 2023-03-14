import React, { useEffect, useState } from "react";
import ShopService from "../../service/shop_service";
import useDataStore from "../../store/dataStore";
import Item from "../item/item";
import styles from "./currentItem.module.scss";

const CurrentItem = () => {
  const [contents, setContent] = useState(null);
  const { changeLoading } = useDataStore();
  const shopService = new ShopService();

  useEffect(() => {
    changeLoading(true);
    const stopSync = shopService.makeCurrentContents((datas) => {
      setContent(datas);
      changeLoading(false);
    });
    return () => {
      stopSync();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.currentitem}>
      <h1 className={styles.text}>최근 게시물</h1>
      {contents && (
        <div className={styles.items}>
          {Object.keys(contents)
            .reverse()
            .map((key) => {
              if (key > Object.keys(contents).length - 9) {
                return (
                  <Item
                    key={contents[key].content_num}
                    content={contents[key]}
                  />
                );
              } else {
                return null;
              }
            })}
        </div>
      )}
    </div>
  );
};

export default CurrentItem;
