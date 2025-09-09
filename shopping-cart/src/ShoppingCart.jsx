import React, { useCallback, useMemo, useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 150 },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // add new item
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }, []);
  const removeFromCart = useCallback((id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }, []);
  const updateQuantity = useCallback((id, quantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(quantity, 0) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <div>
      <h2>🛒Shopping Cart</h2>
      {/* Products list */}
      <h3>Products</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      {/* cart section */}
      <h3>Cart</h3>
      {cart.length === 0 && <p>Your cart is empty</p>}
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <div>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>

      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default ShoppingCart;
