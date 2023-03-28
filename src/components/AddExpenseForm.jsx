import React from "react";
import { Form } from "react-router-dom";
import InputField from "./InputField";
import { H2 } from "./Typography";

const AddExpenseForm = ({ budgets }) => {
  const budgetsOptions = budgets.map((budget) => (
    <option key={budget.id}>{budget.name}</option>
  ));
  return (
    <section className="mt-12">
      <H2>Add new expense</H2>
      <Form>
        <InputField label="Expense name" />
        <InputField label="amount" />
        <label htmlFor="newExpenseBudget">Budget category</label>
        <select name="newExpenseBudget" id="newExpenseBudget">
          {budgetsOptions}
        </select>
      </Form>
    </section>
  );
};
export default AddExpenseForm;
