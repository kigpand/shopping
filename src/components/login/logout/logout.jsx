import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../../service/auth_service';
import useMainStore from '../../../store/mainStore';
import styles from './logout.module.scss';
import LOGOUT from '../../../img/logout.png';
import CONTENT from '../../../img/content.png';

const Logout = () => {

    const nav = useNavigate();
    const authService = new AuthService();
    const { changeId, changeNickName} = useMainStore();

    const logout = () =>{
        authService.logout();
        changeId(null);
        changeNickName(null);
        nav("/");
    }

    const makeContent = () =>{
        nav("/makeContents");
    }

    return(
        <div className = {styles.logout}>
            <div className={styles.btns}>
                <img src={CONTENT} alt='콘텐트' className={styles.img} onClick = {makeContent}></img>
                <img src={LOGOUT} alt='로그아웃' className={styles.img} onClick = {logout}></img>
            </div>
        </div>
    );
};

export default Logout;