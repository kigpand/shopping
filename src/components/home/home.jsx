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
            <div className={styles.main}>
                <div className={styles.texts}>
                    <div className={styles.title}>중고장터</div>
                    <div className={styles.sub}>필요없는 물건을 이웃들과 나눠보세요</div>
                </div>
                <div className={styles.mainLine} />
            </div>
            <CurrentItem />
            <div className={styles.more} onClick={onMoreBtn}>더 보기</div>
        </div>
    );
};

export default Home;