import React from 'react';
import CurrentItem from '../currentitem/currentItem';
import styles from './home.module.scss';

const Home = () => {

    return(
        <div className={styles.home}>
            <CurrentItem />
        </div>
    );
};

export default Home;