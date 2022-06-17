import React from "react";
import './App.css';
import {Switch,Route} from 'react-router-dom'
import { Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className="App">
      <Redirect to="/" />
      <Switch>
        <Route>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
