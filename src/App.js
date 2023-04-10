import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Coins from './components/Coins';
import Exchange from './components/Exchanges';
import CoinDetails from './components/CoinDetails';

import React from 'react';
import Header from './components/Header';
import './style/loader.scss'
import './style/header.scss'
import './style/exchanges.scss'
import './style/coins.scss'
import './style/coincard.scss'
import './style/coindetail.scss'
import './style/home.scss'
import './style/footer.scss'
import Footer from './components/Footer';




function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/exchanges' element={<Exchange/>} ></Route>

        <Route path='/coins' element={<Coins/>} ></Route>
        <Route path='/coins/:id' element={<CoinDetails/>} ></Route>
        

      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
