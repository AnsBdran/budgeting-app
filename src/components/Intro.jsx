import React from "react";
import { Form } from "react-router-dom";
import NewUserForm from "./NewUserForm";

const Intro = () => {
  return (
    <section>
      <div>
        <h1>
          Take control of <span>Your money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <NewUserForm />
      </div>
    </section>
  );
};

export default Intro;
