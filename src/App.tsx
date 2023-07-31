import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { getUser } from "./redux/user/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase";
import { useGetfromDbListQuery } from "./redux/readList/apiList";
import { getList } from "./redux/readList/listSlice";

function App() {
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((state) => state.user.user);
  const { data, isLoading } = useGetfromDbListQuery(email, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  console.log(data);
  data && dispatch(getList(data?.data));
  if (isLoading) "Loading...";

  useEffect(() => {
    onAuthStateChanged(auth, (user) => dispatch(getUser(user?.email)));
  }, [dispatch]);
  return (
    <>
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
