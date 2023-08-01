import { Outlet } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { getUser } from "./redux/user/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase";
import { useGetfromDbListQuery } from "./redux/readList/apiList";
import { getList } from "./redux/readList/listSlice";
import { useGetfromDbCartQuery } from "./redux/cart/apiCart";
import { getCart } from "./redux/cart/cartSlice";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((state) => state.user.user);
  const { data, isLoading } = useGetfromDbListQuery(email, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  const { data: cart, isLoading: isCartLoading } = useGetfromDbCartQuery(
    email,
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    }
  );
  cart && dispatch(getCart(cart?.data));
  data && dispatch(getList(data?.data));
  if (isLoading && isCartLoading) "Loading...";

  useEffect(() => {
    onAuthStateChanged(auth, (user) => dispatch(getUser(user?.email)));
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      <div className=" bg-slate-800">
        {!email && (
          <div className="bg-gray-900 text-red-200 text-xl text-center">
            <span>Add list available when you're login as user</span>
          </div>
        )}
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
