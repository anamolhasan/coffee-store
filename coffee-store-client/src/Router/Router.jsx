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


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://coffee-store-server-lac-two-97.vercel.app/coffees"),
        hydrateFallbackElement: <p>loading.......</p>,
        Component: Home,
      },
      {
        path: "addCoffee",
        Component: AddCoffee,
      },
      {
        path: "coffee/:id",
        Component: CoffeeDetails,
      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-lac-two-97.vercel.app/coffees/${params.id}`
          ),
        Component: UpdateCoffee,
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
        loader: () =>
          fetch("https://coffee-store-server-lac-two-97.vercel.app/users"),
        Component: Users,
      },
      {
        path: "users2",
        Component: Users2,
      },
    ],
  },
]);

export default router