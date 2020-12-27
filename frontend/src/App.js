import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductScreen from "./ProductScreen"
import HomeScreen from "./HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Bola
            </a>
          </div>

          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
          
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/Product/:id" component={ProductScreen}></Route>
        </main>

        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
