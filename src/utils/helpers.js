import { toast } from "react-toastify";
let getNextItem = 0;
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

// add new expense
export const createNewExpense = (name, amount, budgetId) => {
  // check the budget left amount
  const budgets = fetchData("budgets");
  const budget = budgets.find((budget) => budget.id === budgetId);
  const budgetSpents = calcSpentAmount(budgetId);
  const leftAmount = budget.amount - budgetSpents;
  console.log({ leftAmount });

  if (leftAmount - amount >= 0) {
    const prevExpenses = fetchData("expenses") || [];
    const newExpense = {
      id: crypto.randomUUID(),
      name,
      amount,
      createdAt: Date.now(),
      budgetId,
    };
    localStorage.setItem(
      "expenses",
      JSON.stringify([...prevExpenses, newExpense])
    );
    toast.success(`Expense ${name} added.`);
  } else {
    toast.warn(
      `Can't add ${name} expense, the left amount in the budget don't cover this item.`
    );
  }
};

// delete items
export const deleteItem = (key) => {
  localStorage.removeItem(key);
};

export const calcSpentAmount = (budgetId) => {
  const expenses = fetchData("expenses") || [];
  // console.log({ spentAmount });
  return expenses.reduce((acc, expense) => {
    if (expense.budgetId === budgetId) {
      return Number(acc) + Number(expense.amount);
    } else return acc;
  }, 0);
};

export const getMatchingItems = (category, key, value) => {
  const data = fetchData(category) || [];
  return data.filter((item) => item[key] === value);
};

export const deleteBudget = (budgetId) => {
  const matchingExpenses = getMatchingItems("expenses", "budgetId", budgetId);
};

export const getRandomColor = () => {
  const colors = [
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "purple",
    "pink",
    "rose",
  ];

  const randomNumber = Math.floor(Math.random() * colors.length);
  return colors[getNextItem++];
};
