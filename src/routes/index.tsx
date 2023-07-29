import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Signup from "../page/Signup";
import Signin from "../page/Signin";
import AddNewBook from "../page/AddNewBook";
import BookDetails from "../page/BookDetails";
import EditBook from "../page/EditBook";
import Products from "../page/Products";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "/update-book/:id",
        element: <EditBook />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/add-new-book",
        element: <AddNewBook />,
      },
    ],
  },
]);
export default routers;
