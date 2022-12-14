import React from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../login/login';
import Search from '../search/search';
import styles from './header.module.css';
import LOGO_IMG from "../../img/logo.png";
import useDataStore from '../../store/dataStore';

const Header = () => {
    
    const history = useHistory();
    const { changeSearchList } = useDataStore();
    
    const reHome = () =>{
        changeSearchList([]);
        history.push("/");
    }

    return( 
        <section className = {styles.header}>
                <img className = {styles.logo} src = {LOGO_IMG} onClick = {reHome} alt = "로고"/>
                <Search />
                <Login />
            </section>
    );
    };
 
export default Header;