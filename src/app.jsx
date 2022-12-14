
import { HashRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Contents from './components/contents/contents';
import Header from './components/header/header';
import Home from './components/home/home';
import MakeContents from './components/makeContents/makeContents';
import ViewContent from './components/viewContent/viewContent';
import useDataStore from './store/dataStore';

function App() {

  const { searchList } = useDataStore();
  
  return(
    <div className = {styles.app} >
        <HashRouter>
            <Header />
            <Switch>
              <Route path = "/" exact>
                {searchList.length === 0 && <Home />}
                {searchList.length > 0 && <Contents />}
              </Route>
              <Route path = "/makeContents">
                <MakeContents />
              </Route>
              <Route path = "/viewContent">
                <ViewContent />
              </Route>
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
