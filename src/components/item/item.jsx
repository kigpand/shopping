import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './item.module.scss';

const Item = ({content}) => {

    const history = useHistory();

    const goView = () =>{
        localStorage.setItem("data",JSON.stringify(content));
        history.push({
            pathname : '/viewContent',
        });
    }

    return(
    <div className = {styles.item} onClick = {goView}>
        <img src = {content.imgUrl} className = {styles.img} alt = "게시물사진"></img>
        <div className={styles.contentContainer}>
            <div className = {styles.title}>{content.title}</div>
            <div className = {styles.price}>{content.price}원</div>
        </div>
    </div>     
    );
};

export default Item;