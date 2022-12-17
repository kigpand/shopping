import React from 'react';
import { useNavigate } from 'react-router-dom';
import useDataStore from '../../store/dataStore';
import styles from './search.module.scss';
import ShopService from '../../service/shop_service';
import { useInput } from '../../hooks/useInput';

const Search = () => {
    const nav = useNavigate();
    const { changeSearchList } = useDataStore();
    const shopService = new ShopService();
    const searchInput = useInput('');

    const EnterKeyDown = () =>{
        if(window.event.keyCode === 13){
            if(searchInput.value===""){
                changeSearchList([]);
                return;
            }
            else{
                const array = shopService.SearchContents(searchInput.value);
                changeSearchList(array);
                searchInput.value = "";
                nav("/");
            }
        }
    }

    return (
        <div className = {styles.search}>
            <div className = {styles.input}>
                <input type="text" className = {styles.text} placeholder = "검색어를 입력해주세요..." onKeyUp={EnterKeyDown} {...searchInput}/>
            </div>
        </div>
    );
};

export default Search;