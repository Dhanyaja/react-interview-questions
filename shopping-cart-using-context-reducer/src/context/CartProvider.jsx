import { useMemo, useReducer } from "react";
import { cartReducer, initialState } from "./cartReducer";
import { CartContext } from "./cartContext";

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const total = useMemo(
    () => state.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [state.items]
  );

  const value = {
    items: state.items,
    total,
    addToCart: (product) => dispatch({ type: "ADD", payload: product }),
    removeFromCart: (id) => dispatch({ type: "REMOVE", payload: id }),
    updateQuantity: (id, qty) =>
      dispatch({ type: "UPDATE_QTY", payload: { id, quantity: qty } }),
    clearCart: () => dispatch({ type: "CLEAR" }),
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
