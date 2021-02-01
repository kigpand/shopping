import React, { useEffect, useState } from 'react';
import Item from '../item/item';
import styles from './current_item.module.css';

const CurrentItem = ({shopService}) => {

    const [contents,setContent] = useState({});
    const [viewNum,setViewNum] = useState(-9);

    useEffect(() =>{
        const stopSync = shopService.makeCurrentContents(datas =>{
            setContent(datas);
        });
        return () =>{ stopSync();}
    },[]);

    return(
        <div className = {styles.currentitem}>
            <h1 className = {styles.text}>최근 게시물</h1>
            <div className = {styles.items}>
                {Object.keys(contents).reverse().map(key =>{
                    if(key>Object.keys(contents).length-9){
                        return <Item key = {contents[key].content_num} content = {contents[key]}/>;
                    }
                    else{
                        return;
                    }
                })}
            </div>
        </div>    
    );
};

export default CurrentItem;