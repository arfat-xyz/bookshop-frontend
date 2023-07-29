import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { IProduct } from "../Types/globalTypes";
import { useAppDispatch } from "../redux/hook";
import { addToCart } from "../redux/cart/cartSlice";
const SingleProduct = ({ product }: { product: IProduct }) => {
  const { ref, inView } = useInView();
  const dispatch = useAppDispatch();
  const handleClick = () => {
    console.log(product);
    dispatch(addToCart(product));
  };
  return (
    <>
      <div
        ref={ref}
        className={`w-[240px] ${
          inView && "animate-fadeIn"
        } border-2 rounded-2xl`}
      >
        <div
          className={`flex w-full ${
            inView && `animate-fadeInUp animate-slow`
          }  first-letter:max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md`}
        >
          <Link
            className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
            to={"/"}
          >
            <img
              className="object-cover"
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="product image"
            />
          </Link>
          <div className="mt-4 px-5 pb-5">
            <Link to={"/book/arfat"}>
              <h5 className="text-xl font-bold tracking-tight text-slate-900">
                {product.title}
              </h5>
            </Link>
            <div className="my-2 flex items-center justify-between">
              <p>Author : {product.author}</p>
            </div>
            <div className="my-2 flex items-center justify-between">
              <p>Genre : {product.genre}</p>
            </div>
            <div className="my-2 flex items-center justify-between">
              <p>Publish : {product.publication_date}</p>
            </div>
            <button
              onClick={handleClick}
              className="w-full flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <AiFillHeart /> <span className="pl-3">Add to wishlist</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
