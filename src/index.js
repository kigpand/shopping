import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from './service/auth_service';
import ShopService from './service/shop_service';

const authService = new AuthService();
const shopService = new ShopService();

ReactDOM.render(
  <React.StrictMode>
    <App authService = {authService} shopService = {shopService}/>
  </React.StrictMode>,
  document.getElementById('root')
);

