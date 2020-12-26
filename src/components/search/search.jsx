import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './search.module.css';

const Search = ({authService}) => {
    const history = useHistory();
    const inputRef = useRef();

    const Click = ()=>{
        if(inputRef.current.value===""){
            return;
        }
        else{
            const array = authService.SearchContents(inputRef.current.value);
            history.push({
                pathname : '/contents',
                state : {array : array}
            });
            inputRef.current.value = "";
        }
    }

    const EnterKeyDown = () =>{
        if(window.event.keyCode === 13){
            if(inputRef.current.value===""){
                return;
            }
            else{
                const array = authService.SearchContents(inputRef.current.value);
                history.push({
                    pathname : '/contents',
                    state : {array : array}
                });
                inputRef.current.value = "";
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