import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { IProduct } from "../Types/globalTypes";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { addToCart } from "../redux/cart/cartSlice";
import { BsCardChecklist } from "react-icons/bs";
// import { addToList } from "../redux/readList/listSlice";
import { useAddToDbListMutation } from "../redux/readList/apiList";
const SingleProduct = ({ product }: { product: IProduct }) => {
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((state) => state.user.user);
  const [value] = useAddToDbListMutation();
  const handleAddToWishlist = () => {
    dispatch(addToCart(product));
  };
  const handleAddToReadlist = () => {
    // dispatch(addToList(product));
    value({ email, id: product._id },);
  };
  return (
    <>
      <div className={`w-[240px]  rounded-2xl`}>
        <div
          className={`flex w-fullfirst-letter:max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md`}
        >
          <Link
            className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
            to={"/"}
          >
            <img className="w-full" src={product.image} alt="product image" />
          </Link>
          <div className="mt-4 px-5 pb-5">
            <Link to={`/book/${product._id}`}>
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
            {email && (
              <>
                <button
                  onClick={handleAddToWishlist}
                  className="w-full flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <AiFillHeart /> <span className="pl-3">Add to wishlist</span>
                </button>
                <button
                  onClick={handleAddToReadlist}
                  className="w-full flex items-center mt-5 justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <BsCardChecklist />{" "}
                  <span className="pl-3">Add to readlist</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
