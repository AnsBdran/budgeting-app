export const fetchData = (key) => JSON.parse(localStorage.getItem(key));

export const createBudget = (name, amount) => {
  const prevBudgets = fetchData("budgets") || [];
  const newBudget = {
    id: crypto.randomUUID(),
    name,
    amount,
    createdAt: Date.now(),
  };
  localStorage.setItem("budgets", JSON.stringify([...prevBudgets, newBudget]));
};

export const deleteItem = (key) => {
  localStorage.removeItem(key);
};
