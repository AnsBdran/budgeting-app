import React from "react";
import {Link, useNavigate, useRouteError} from "react-router-dom";
import Button from "../components/Button";

const Error404 = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    console.log(" the error is", error);
    return (
        <main className="p-4">
            <div>
                <h1>You have reached the error page, CONGRATULATIONS!</h1>
                <p>{error.message}</p>
            </div>
            <div className="flex gap-4 mt-4">
                <Button onClick={() => navigate(-1)}>Go back</Button>
                <Button>
                    <Link to="/">Go Home</Link>
                </Button>
            </div>
        </main>
    );
};

export default Error404;
