import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";
import Payment from "./Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders/Orders";

const promise = loadStripe(
  "pk_test_51HqO3iJos7DmPUwd3oYAeukcWZ8E5Q5V6ZNRYMPW4ecgvi99FuDJHaGeZESA6seGmcSi3uVYaBUtTdaiJcVJj4Wk000yaRI3NI"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
