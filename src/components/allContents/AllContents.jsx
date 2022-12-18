import React, { useEffect, useState } from 'react';
import ShopService from '../../service/shop_service';
import Item from '../item/item';
import styles from './AllContents.module.scss';

const AllContents = () => {

    const [contents,setContent] = useState({});
    const [count, setCount] = useState([]);
    const [pageData, setPageData] = useState([]);
    const shopService = new ShopService();

    useEffect(() =>{
        const stopSync = shopService.makeCurrentContents(datas => {
            const listArray = Object.keys(datas);
            if (listArray.length > 8) {
                const length = Math.ceil(listArray.length / 8);
                const countArr = [];
                const dataArr = [];
                const reverseArray = listArray.reverse();
                for (let i = 1 ; i <= length; i++) {
                    countArr.push(i);
                }
                for (let i = 0; i < 8; i++) {
                    dataArr.push(datas[reverseArray[i]]);
                } 
                setPageData(dataArr);
                setCount([...countArr]);
            }
            setContent(datas);
        });
        return () =>{ stopSync();}

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const onPageBtn = (e) => {
        const array = [];
        const baseNum = Number(e.target.innerText) - 1;
        for (let i = baseNum * 8; i < (baseNum * 8) + 8; i++) {
            const data = contents[Object.keys(contents).reverse()[i]];
            if (data) array.push(contents[Object.keys(contents).reverse()[i]]);
        }
        setPageData(array);
        
        e.target.parentNode.childNodes.forEach((child) => {
            if (child.innerText === e.target.innerText) {
                child.style.backgroundColor = 'black';
                child.style.color = 'white';
            } else {
                child.style.backgroundColor = 'white';
                child.style.color = 'black';
            }
        })
    }

    return(
        <div className = {styles.currentitem}>
            <h1 className = {styles.text}>전체 게시물</h1>
            { pageData.length === 0 
            ? <div className = {styles.items}>
                {Object.keys(contents).reverse().map(key =>{
                    return <Item key = {contents[key].content_num} content = {contents[key]}/>;
                })}
            </div>
            : <div className = {styles.items}>
                {pageData.map(data =>{
                    return <Item key = {data.content_num} content = {data}/>;
                })}
            </div>}
            <div className={styles.footer}>
                { count.map((item, i) => {
                    return <div key={item} onClick={onPageBtn} style={i === 0 ? { backgroundColor: 'black', color: 'white'} : {backgroundColor: 'white'}}>{item}</div>
                })}
            </div>
        </div>    
    );
};

export default AllContents;