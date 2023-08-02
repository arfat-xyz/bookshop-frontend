import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const { email } = useAppSelector((state) => state.user.user);
  return (
    <>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to={"/"} className="flex items-center mb-4 sm:mb-0">
              <img
                src="/amazing.png"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to={"/"} className="mr-4 hover:underline md:mr-6 ">
                  Home
                </Link>
              </li>
              {!email ? (
                <>
                  <li>
                    <Link
                      to={"/signin"}
                      className="mr-4 hover:underline md:mr-6 "
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/signup"}
                      className="mr-4 hover:underline md:mr-6 "
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to={"/add-new-book"}
                      className="mr-4 hover:underline md:mr-6 "
                    >
                      Add new book
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/logout"}
                      className="mr-4 hover:underline md:mr-6 "
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link
                  to={"https://github.com/arfat-xyz"}
                  className="mr-4 hover:underline md:mr-9 "
                >
                  <BsGithub size="30" />
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.linkedin.com/in/arfat-rahman/"}
                  className="mr-4 hover:underline md:mr-9 "
                >
                  <BsLinkedin size="30" />
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.facebook.com/arfat.xyz"}
                  className="mr-4 hover:underline md:mr-9 "
                >
                  <BsFacebook size="30" />
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <Link to={"https://arfat.xyz/"}>Arfat Rahman</Link>. All
            Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
