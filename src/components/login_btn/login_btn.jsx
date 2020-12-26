import React from 'react';
import styles from './login_btn.module.css';

const LoginBtn = ({saveUserInfo,authService,login_state}) => {

    const onLogin = () =>{
        let name = "Google";
        authService.login(name)
        .then(data =>{
         saveUserInfo(data.user.uid,data.user.displayName);
         login_state(true);
        });
    };

    return(
        <div className = {styles.btn} onClick = {onLogin}>Google 로그인</div>
    );
};

export default LoginBtn;