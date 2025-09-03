// export const visibleTodos = (state) => {
//   const q = state.search.trim().toLowerCase();
//   let list = state.items;
//   if (state.filter === "active") list = list.filter(t => !t.completed);
//   if (state.filter === "completed") list = list.filter(t => t.completed);
//   if (q) list = list.filter(t => t.text.toLowerCase().includes(q));
//   return list;
// };

export const visibleTodos = (state) => {
  const q = (state.search || "").trim().toLowerCase();
  let list = state.items || [];

  if (state.filter === "active") list = list.filter((t) => !t.completed);
  if (state.filter === "completed") list = list.filter((t) => t.completed);
  if (q) list = list.filter((t) => t.text.toLowerCase().includes(q));

  return list;
};

export const stats = (state) => {
  const total = state.items.length;
  const completed = state.items.filter((t) => t.completed).length;
  const active = total - completed;
  const progress = total ? Math.round((completed / total) * 100) : 0;
  return { total, completed, active, progress };
};
