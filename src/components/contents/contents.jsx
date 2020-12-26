import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import List from '../list/list';
import styles from './contents.module.css';

const Contents = ({authService}) => {

    const [contents,setContent] = useState({});
    const searchData = useLocation();


    useEffect(() =>{
        setContent(searchData.state.array);
        // const stopSync = authService.makeCurrentContents(datas =>{
        //     setContent(datas);
        // });
        // return () =>{ stopSync();}
    });
    return(
       <div className ={styles.contents}>
           <div className = {styles.main}>
               <h3 className = {styles.text}>중고 상품</h3>
               <div className = {styles.list}>
               {Object.keys(contents).length === 0 && <div className = {styles.no_contents}><div>찾는 상품이 없습니다.</div></div>}
               {Object.keys(contents).map(key =>{
                  return <List key = {contents[key].content_num} content = {contents[key]}/>;
                })}
               </div>
           </div>
       </div>     
    );
};

export default Contents;