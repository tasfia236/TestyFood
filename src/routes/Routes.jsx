
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
import RequestFood from "../pages/RequestFood/RequestFood";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <PrivateRoutes><FoodDetails></FoodDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:8000/foods/${params.id}`)
        },
        {
          path: "/addfood",
          element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>
        },
        {
          path: "/managefood",
          element: <PrivateRoutes><ManageFood></ManageFood></PrivateRoutes>
        },
        {
          path: "/updatefood/:id",
          element: <PrivateRoutes><UpdateFood></UpdateFood></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:8000/foods/${params.id}`)
        },
        {
          path: "/reqfood/",
          element: <PrivateRoutes><RequestFood></RequestFood></PrivateRoutes>
        }
      ]
    },
  ]);

export default Routes;