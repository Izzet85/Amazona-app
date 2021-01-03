import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import ProductScreen from "./ProductScreen"
import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";
import { useSelector } from "react-redux";
import SigninScreen from "./SigninScreen";

function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" href="/">
              Bola
            </Link>
          </div>

          <div>
            <Link href="/cart">Cart
            {cartItems.length >0 && (
              <span className="badge">{cartItems.length} </span>
            )}
            </Link>
            <Link href="/signin">Sign In</Link>
          </div>
          
        </header>
        <main>
          <Route path="/cart/id?" componenet={CartScreen}></Route>
          <Route path="/Product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen} exact></Route>
           <Route path="/" component={HomeScreen} exact></Route>


        </main>

        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
