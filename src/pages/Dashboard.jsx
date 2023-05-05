import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";
import Intro from "../components/Intro";
// import { Highlighted } from "../components/Typography";
import { createBudget, createNewExpense, fetchData } from "../utils/helpers";
import Budgets from "../components/Budgets.jsx";
import { handleFormSubmit } from "../utils/handleFormSubmit";

// =============================================================
// component

const Dashboard = () => {
  const { userName, budgets, expenses } = useLoaderData();
  // console.log("dash", userName);

  const Welcome = () => (
    <>
      <h1 className="font-semibold mb-8 capitalize">
        Welcome back{" "}
        <span className="underline decoration-indigo-200 hover:decoration-2 hover:decoration-indigo-400 transition-all">
          {userName}
        </span>
      </h1>
      <AddBudgetForm />
      {budgets && <AddExpenseForm budgets={budgets} />}
      <Budgets budgets={budgets} />
    </>
  );
  // return <Welcome/>;
  return <section>{userName ? <Welcome /> : <Intro />}</section>;
};

// =============================================================
// loader

export const dashboardLoader = () => {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return { userName, budgets, expenses };
};

// =============================================================
// action
export const dashboardAction = async ({ request }) => {
  return handleFormSubmit(request);
};

export default Dashboard;
