import { useLocation, useSearchParams } from "react-router-dom";
import { IProduct } from "../Types/globalTypes";
import { useGetAllProductsQuery } from "../redux/api/apiSlice";
import SingleProduct from "./SingleProduct";
import { useState, useEffect } from "react";

const ProductSection = ({ heading }: { heading: null | string }) => {
  // const products = [
  //   1, 2, 3, 4, 5, 56, 7, 7, 98, 9, 0, 0, 63, 3, 5, 78, 3, 9, 64, 2,
  // ];
  // const products: IProduct[] = [
  //   {
  //     _id: "1",
  //     addBy: "arfatrahman08@gmail.com",
  //     title: "A great book 1",
  //     author: "No jani",
  //     genre: "fiction",

  //     image:
  //       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  //     publication_date: "2023-6-22",
  //   },
  //   {
  //     _id: "2",
  //     addBy: "arfatrahman08@gmail.com",
  //     title: "A great book 2",
  //     author: "No jani",
  //     genre: "fiction",

  //     image:
  //       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  //     publication_date: "2023-6-22",
  //   },
  //   {
  //     _id: "3",
  //     addBy: "arfatrahman08@gmail.com",
  //     title: "A great book 3",
  //     author: "No jani",
  //     genre: "fiction",

  //     image:
  //       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  //     publication_date: "2023-6-22",
  //   },
  //   {
  //     _id: "4",
  //     addBy: "arfatrahman08@gmail.com",
  //     title: "A great book 4",
  //     author: "No jani",
  //     genre: "fiction",

  //     image:
  //       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  //     publication_date: "2023-6-22",
  //   },
  //   {
  //     _id: "5",
  //     addBy: "arfatrahman08@gmail.com",
  //     title: "A great book 5",
  //     author: "No jani",
  //     genre: "fiction",

  //     image:
  //       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  //     publication_date: "2023-6-22",
  //   },
  //   {
  //     _id: "6",
  //     addBy: "arfatrahman08@gmail.com",
  //     title: "A great book 6",
  //     author: "No jani",
  //     genre: "fiction",

  //     image:
  //       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  //     publication_date: "2023-6-22",
  //   },
  //   {
  //     _id: "7",
  //     addBy: "arfatrahman08@gmail.com",
  //     title: "A great book 7",
  //     author: "No jani",
  //     genre: "fiction",

  //     image:
  //       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  //     publication_date: "2023-6-22",
  //   },
  //   {
  //     _id: "8",
  //     addBy: "arfatrahman08@gmail.com",
  //     title: "A great book 8",
  //     author: "No jani",
  //     genre: "fiction",

  //     image:
  //       "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  //     publication_date: "2023-6-22",
  //   },
  // ];

  const [products, setProducts] = useState([]);
  let limit: number;
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  let search = searchParams.get("search");
  if (!search) {
    search = "";
  }
  if (pathname === "/") {
    limit = 10;
  } else {
    limit = 999;
  }

  const { data, isLoading } = useGetAllProductsQuery({ limit, search });
  useEffect(() => {
    if (data) setProducts(data.data);
  }, [data]);
  if (isLoading) "loading";
  return (
    <>
      <h1 className="text-gray-200 text-3xl md:text-6xl text-center mt-6">
        {heading ? heading : "Products"}
      </h1>
      <div className="grid lg:grid-cols-4 py-5 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-9 mx-auto justify-items-center mt-7">
        {products.map((product: IProduct, i) => (
          <SingleProduct key={i} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductSection;
