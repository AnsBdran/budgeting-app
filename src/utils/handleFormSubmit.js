import { toast } from "react-toastify";
import { createNewExpense, createBudget } from "../utils/helpers.js";

export const handleFormSubmit = async (request) => {
  const data = await request.formData();
  const { _action, ...formValues } = Object.fromEntries(data);

  console.log("_action ", _action);
  console.log("formValues", formValues);

  // add new user
  if (_action === "addNewUser" && formValues.userName) {
    localStorage.setItem("userName", JSON.stringify(formValues.userName));
    toast.success("Welcome Back " + formValues.userName);
    console.log("added new user");
  }

  // add new budget
  if (
    _action === "addNewBudget" &&
    formValues.budgetName &&
    formValues.budgetAmount
  ) {
    createBudget(formValues.budgetName, formValues.budgetAmount);
    console.log("added new budget");
    return toast.success(
      `added new ${formValues.budgetName} budget, ${formValues.budgetAmount}$`
    );
  }

  // add new expense
  if (
    _action === "addNewExpense" &&
    formValues.expenseName &&
    formValues.expenseAmount
  ) {
    console.log("add new expense", formValues);
    createNewExpense(
      formValues.expenseName,
      formValues.expenseAmount,
      formValues.budgetId
    );
  } else {
    toast.warn("please filled the required fields.");
  }
  return null;
};
