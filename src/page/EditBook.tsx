"use client";

import { useForm } from "react-hook-form";
import logo from "/amazing.png";
import { Link } from "react-router-dom";
type FormData = {
  image: string;
  title: string;
  genre: string;
  author: string;
  published: string;
};
const EditBook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const { image, title, genre, author, published } = watch();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <>
      <section className="bg-gray-900  md:min-h-screen px-6 py-8">
        <div className="flex flex-col items-center justify-center mx-auto lg:py-0">
          <Link
            to={"/"}
            className="flex items-center mb-6 text-2xl font-semibold text-white"
          >
            <img className="w-auto h-36 mr-2" src={logo} alt="logo" />
          </Link>
          <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                Update book
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium   text-white"
                  >
                    Image URL
                  </label>
                  <input
                    {...register("image", { required: true })}
                    type="text"
                    name="image"
                    id="image"
                    className="  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500"
                    placeholder="Image URL"
                  />
                  {errors.image && (
                    <span className="bg-red-700">{errors.image.message}</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium   text-white"
                  >
                    Book name
                  </label>
                  <input
                    {...register("title", { required: true })}
                    type="text"
                    name="title"
                    id="title"
                    className="  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500"
                    placeholder="Book Name"
                  />
                  {errors.title && (
                    <span className="bg-red-700">{errors.title.message}</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="author"
                    className="block mb-2 text-sm font-medium   text-white"
                  >
                    Author
                  </label>
                  <input
                    {...register("author", { required: true })}
                    type="text"
                    name="author"
                    id="author"
                    placeholder="Author name"
                    className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500"
                  />
                  {errors.author && (
                    <span className="bg-red-700">{errors.author.message}</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="genre"
                    className="block mb-2 text-sm font-medium   text-white"
                  >
                    Genre
                  </label>
                  <input
                    {...register("genre", { required: true })}
                    type="text"
                    name="genre"
                    id="genre"
                    placeholder="Genre"
                    className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500"
                  />
                  {errors.genre && (
                    <span className="bg-red-700">{errors.genre.message}</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="published"
                    className="block mb-2 text-sm font-medium   text-white"
                  >
                    Publication Date
                  </label>
                  <input
                    {...register("published", { required: true })}
                    type="date"
                    name="published"
                    id="published"
                    placeholder="Publication date"
                    className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500"
                  />
                  {errors.published && (
                    <span className="bg-red-700">
                      {errors.published.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full border-2 hover:border-stone-500 transition-all ease-in-out text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-primary-600  hover:bg-primary-700  focus:ring-primary-800"
                  disabled={!image || !title || !genre || !published || !author}
                >
                  Submit book
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditBook;
