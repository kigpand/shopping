import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useDataStore from '../../store/dataStore';
import styles from './search.module.css';
import ShopService from '../../service/shop_service';

const Search = () => {
    const inputRef = useRef()
    const history = useHistory();
    const { changeSearchList } = useDataStore();
    const shopService = new ShopService();

    const Click = ()=>{
        if(inputRef.current.value===""){
            changeSearchList([]);
            return;
        }
        else{
            const array = shopService.SearchContents(inputRef.current.value);
            changeSearchList(array);
            inputRef.current.value = "";
            history.push("/");
        }
    }

    const EnterKeyDown = () =>{
        if(window.event.keyCode === 13){
            if(inputRef.current.value===""){
                changeSearchList([]);
                return;
            }
            else{
                const array = shopService.SearchContents(inputRef.current.value);
                changeSearchList(array);
                inputRef.current.value = "";
                history.push("/");
            }
        }
    }

    return (
        <div className = {styles.search}>
            <div className = {styles.input}>
                <input ref = {inputRef} type="text" className = {styles.text} placeholder = "검색어를 입력해주세요..." onKeyUp={EnterKeyDown}/>
                <button className = {styles.btn} onClick={Click}><i className="fas fa-search"></i></button>
            </div>
        </div>
    );
};

export default Search;