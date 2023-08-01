import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
type FormData = {
  search: string;
};
const SearchBox = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const handleSideBar = () => {
    setShowSidebar(!showSidebar);
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);
  const handleClickOutside = (e: MouseEvent) => {
    if (!ref?.current?.contains(e.target as Node)) {
      setShowSidebar(false);
    }
  };
  const onSubmit = (data: FormData) => {
    setShowSidebar(false);
    navigate(`/products?search=${data.search}`);
  };
  return (
    <>
      <li>
        <button
          onClick={() => handleSideBar()}
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white"
        >
          <AiOutlineSearch size="30" />
        </button>
      </li>

      {/* Sidebar started================================================ */}
      <div
        ref={ref}
        className={`fixed transition-all ease-out duration-700 ${
          showSidebar ? "right-0 top-0 z-10" : "-right-full md:-right-2/4"
        }  fixed w-full md:w-2/4 min-h-screen bg-slate-50`}
      >
        <div
          className="cursor-pointer flex justify-end m-4 text-right"
          onClick={() => setShowSidebar(false)}
        >
          <AiOutlineClose size="30" />
        </div>
        <div>
          <h1 className="text-2xl text-center">Search</h1>
        </div>
        <div className="flex flex-col w-[95%] mx-auto">
          {/* SEarchbox ============================================================= */}

          <form className="flex items-center" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <input
                type="text"
                {...register("search", { required: true })}
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search branch name..."
                required
              />
              {errors.search && (
                <span className="bg-red-700">{errors.search.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <AiOutlineSearch />
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
