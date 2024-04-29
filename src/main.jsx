import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Root';
import Home from './assets/Components/Home';
import AddCoffee from './assets/Components/AddCoffee';
import UpdateCoffee from './assets/Components/UpdateCoffee';
import CoffeeDetails from './assets/Components/CoffeeDetails';
import Error from './assets/Components/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=>fetch('http://localhost:5000/coffee')
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "/coffeeDetails/:id",
        element: <CoffeeDetails/>,
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);