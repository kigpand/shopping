
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import AllContents from './components/allContents/AllContents';
import Contents from './components/contents/contents';
import Header from './components/header/header';
import Home from './components/home/home';
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner';
import MakeContents from './components/makeContents/makeContents';
import ViewContent from './components/viewContent/viewContent';
import useDataStore from './store/dataStore';

function App() {

  const { searchList, loading, changeLoading } = useDataStore();

  useEffect(() => {
    if (loading) {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = 'auto';
    }
}, [loading]);

  useEffect(() => {
    changeLoading(true);
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_APPKEY}&libraries=services&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        changeLoading(false);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);

    return () => {
      mapScript.removeEventListener('load', onLoadKakaoMap);
    }
  }, []);
  
  return(
    <div className = {styles.app} >
            <Header />
            <Routes>
              <Route path = "/" element={searchList.length === 0 ? <Home /> : <Contents />} exact></Route>
              <Route path = "/makeContents" element={<MakeContents />}></Route>
              <Route path = "/viewContent" element={<ViewContent />}></Route>
              <Route path = '/all' element={<AllContents />}></Route>
            </Routes>
        { loading && <LoadingSpinner />}
    </div>
  );
}

export default App;
