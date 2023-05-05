import React from "react";
import {Form} from "react-router-dom";
import InputField from "./InputField";
import Button from "./Button.jsx";
import {H2} from "./Typography.jsx";
import {Section} from "./LayoutElements.jsx";

const AddExpenseForm = ({budgets}) => {

    const color = "green";
    const budgetsOptions =
        budgets &&
        budgets.map((budget) => (
            <option key={budget.id} value={budget.id}>
                {budget.name}
            </option>
        ));

    return (
        <Section color={color}>
            <H2>Add new expense</H2>
            <Form method="post">
                <InputField color={color} label="Expense name" name="expenseName"/>
                <InputField color={color} label="amount" name="expenseAmount" type="number"/>
                <div hidden={budgets.length === 1}>
                    <label htmlFor="newExpenseBudget">Budget category</label>
                    <select name="budgetId" className={`mb-3 bg-${color}-200`} id="newExpenseBudget">
                        {budgetsOptions}
                    </select>
                </div>
                <input type="hidden" name="_action" value="addNewExpense"/>
                <Button color={color} className={`hover:bg-${color}-900`}>Add expense</Button>
            </Form>
        </Section>
    );
};
export default AddExpenseForm;
