import React, { useMemo } from "react";
import { useTodoDispatch, useTodoState } from "../context/TodoContext";
import { stats, visibleTodos } from "../selectors/todoSelectors";
import ThemeToggle from "./ThemeToggle";
import TodoInput from "./TodoInput";
import SearchBar from "./SearchBar";
import TodoFilters from "./TodoFilters";
import ProgressBar from "./ProgressBar";
import TodoList from "./TodoList";
import Stats from "./Stats";

const card = {
  maxWidth: 640,
  margin: "2rem auto",
  padding: "1rem",
  borderRadius: 16,
  boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
  background: "var(--bg)",
  color: "var(--fg)",
  border: "1px solid var(--border)",
};

const TodoApp = () => {
  const state = useTodoState();
  const dispatch = useTodoDispatch();

  const list = useMemo(() => visibleTodos(state), [state]);
  const s = useMemo(() => stats(state), [state]);

  return (
    <div style={card} role="region" aria-label="Todo Application">
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ margin: 0 }}> ✅ Todos </h2>
        <ThemeToggle />
      </header>

      <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
        <TodoInput
          onAdd={(text) => dispatch({ type: "ADD", payload: text })}
          onToggleAll={() => dispatch({ type: "TOGGLE_ALL" })}
          hasItems={state.items.length > 0}
        />

        <SearchBar
          value={stats.search}
          onChange={(search) => dispatch({ type: "SET_SEARCH", search })}
        />
        <TodoFilters
          filter={state.filter}
          onChange={(f) => dispatch({ type: "SET_FILTER", filter: f })}
          onClearCompleted={() => dispatch({ type: "CLEAR_COMPLETED" })}
          hasCompleted={state.items.some((t) => t.completed)}
        />
        <ProgressBar progress={s.progress} />

        <TodoList
          todos={list}
          onToggle={(id) => dispatch({ type: "TOGGLE", id })}
          onDelete={(id) => dispatch({ type: "DELETE", id })}
          onEdit={(id, text) =>
            dispatch({ type: "EDIT", payload: { id, text } })
          }
        />
        <Stats stats={s} />
      </div>
    </div>
  );
};

export default TodoApp;
