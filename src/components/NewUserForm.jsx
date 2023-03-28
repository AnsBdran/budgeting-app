import { Form } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import Button from "./Button";
import InputField from "./InputField";

const NewUserForm = () => {
  return (
    <Form method="post" className="mt-3">
      <InputField name="userName" placeholder="Your name..." />
      <input type="hidden" name="_action" value="addNewUser" />
      <Button className="" onClick={() => console.log("hi")} type="submit">
        Add user
        <FaUserPlus />
      </Button>
    </Form>
  );
};

export default NewUserForm;
