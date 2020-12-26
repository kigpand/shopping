import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './logout.module.css';

const Logout = ({saveUserInfo,authService,nickName,login_state}) => {

    const history = useHistory();

    const logout = () =>{
        authService.logout();
        saveUserInfo("","");
        login_state(false);
        history.push("./");
    }

    const makeContent = () =>{
        history.push("./makeContents");
    }

    return(
        <div className = {styles.logout}>
            <div className = {styles.text}>{nickName}님 환영합니다!</div>
            <div className = {styles.btn} onClick = {makeContent}>게시글 쓰기</div>
            <div className = {styles.btn} onClick = {logout}>로그아웃</div>
        </div>
    );
};

export default Logout;