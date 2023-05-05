import {deleteItem} from "../utils/helpers.js";
import {redirect} from "react-router-dom";

export const logout = () => {
    deleteItem("userName")
    deleteItem("budgets");
    deleteItem("expenses")
   return redirect('/')
}