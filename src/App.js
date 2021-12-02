import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="shop" element={<ShopPage />}></Route>
        </Routes>
      </div>
    )
  }
}

export default App;
