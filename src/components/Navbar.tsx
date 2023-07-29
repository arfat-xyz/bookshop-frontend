import { Link } from "react-router-dom";
import logo from "/amazing.png";
import { useState } from "react";
import Cart from "./Cart";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className=" border-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"} className="flex items-center">
            <img className="w-auto h-16 mr-2" src={logo} alt="logo" />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/products"}
                  className="block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to={"/signin"}
                  className="block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to={"/signup"}
                  className="block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to={"/add-new-book"}
                  className="block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Add New
                </Link>
              </li>
              <li>
                <Link
                  to={"/logout"}
                  className="block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Logout
                </Link>
              </li>
              <Cart />
            </ul>
          </div>
          <div
            className={`md:hidden w-full ${
              showMenu ? "block" : "hidden"
            } md:w-auto" id="navbar-default`}
          >
            <ul className="font-medium flex flex-col justify-center p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white bg-gray-800 border-gray-700">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/products"}
                  className="block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to={"/signin"}
                  className="block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to={"/signup"}
                  className="block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to={"/add-new-book"}
                  className="block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Add New
                </Link>
              </li>
              <li>
                <Link
                  to={"/logout"}
                  className="block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Logout
                </Link>
              </li>
              <Cart />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
