import React, { useEffect } from 'react';
import AuthService from '../../service/auth_service';
import useMainStore from '../../store/mainStore';
import LoginBtn from './login_btn/loginBtn';
import Logout from './logout/logout';
import styles from './login.module.scss';

const Login = () => {

    const authService = new AuthService();
    const { id, changeId, changeNickName } = useMainStore();

    function saveUserInfo(id, nick) {
        changeId(id);
        changeNickName(nick);
    }

    useEffect(()=>{
        authService.onAuthChange(user =>{
            if(user){
                saveUserInfo(user.uid,user.displayName);
            } else {
                saveUserInfo(null,null)
            }
        })
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className = {styles.login}>
            {!id && <LoginBtn />}
            {id && <Logout />}
        </div>
    );
};

export default Login;