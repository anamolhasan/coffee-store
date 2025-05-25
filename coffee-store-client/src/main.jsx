import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import Signin from "./components/Signin.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Users from "./components/Users.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Users2 from "./components/Users2.jsx";

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

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
