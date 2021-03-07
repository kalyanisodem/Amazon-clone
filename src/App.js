import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./home.js"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout.js"
import Login from "./Login.js";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment.js";


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect (() => {
  auth.onAuthStateChanged(authUser =>{
      console.log("the user is >>>>>", authUser);
    if (authUser){
      //user just logged in
      dispatch({
        type: "SET_USER",
        user: authUser
      })
    }else {
      //user logged out
      dispatch({
        type: "SET_USER",
        user: null
      })
    }
    })
  }, []);

  return (
    <Router>
      <div className="app">
          <Switch>
          <Route path="/login">
            <Login />
          </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Header />
              <Payment />
            </Route>
          <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
