import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import {Switch,Route} from 'react-router-dom'
import { Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Redirect to="/" />
      
      <Switch>
        <Route>
          <Header />
         <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
