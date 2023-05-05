import React from "react";
import AddExpenseForm from "../components/AddExpenseForm";
import {
  createNewExpense,
  fetchData,
  getMatchingItems,
} from "../utils/helpers.js";
import { useLoaderData } from "react-router-dom";
import BudgetItem from "../components/BudgetItem.jsx";
import { toast } from "react-toastify";
import { handleFormSubmit } from "../utils/handleFormSubmit";

const BudgetPage = () => {
  const { budget, expenses } = useLoaderData();
  //   console.log("anaaaaaaaa", expenses);
  // console.log(budget)
  return (
    <div>
      <h1 className="">
        <span className="capitalize">{budget.name}</span> Budget page
      </h1>
      <BudgetItem budget={budget} showDelete={true} />
      <AddExpenseForm budgets={[budget]} />
      {expenses.map((item) => (
        <>
          <p>{item.name}</p>
          {/* <p onClick={}>delete this expense</p> */}
          <p>||||||||||||||||||||||||</p>
        </>
      ))}
    </div>
  );
};

// loader
export const budgetLoader = ({ params }) => {
  const { id } = params;
  const budgets = fetchData("budgets");
  const budget = budgets.find((budget) => budget.id === id);

  const expenses = getMatchingItems("expenses", "budgetId", budget.id);

  return { budget, expenses };
};

// action
export const budgetAction = async ({ request }) => {
  return handleFormSubmit(request);
};
export default BudgetPage;
