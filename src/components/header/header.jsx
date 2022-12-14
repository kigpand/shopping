import React from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../login/login';
import Search from './search';
import styles from './header.module.scss';
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
            <div className={styles.headerContainer}>
                <img className = {styles.logo} src = {LOGO_IMG} onClick = {reHome} alt = "로고"/>
                {/* <div className={styles.category}>
                    <div>중고장터</div>
                    <div>내위치</div>
                </div> */}
                <div className={styles.headerItems}>
                    <Search />
                    <Login />
                </div>
            </div>
        </section>
    );
    };
 
export default Header;