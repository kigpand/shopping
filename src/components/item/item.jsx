import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './item.module.css';

const Item = ({content}) => {

    const history = useHistory();

    const goView = () =>{
        history.push({
            pathname : '/viewContent',
            state : {content : content},
        });
    }

    return(
    <div className = {styles.item} onClick = {goView}>
        <img src = {content.imgUrl} className = {styles.img} alt = "게시물사진"></img>
        <div className = {styles.title}>{content.title}</div>
        <div className = {styles.price}>{content.price}</div>
        <div className = {styles.address}>{content.address}</div>
    </div>     
    );
};

export default Item;