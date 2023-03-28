import {AiOutlineHome} from "react-icons/ai";
import Button from "./Button";
import {Form, useLoaderData} from "react-router-dom";

const Header = ({userName}) => {
    console.log("header username is", userName)
    return (
        <header className="p-2 bg-slate-100 flex justify-between">
            <div className="flex items-center gap-[2px] text-sky-600 text-2xl ">
                <AiOutlineHome className=""/>
                <span className="font-semibold">HomeBudget</span>
            </div>
            {userName &&
                <Form method="post" action="logout">
                    <Button primary>Log out</Button>
                </Form>
            }
        </header>
    );
};

export default Header;
