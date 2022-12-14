import React from 'react';
import useDataStore from '../../store/dataStore';
import List from '../list/list';
import styles from './contents.module.css';

const Contents = () =>{

    const { searchList } = useDataStore();


    return(
        <div className ={styles.contents}>
            <div className = {styles.main}>
                <h3 className = {styles.text}>검색한 상품</h3>
                <div className = {styles.list}>
                {Object.keys(searchList).length === 0 && <div className = {styles.no_contents}><div className = {styles.invaild}>찾는 상품이 없습니다.</div></div>}
                {Object.keys(searchList).map(key =>{
                    return <List key = {searchList[key].content_num} content = {searchList[key]}/>;
                })}
                </div>
            </div>
        </div>     
    );
};

export default Contents;