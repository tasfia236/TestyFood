
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Auth/SignUp";
import LogIn from "../pages/Auth/LogIn";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/login",
            element: <LogIn></LogIn>
        },
        {
          path: "/availablefood",
          element: <AvailableFoods></AvailableFoods>
        }
      ]
    },
  ]);

export default Routes;