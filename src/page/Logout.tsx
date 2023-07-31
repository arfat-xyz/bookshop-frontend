import { signOut } from "firebase/auth";
import auth from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hook";
import { getUser } from "../redux/user/userSlice";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const signinOut = async () => {
    await signOut(auth);
    dispatch(getUser(null));
    navigate("/");
  };
  signinOut();
  return <>Redirecting...</>;
};

export default Logout;
