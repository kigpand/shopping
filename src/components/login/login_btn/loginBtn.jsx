import React from 'react';
import AuthService from '../../../service/auth_service';
import useMainStore from '../../../store/mainStore';
import styles from './loginBtn.module.scss';

const LoginBtn = () => {

    const authService = new AuthService();
    const { changeId, changeNickName } = useMainStore();

    const onLogin = () =>{
        let name = "Google";
        authService.login(name)
        .then(data =>{
            changeId(data.user.uid);
            changeNickName(data.user.displayName);
        });
    };

    return(
        <div className = {styles.btn} onClick = {onLogin}>로그인</div>
    );
};

export default LoginBtn;