import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Signup from "../page/Signup";
import Signin from "../page/Signin";
import AddNewBook from "../page/AddNewBook";
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
