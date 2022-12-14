import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../service/auth_service';
import useMainStore from '../../store/mainStore';
import styles from './logout.module.css';

const Logout = () => {

    const history = useHistory();
    const authService = new AuthService();
    const { nickName, changeId, changeNickName} = useMainStore();

    const logout = () =>{
        authService.logout();
        changeId(null);
        changeNickName(null);
        history.push("./");
    }

    const makeContent = () =>{
        history.push("./makeContents");
    }

    return(
        <div className = {styles.logout}>
            <div className = {styles.text}>{nickName}님 환영합니다!</div>
            <div className={styles.btns}>
                <div className = {styles.btn} onClick = {makeContent}>게시글 쓰기</div>
                <div className = {styles.btn} onClick = {logout}>로그아웃</div>
            </div>
        </div>
    );
};

export default Logout;