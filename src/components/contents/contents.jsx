import React from 'react';
import List from '../list/list';
import styles from './contents.module.css';

const Contents = ({array}) =>{


    return(
       <div className ={styles.contents}>
           <div className = {styles.main}>
               <h3 className = {styles.text}>검색한 상품</h3>
               <div className = {styles.list}>
               {Object.keys(array).length === 0 && <div className = {styles.no_contents}><div className = {styles.invaild}>찾는 상품이 없습니다.</div></div>}
               {Object.keys(array).map(key =>{
                  return <List key = {array[key].content_num} content = {array[key]}/>;
                })}
               </div>
           </div>
       </div>     
    );
};

export default Contents;