import React from 'react';
import './App.css';
import Products from "./components/products/Products";
import TopBar from "./components/Header/TopBar/TopBar";
import SearchBar from "./components/Header/SearchBar/SearchBar";
import NavBar from "./components/Header/NavBar/NavBar";
function App() {
  return (
    <div className="App">
        <TopBar />
        <SearchBar/>
        <NavBar />
        <Products />
    </div>
  );
}

export default App;
