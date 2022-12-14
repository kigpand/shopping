import React from 'react';
import CurrentItem from '../currentitem/currentItem';
import styles from './home.module.css';

const Home = () => {

    return(
        <div>
            <div className = {styles.home}>
            </div>
            <CurrentItem />
        </div>
    );
};

export default Home;