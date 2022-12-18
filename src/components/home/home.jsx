import React from 'react';
import { useNavigate } from 'react-router';
import CurrentItem from '../currentitem/currentItem';
import styles from './home.module.scss';

const Home = () => {

    const nav = useNavigate();

    const onMoreBtn = () => {
        nav('/all');
    }

    return(
        <div className={styles.home}>
            <CurrentItem />
            <div className={styles.more} onClick={onMoreBtn}>더 보기</div>
        </div>
    );
};

export default Home;