import React from 'react';
import './App.css';
import Products from "./components/products/Products";
import TopBar from "./components/TopBar/TopBar";
function App() {
  return (
    <div className="App">
        <TopBar />
        <Products />
    </div>
  );
}

export default App;
