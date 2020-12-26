import React, { useEffect, useState } from 'react';
import LoginBtn from '../login_btn/login_btn';
import Logout from '../logout/logout';
import styles from './login.module.css';

const Login = ({getUser,authService,nickName}) => {

    const [logining,setLogining] = useState(false);


    const login_state = (state) =>{
        setLogining(state);
    }

    const saveUserInfo = (id,nickName) =>{
        getUser(id,nickName);
    };

    useEffect(()=>{
        authService.onAuthChange(user =>{
            if(user){
                saveUserInfo(user.uid,user.displayName);
                setLogining(true);
            };
            {!user && saveUserInfo("","")};
        })
    })

    return(
        <div className = {styles.login}>
           {!logining && <LoginBtn authService = {authService} saveUserInfo = {saveUserInfo} login_state = {login_state}/>}
           {logining && <Logout authService = {authService} saveUserInfo = {saveUserInfo} nickName = {nickName} login_state = {login_state}/>}
        </div>
    );
};

export default Login;