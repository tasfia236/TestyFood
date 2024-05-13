
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Auth/SignUp";
import LogIn from "../pages/Auth/LogIn";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import FoodDetails from "../pages/FoodDeatails/FoodDetails";
import AddFood from "../pages/AddFood/AddFood";
import ManageFood from "../pages/ManageFood/ManageFood";
import UpdateFood from "../pages/UpdateFood/UpdateFood";

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
        },
        {
          path: "/details/:id",
          element: <FoodDetails></FoodDetails>,
          loader: ({params}) => fetch(`http://localhost:8000/foods/${params.id}`)
        },
        {
          path: "/addfood",
          element: <AddFood></AddFood>
        },
        {
          path: "/managefood",
          element: <ManageFood></ManageFood>
        },
        {
          path: "/updatefood/:id",
          element: <UpdateFood></UpdateFood>,
          loader: ({params}) => fetch(`http://localhost:8000/foods/${params.id}`)
        }
      ]
    },
  ]);

export default Routes;