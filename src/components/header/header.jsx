import React from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../login/login';
import Search from '../search/search';
import styles from './header.module.css';

const LOGO_IMG = "/img/logo.png";
const Header = ({getUser,searchData,authService,id,nickName}) => {
    
    const history = useHistory();
    
    const reHome = () =>{
        history.push('/');
    }

       return( 
       <section className = {styles.header}>
            <img className = {styles.logo} src = {LOGO_IMG} onClick = {reHome} alt = "로고"/>
            <Search searchData = {searchData} authService = {authService}/>
            <Login id = {id} getUser = {getUser} authService = {authService} nickName = {nickName}/>
        </section>
       );
    };
 
export default Header;