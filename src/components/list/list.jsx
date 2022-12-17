import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './list.module.scss';

const List = ({content}) => {
    const nav = useNavigate();

    const goView = () =>{
        localStorage.setItem("data",JSON.stringify(content));

        nav('/viewContent');
    }
    
    return(
        <div className = {styles.list} onClick = {goView}>
            <img src = {content.imgUrl} className = {styles.img} alt = "listImg"></img>
            <div className = {styles.title}>{content.title}</div>
            <div className = {styles.address}>{content.address}</div>
            <div className = {styles.price}>{content.price}</div>
        </div>
    );
};

export default List;