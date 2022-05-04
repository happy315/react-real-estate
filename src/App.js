import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {Switch,Route} from 'react-router-dom'
import { Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Redirect to="/" />
      
      <Switch>
        <Route>
        <Header />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
