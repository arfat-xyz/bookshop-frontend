"use client";

import { useForm } from "react-hook-form";
import logo from "/amazing.png";
import { Link } from "react-router-dom";
type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};
const Signin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const { email, password } = watch();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <>
      <section className="bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[95vh] lg:py-0">
          <Link
            to={"/"}
            className="flex items-center mb-6 text-2xl font-semibold text-white"
          >
            <img className="w-auto h-36 mr-2" src={logo} alt="logo" />
          </Link>
          <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8"> 
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium   text-white"
                  >
                    Your email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    id="email"
                    className="  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <span className="bg-red-700">{errors.email.message}</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium   text-white"
                  >
                    Password
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500"
                  />
                  {errors.password && (
                    <span className="bg-red-700">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full border-2 hover:border-stone-500 transition-all ease-in-out text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-primary-600  hover:bg-primary-700  focus:ring-primary-800"
                  disabled={!email || !password}
                >
                  Sign up
                </button>
                <p className="text-sm font-light   text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to={"/signup"}
                    className="font-medium text-primary-600 hover:underline  text-primary-500"
                  >
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
