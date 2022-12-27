import React from 'react';
import { useNavigate } from 'react-router-dom';
import useDataStore from '../../store/dataStore';
import styles from './item.module.scss';

const Item = ({content}) => {

    const nav = useNavigate();
    const { changeContentData } = useDataStore();

    const goView = () =>{
        changeContentData(content);
        sessionStorage.setItem('currentItem', JSON.stringify(content));
        nav('/viewContent');
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