import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './search.module.css';

const Search = ({shopService, setSearchData, setArray}) => {
    const inputRef = useRef()
    const history = useHistory();

    const Click = ()=>{
        if(inputRef.current.value===""){
            setSearchData(false);
            return;
        }
        else{
            const array = shopService.SearchContents(inputRef.current.value);
            setArray(array);
            setSearchData(true);
            inputRef.current.value = "";
            history.push("/");
        }
    }

    const EnterKeyDown = () =>{
        if(window.event.keyCode === 13){
            if(inputRef.current.value===""){
                setSearchData(false);
                return;
            }
            else{
                const array = shopService.SearchContents(inputRef.current.value);
                setArray(array);
                setSearchData(true);
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