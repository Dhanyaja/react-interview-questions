import React from "react";
import { useCart } from "../context/cartContext";

const Cart = () => {
  const { items, total, updateQuantity, removeFromCart, clearCart } = useCart();

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Cart</h3>
      {items.length === 0 ? (
        <p>Empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              {item.name} - ${item.price} x {item.quantity}
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h4>Total: ${total}</h4>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
