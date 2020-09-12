import React from 'react';
import logo from './logo.svg';
import './RecipeApp.css';
import Navbar from './Navbar';
import Recipe from './Recipe';
import RecipeList from './RecipeList'

function RecipeApp() {
  return (
    <div className="App">
      <Navbar />
      <RecipeList />
    </div>
  );
}

export default RecipeApp;
