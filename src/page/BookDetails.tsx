import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { useGetSingleProductQuery } from "../redux/api/apiSlice";
import { IProduct } from "../Types/globalTypes";
import { addToList } from "../redux/readList/listSlice";
import { addToCart } from "../redux/cart/cartSlice";
import { BsCardChecklist } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useDeletePorductsMutation } from "../redux/book/bookApi";
import SingleProductReviews from "../components/SingleProductReviews";
const BookDetails = () => {
  const [product, setProduct] = useState<IProduct>();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const { email } = useAppSelector((state) => state.user.user);
  useEffect(() => {
    setProduct(data?.data as IProduct);
  }, [data]);
  const dispatch = useAppDispatch();
  const handleAddToWishlist = () => {
    product && dispatch(addToCart(product));
  };
  const [deleteBook] = useDeletePorductsMutation();
  const handleAddToReadlist = () => {
    product && dispatch(addToList(product));
  };
  const handleDelete = () => {
    const confirm = window.confirm("Are you sure to delete this?");
    if (confirm) {
      deleteBook(product?._id);
      navigate("/");
    }
  };
  const handleEdit = () => {
    navigate(`/update-book/${product?._id}`);
  };
  if (isLoading) return "Loading...";
  return (
    <>
      <div className="max-w-screen-xl  mx-auto">
        <div className=" min-h-screen  grid grid-cols-1 md:grid-cols-2 content-center text-gray-200 mt-6">
          <div>
            <img src={product?.image} alt="" />
          </div>

          <div className="grid content-center md:ml-6">
            <div className="text-lg mt-4">
              <strong>Title: </strong> {product?.title}
            </div>
            <div className="text-lg mt-4">
              <strong>Author: </strong> {product?.author}
            </div>
            <div className="text-lg mt-4">
              <strong>Genre: </strong> {product?.genre}
            </div>
            <div className="text-lg mt-4">
              <strong>Publication date: </strong> {product?.publication_date}
            </div>
            <div className="text-lg mt-4">
              <strong>Reviews: </strong> {product?.reviews?.length}
            </div>

            {product && product.reviews && product._id && (
              <SingleProductReviews
                reviews={product?.reviews}
                id={product?._id}
              />
            )}
            {email && (
              <>
                {" "}
                <button
                  onClick={handleAddToWishlist}
                  className="w-full flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <AiFillHeart /> <span className="pl-3">Add to wishlist</span>
                </button>
                <button
                  onClick={() => handleAddToReadlist()}
                  className="w-full flex items-center mt-5 justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <BsCardChecklist />{" "}
                  <span className="pl-3">Add to readlist</span>
                </button>
              </>
            )}
            {email === product?.addBy && (
              <>
                <button
                  onClick={handleEdit}
                  className="w-full flex items-center mt-5 justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <AiFillHeart /> <span className="pl-3">Edit</span>
                </button>
                <button
                  onClick={handleDelete}
                  className="w-full flex items-center mt-5 justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <AiFillHeart /> <span className="pl-3">Delete</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
