import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";
import Intro from "../components/Intro";
import { Highlighted } from "../components/Typography";
import { createBudget, fetchData } from "../utils/helpers";

// =============================================================
// component

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();
  // console.log("dash", userName);

  const Welcome = () => (
    <>
      <h1 className="font-semibold">
        Welcome back <Highlighted>{userName}</Highlighted>
      </h1>
      <AddBudgetForm />
      {budgets && <AddExpenseForm budgets={budgets} />}
    </>
  );
  return <section>{userName ? <Welcome /> : <Intro />}</section>;
};

// =============================================================
// loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
};

// =============================================================
// action
export const dashboardAction = async ({ request }) => {
  const data = await request.formData();
  const { _action, ...formValues } = Object.fromEntries(data);

  console.log("_action ", _action);
  console.log("formvalues", formValues);

  if (_action === "addNewUser") {
    localStorage.setItem("userName", JSON.stringify(formValues.userName));
    toast.success("Welcome Back " + formValues.userName);
  }

  if (_action === "addNewBudget") {
    createBudget(formValues.budgetName, formValues.budgetAmount);
    return toast.success(
      `added new ${formValues.budgetName} budget, ${formValues.budgetAmount}$`
    );
  }
  return null;
};

export default Dashboard;
