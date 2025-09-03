import { createRef } from "react";
import { createContext, useContext, useEffect, useReducer } from "react";

/**
 *
 * @typedef {{id: string, text: string, completed: boolean, createdAt: number}} Todo
 * @typedef {{items: Todo[], filter: 'all'|'active'|'completed', search: string}} TodoState
 */

/** ------------------ utils ------------------ */
const uid = () => crypto?.randomUUID?.() ?? `${Date.now()}_${Math.random()}`;

/** ------------------Reducer ----------------- */
const initialState = {
  items: [],
  filter: "all",
  search: "",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "HYDRATE": {
      return action.payload ?? state;
    }
    case "ADD": {
      const text = action.payload.trim();
      if (!text) return state;
      const next = {
        ...state,
        items: [
          { id: uid(), text, completed: false, createdAt: Date.now() },
          ...state.items,
        ],
      };
      return next;
    }
    case "TOGGLE": {
      const next = {
        ...state,
        items: state.items.map((t) =>
          t.id === action.id ? { ...t, completed: !t.completed } : t
        ),
      };
      return next;
    }
    case "EDIT": {
      const { id, text } = action.payload;
      const trimmed = text.trim();
      if (!trimmed) return state;
      return {
        ...state,
        items: state.items.map((t) =>
          t.id === id ? { ...t, text: trimmed } : t
        ),
      };
    }
    case "DELETE": {
      return { ...state, items: state.items.filter((t) => t.id !== action.id) };
    }
    case "TOGGLE_ALL": {
      const allCompleted = state.items.every((t) => t.completed);
      return {
        ...state,
        items: state.items.map((t) => ({ ...t, completed: !allCompleted })),
      };
    }
    case "CLEAR_COMPLETED": {
      return { ...state, items: state.items.filter((t) => !t.completed) };
    }
    case "SET_FILTER": {
      return { ...state, filter: action.filter };
    }
    case "SET_SEARCH": {
      return { ...state, search: action.search };
    }
    default:
      return state;
  }
};

/** ----------------Split Contexts ---------------- */
const TodoStateContext = createContext(/** @type {TodoState}*/ (initialState));
const TodoDispatchContext = createContext(() => {});

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, undefined, () => {
    // lazy init from localStorage
    try {
      const raw = localStorage.getItem("todos_v2");
      return raw ? JSON.parse(raw) : initialState;
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem("todos_v2", JSON.stringify(state));
  }, [state]);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

/** -------------------- custom hooks ------------------ */

export const useTodoState = () => useContext(TodoStateContext);
export const useTodoDispatch = () => useContext(TodoDispatchContext);
