import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubcribeFromAuth = null;

  componentDidMount() {
    this.unSubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        ...this.state,
        currentUser: user
      })
    })
  }
  
  componentWillUnmount() {
    this.unSubcribeFromAuth();
  }

  render() {
    return ( 
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="shop" element={<ShopPage />}></Route>
          <Route path="signin" element={<SignInAndSignUpPage />}></Route>
        </Routes>
      </div>
    )
  }
}

export default App;
