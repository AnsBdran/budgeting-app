import React, { useEffect, useState } from "react";
import { calcSpentAmount, getRandomColor } from "../utils/helpers.js";
import Button from "./Button.jsx";
import { Form, Link } from "react-router-dom";
import { BudgetSection, Section } from "./LayoutElements.jsx";
import Progress from "./Progress.jsx";

const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount } = budget;
  const spent = calcSpentAmount(id);
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(getRandomColor());
    console.log("useEffect", color);
  }, []);

  console.log("outside effect", color);
  const progress = spent ? spent / amount : 0;

  return (
    <BudgetSection color={color}>
      <h3 className="text-xl capitalize flex justify-between">
        <span>{name}</span>
        <span>{amount}</span>
      </h3>
      {/*       <progress
        max={amount}
        value={spent}
        className="block w-full h-6 rounded bg-blue-200 border border-blue-500"
      /> */}
      <Progress color={color} progress={progress} />
      <p className="flex justify-between">
        <span>total spent: {spent}</span>
        <span>remaining: {amount - spent}</span>
      </p>
      {showDelete ? (
        <Form>
          <Button>Delete</Button>
        </Form>
      ) : (
        <Button className="m-auto" color={color}>
          <Link to={`budget/${id}`}>view details</Link>
        </Button>
      )}
    </BudgetSection>
  );
};

export default BudgetItem;
