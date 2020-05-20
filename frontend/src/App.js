import React from 'react';
import './App.css';
import Products from "./components/products/Products";
import TopBar from "./components/TopBar/TopBar";
import SearchBar from "./components/Header/SearchBar/SearchBar";
function App() {
  return (
    <div className="App">
        <TopBar />
        <SearchBar/>
        <Products />
    </div>
  );
}

export default App;
