import React from "react";
import CartProvider from "./context/CartProvider";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  return (
    <CartProvider>
      <div style={{padding: "20px"}}>
        <h2>🛒 Shopping Cart (Context + Reducer)</h2>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
