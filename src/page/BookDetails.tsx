import React from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
const BookDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div className="max-w-screen-xl  mx-auto">
        <div className=" min-h-screen  grid grid-cols-1 md:grid-cols-2 content-center text-gray-200 mt-6">
          <div>
            <img src="https://i.ibb.co/LzyywS0/arfat-rahman.jpg" alt="" />
          </div>

          <div className="grid content-center md:ml-6">
            <div className="text-lg mt-4">
              <strong>Title: </strong> Arfatur Rahman
            </div>
            <div className="text-lg mt-4">
              <strong>Author: </strong> Arfatur Rahman
            </div>
            <div className="text-lg mt-4">
              <strong>Genre: </strong> Arfatur Rahman
            </div>
            <div className="text-lg mt-4">
              <strong>Publication date: </strong> Arfatur Rahman
            </div>
            <div className="text-lg mt-4">
              <strong>Reviews: </strong> Arfatur Rahman
            </div>
            <Link
              to={"/"}
              className="flex items-center justify-center w-80 mt-6 rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <AiOutlineShoppingCart />{" "}
              <span className="pl-3">Add to cart</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
