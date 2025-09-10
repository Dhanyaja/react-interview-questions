import React, { useCallback } from "react";
import { useCart } from "../context/cartContext";

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 150 },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h3>Products</h3>
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "10px" }}>
          {p.name} - ${p.price}
          <button onClick={() => addToCart(p)} style={{ marginLeft: "10px" }}>
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
