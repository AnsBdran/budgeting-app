import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import Button from "../components/Button";

const Error404 = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(" the error is", error);
  return (
    <div>
      <h1>You have reached the error page, CONGRATULATIONS!</h1>
      <div className="flex gap-4">
        <Button onClick={() => navigate(-1)}>Go back</Button>
        <Button>
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Error404;
