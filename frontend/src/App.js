import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
function App() {
  return (
    <div className="App">
        <Header/>
        <ProductsContainer/>
    </div>
  );
}

export default App;
