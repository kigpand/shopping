import React, { useEffect, useState } from 'react';
import ShopService from '../../service/shop_service';
import Item from '../item/item';
import styles from './currentItem.module.css';

const CurrentItem = () => {

    const [contents,setContent] = useState({});
    const shopService = new ShopService();

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
                        return null;
                    }
                })}
            </div>
        </div>    
    );
};

export default CurrentItem;