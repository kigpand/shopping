import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './view_content.module.css';

const ViewContent = ({authService,id}) => {
    const location = useLocation();

    const deleteItem =() =>{
        authService.DeleteContents(location.state.content.content_num);
    }

    return(
        <div className = {styles.viewContent}>
            <img src = {location.state.content.imgUrl} className = {styles.img} alt = "imgUrl"></img>
            <div className = {styles.user}>
                <div className = {styles.nickName}>
                    {location.state.content.nickName}
                </div>
                <div className = {styles.address}>
                    {location.state.content.address}
                </div>
            </div>
            <div className={styles.line}></div>
            <div className = {styles.content}>
                <div className = {styles.title}>
                    {location.state.content.title}
                </div>
                <div className = {styles.price}>
                    {location.state.content.price}
                </div>
                <div className = {styles.info}>
                    {location.state.content.info}
                </div>
            </div>
            <div className={styles.line}></div>
                {id ===location.state.content.user_id && 
                    <div className = {styles.renew}>
                        <button className = {styles.delete} onClick = {deleteItem}>삭제</button>
                    </div>
                }
        </div>
    );
};

export default ViewContent;