import React from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../login/login';
import Search from '../search/search';
import styles from './header.module.css';
import LOGO_IMG from "../../img/logo.png";

const Header = ({getUser,authService,id,nickName, shopService, setSearchData, setArray}) => {
    
    const history = useHistory();
    
    const reHome = () =>{
        setSearchData(false);
        history.push("/");
    }

       return( 
       <section className = {styles.header}>
            <img className = {styles.logo} src = {LOGO_IMG} onClick = {reHome} alt = "로고"/>
            <Search  shopService = {shopService} setSearchData = {setSearchData} setArray = {setArray}/>
            <Login id = {id} getUser = {getUser} authService = {authService} nickName = {nickName}/>
        </section>
       );
    };
 
export default Header;