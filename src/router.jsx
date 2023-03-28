import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout, {mainLoader} from "./layouts/Main";
import Error404 from "./pages/404";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import {logout} from "./actions/logout.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<Error404 />} loader={mainLoader}>
      <Route
        index
        element={<Dashboard />}
        loader={dashboardLoader}
        action={dashboardAction}
      />
        <Route path="logout" action={logout}/>
    </Route>
  )
);

const Router = ({ children }) => (
  <RouterProvider router={router}>{children}</RouterProvider>
);

export default Router;
