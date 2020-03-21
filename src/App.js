import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/header";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn/Page";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </>
  );
};

export default App;
