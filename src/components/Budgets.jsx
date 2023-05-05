import React from "react";
import BudgetItem from "./BudgetItem.jsx";
import {H2} from "./Typography.jsx";

function Budgets({ budgets }) {
  // console.log(budgets);
  return (
    <section>
      <H2 className="">Budgets goes here</H2>
      <div>
        {budgets &&
          budgets.map((budg) => <BudgetItem budget={budg} key={budg.id} />)}
      </div>
    </section>
  );
}

export default Budgets;
