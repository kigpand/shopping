import React from 'react';
import CurrentItem from '../currentitem/current_item';
import styles from './home.module.css';

const Home = ({shopService}) => {

    return(
        <div>
            <div className = {styles.home}>
            </div>
            <CurrentItem shopService = {shopService}/>
        </div>
    );
};

export default Home;