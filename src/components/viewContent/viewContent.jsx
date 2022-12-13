import React, { useEffect, useState } from 'react';
import styles from './viewContent.module.css';

const ViewContent = ({id,shopService}) => {

    const [items,setItems] = useState({});

    useEffect(()=>{
        const item = JSON.parse(localStorage.getItem("data"));
        setItems(item);
    },[]);

    const deleteItem =() =>{
        shopService.DeleteContents(items.content_num);
    }

    return(
          <div className = {styles.viewContent}>
            <div className = {styles.title}>
                        {items.title}
            </div>
            <img src = {items.imgUrl} className = {styles.img} alt = "imgUrl"></img>
            <div className={styles.texts}>
                <div className = {styles.content}>
                    <div className = {styles.user}>
                    <div className = {styles.nickName}>
                        판매자 : {items.nickName}
                    </div>
                    <div className = {styles.address}>
                        거래지역 : {items.address}
                    </div>
                </div>
                    <div className = {styles.price}>
                        가격 : {items.price}원
                    </div>
                    <div className = {styles.info}>
                        {items.info}
                    </div>
                </div>
                <div className={styles.line}></div>
                    {id ===items.user_id && 
                        <div className = {styles.renew}>
                            <button className = {styles.delete} onClick = {deleteItem}>삭제</button>
                        </div>
                    }
            </div>
        </div>
    );
};

export default ViewContent;