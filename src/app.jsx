
import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Contents from './components/contents/contents';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import MakeContents from './components/makeContents/makeContents';
import ViewContent from './components/viewContent/viewContent';

function App({authService,shopService}) {

  const [id, setId] = useState("");
  const [nickName, setNickName] = useState("");
  const [searchData, setSearchData] = useState(false);
  const [array, setArray] = useState([]);

  const getUser = (id,nickName) =>{
      setId(id);
      setNickName(nickName);
  }
  
  return (
   <div className = {styles.app} >
      <HashRouter>
         <Header getUser = {getUser} authService={authService} id = {id} nickName = {nickName} shopService = {shopService} setSearchData = {setSearchData} setArray = {setArray}/>
         <Switch>
            <Route path = "/" exact>
              {!searchData && <Home shopService = {shopService}/>}
              {searchData && <Contents array = {array}/>}
            </Route>
            <Route path = "/makeContents">
              <MakeContents id = {id} nickName = {nickName} shopService = {shopService}/>
            </Route>
            <Route path = "/viewContent">
              <ViewContent id = {id} shopService = {shopService}/>
            </Route>
         </Switch>
     </HashRouter>
   </div>
  );
}

export default App;
