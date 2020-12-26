
import { useState } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Contents from './components/contents/contents';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import MakeContents from './components/makeContents/make_contents';
import ViewContent from './components/viewContent/view_content';

function App({authService}) {

  const [id,setId] = useState("");
  const [nickName,setNickName] = useState("");

  const getUser = (id,nickName) =>{
      setId(id);
      setNickName(nickName);
  }


  return (
   <div className = {styles.app}>
      <HashRouter>
         <Header getUser = {getUser} authService={authService} id = {id} nickName = {nickName}/>
         <Switch>
            <Route path = "/" exact>
              <Home authService = {authService}/>
            </Route>
            <Route path = "/contents">
              <Contents authService = {authService}/>
            </Route>
            <Route path = "/makeContents">
              <MakeContents id = {id} nickName = {nickName} authService ={authService}/>
            </Route>
            <Route path = "/viewContent">
              <ViewContent id = {id} authService={authService}/>
            </Route>
         </Switch>
     </HashRouter>
      <Footer />
   </div>
  );
}

export default App;
