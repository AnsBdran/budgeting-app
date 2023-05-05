import React from "react";
import { Form } from "react-router-dom";
import Button from "./Button";
import InputField from "./InputField";
// import { H2 } from "./LayoutElements";
import { HiCurrencyDollar } from "react-icons/hi";
import {H2} from "./Typography.jsx";
import {Section} from "./LayoutElements.jsx";

const AddBudgetForm = () => {
  const color = "indigo";
  return (
    <Section color={color}>
      <H2 >Create Budget</H2>
      <Form method="post">
        <InputField label="Budget name" color={color} name="budgetName" />
        <InputField
          label="Amount"
          color={color}
          name="budgetAmount"
          type="number"
        />
        <input type="hidden" name="_action" value="addNewBudget" />
        <Button color={color}>
          Add Budget <HiCurrencyDollar size={20} />
        </Button>
      </Form>
    </Section>
  );
};

export default AddBudgetForm;
