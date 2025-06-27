import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/Coffees/AddCoffee";
import CoffeeDetails from "../pages/Coffees/CoffeeDetails";
import UpdateCoffee from "../pages/Coffees/UpdateCoffee";
import Signin from "../pages/Register/Signin";
import SignUp from "../pages/Register/SignUp";
import Users from "../pages/AllUser/Users";
import Users2 from "../pages/AllUser/Users2";
import Loading from "../components/Loading";

import MyAddedCoffee from "../pages/Coffees/MyAddedCoffee";
import axios from "axios";
import PrivateRouter from "../contexts/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => axios(`${import.meta.env.VITE_API_URL}/coffees`),
        hydrateFallbackElement: <Loading />,
        Component: Home,
      },
      {
        path: "addCoffee",
        element: (
          <PrivateRouter>
            <AddCoffee />
          </PrivateRouter>
        ),
      },
      {
        path: "coffee/:id",
        loader: ({ params }) =>
          axios(`${import.meta.env.VITE_API_URL}/coffee/${params.id}`),
        element: (
          <PrivateRouter>
            <CoffeeDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "updateCoffee/:id",

        element: (
          <PrivateRouter>
            <UpdateCoffee />
          </PrivateRouter>
        ),
      },
      {
        path: "my-added-coffees/:email",
        loader: ({ params }) =>
          axios(`${import.meta.env.VITE_API_URL}/my-coffee/${params.email}`),
        hydrateFallbackElement: <Loading />,
        element: (
          <PrivateRouter>
            <MyAddedCoffee />
          </PrivateRouter>
        ),
      },
      {
        path: "signin",
        Component: Signin,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "users",

        Component: Users,
      },
      {
        path: "users2",
        Component: Users2,
      },
    ],
  },
]);

export default router;
