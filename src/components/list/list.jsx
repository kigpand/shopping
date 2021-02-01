import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './list.module.css';

const List = ({content}) => {
    const history = useHistory();

    const goView = () =>{
        localStorage.setItem("data",JSON.stringify(content));

        history.push({
            pathname : '/viewContent',
        });
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