import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../login/login';
import Search from './search';
import styles from './header.module.scss';
import LOGO_IMG from "../../img/logo.png";
import useDataStore from '../../store/dataStore';

const Header = () => {
    
    const nav = useNavigate();
    const { changeSearchList } = useDataStore();
    
    const reHome = () =>{
        changeSearchList([]);
        nav('/');
    }

    return( 
        <section className = {styles.header}>
            <div className={styles.headerContainer}>
                <img className = {styles.logo} src = {LOGO_IMG} onClick = {reHome} alt = "로고"/>
                <div className={styles.headerItems}>
                    <Search />
                    <Login />
                </div>
            </div>
        </section>
    );
};

export default Header;