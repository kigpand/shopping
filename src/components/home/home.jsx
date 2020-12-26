import React from 'react';
import CurrentItem from '../currentitem/current_item';
import styles from './home.module.css';

const Home = ({authService}) => {

    return(
        <div>
            <div className = {styles.home}>
                <div className = {styles.tag}>
                </div>
            </div>
            <CurrentItem authService = {authService}/>
        </div>
    );
};

export default Home;