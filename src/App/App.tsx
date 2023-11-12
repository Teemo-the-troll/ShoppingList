import React from 'react';
import './App.css';
import { ShoppingListIndex } from '../ShoppingListIndex/ShoppingListIndex';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ShoppingListDetail from "C:/Users/mikul/IdeaProjects/shopping-list/src/ShoppingListDetail/ShoppingListDetail"

function App() {
  return (
      <Router>
        <div style={{margin: "0 auto"}}>
          <div style={{width: "90%", margin: "0 auto"}}>
            <Routes>
              <Route path={"/"} Component={ShoppingListIndex}/>
              <Route path={"/detail/:id"} Component={ShoppingListDetail}/>
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
