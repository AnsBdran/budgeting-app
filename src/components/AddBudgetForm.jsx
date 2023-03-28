import React from "react";
import { Form } from "react-router-dom";
import Button from "./Button";
import InputField from "./InputField";
import { H2 } from "./Typography";
import { HiCurrencyDollar } from "react-icons/hi";

const AddBudgetForm = () => {
  return (
    <section className="my-4">
      <H2>Create Budget</H2>
      <Form method="post">
        <InputField label="Budget name" name="budgetName" />
        <InputField label="Amount" name="budgetAmount" />
        <input type="hidden" name="_action" value="addNewBudget" />
        <Button>
          Add Budget <HiCurrencyDollar size={20} />
        </Button>
      </Form>
    </section>
  );
};

export default AddBudgetForm;
