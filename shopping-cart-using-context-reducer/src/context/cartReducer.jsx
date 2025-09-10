export const initialState = {
  items: [],
};
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE":
      return {
        state,
        items: state.items.filter((i) => i.id !== action.payload),
      };

    case "UPDATE_QTY":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id
            ? { ...i, quantity: Math.max(action.payload.quantity, 0) }
            : i
        ),
      };

    case "CLEAR":
      return initialState;

    default:
      return state;
  }
};
