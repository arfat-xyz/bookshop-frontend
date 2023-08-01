"use client";

import { useForm } from "react-hook-form";
import logo from "/amazing.png";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../redux/api/apiSlice";
import { useAppSelector } from "../redux/hook";
import { useUpdatePorductsMutation } from "../redux/book/bookApi";
type FormData = {
  image: string;
  title: string;
  genre: string;
  author: string;
  publication_date: string;
};
const EditBook = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();
  const { id } = useParams();
  const { email } = useAppSelector((state) => state.user.user);
  const { data, isLoading } = useGetSingleProductQuery(id);
  isLoading && "loading";
  useEffect(() => {
    reset({
      image: data?.data?.image,
      author: data?.data?.author,
      title: data?.data?.title,
      genre: data?.data?.genre,
      publication_date: data?.data?.publication_date,
    });
  }, [data, reset]);
  const [updateProduct] = useUpdatePorductsMutation();
  const { image, title, genre, author, publication_date } = watch();
  const onSubmit = async (payload: FormData) => {
    const updated = await updateProduct({ id, payload });
    if ("data" in updated && updated.data?.data) {
      navigate("/");
    }
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
                    htmlFor="publication_date"
                    className="block mb-2 text-sm font-medium   text-white"
                  >
                    Publication Date
                  </label>
                  <input
                    {...register("publication_date", { required: true })}
                    type="date"
                    name="publication_date"
                    id="publispublication_datehed"
                    placeholder="Publication date"
                    className=" sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  focus:border-blue-500"
                  />
                  {errors.publication_date && (
                    <span className="bg-red-700">
                      {errors.publication_date.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full border-2 hover:border-stone-500 transition-all ease-in-out text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-primary-600  hover:bg-primary-700  focus:ring-primary-800"
                  disabled={
                    !image ||
                    !title ||
                    !genre ||
                    !publication_date ||
                    !author ||
                    email !== data.data.addBy
                  }
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
