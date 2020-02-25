import React from 'react';
import './App.css';
import Layout from "./Components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import Manager from "./Manager/Manager";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/manager" component={Manager}/>
            <Layout/>

        </Switch>
    </div>
  );
}

export default App;
