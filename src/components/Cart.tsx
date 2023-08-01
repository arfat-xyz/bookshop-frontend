import { useEffect, useRef, useState } from "react";
import { AiFillHeart, AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { IProduct } from "../Types/globalTypes";
import { deleteFromCart } from "../redux/cart/cartSlice";
import { useDeleteFromDBCartMutation } from "../redux/cart/apiCart";
const Cart = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { products } = useAppSelector((state) => state.cart);
  const { email } = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const [deleteCartFromDB] = useDeleteFromDBCartMutation();
  const ref = useRef<HTMLDivElement>(null);
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
  const handleDelete = (product: IProduct) => {
    deleteCartFromDB({ email, id: product._id });
    dispatch(deleteFromCart(product));
  };
  return (
    <>
      <li>
        <button
          onClick={() => handleSideBar()}
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white"
        >
          <AiFillHeart
            size="30"
            className={`${products.length > 0 ? "text-red-500" : ""}`}
          />{" "}
          <span className="sr-only">Notifications</span>
          {products.length > 0 && (
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              {products.length > 0 ? products.length : ""}
            </div>
          )}
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
          <h1 className="text-2xl text-center">Wishlist</h1>
        </div>
        <div className="flex flex-col w-[95%] mx-auto">
          {products.map((product, i) => (
            <div
              key={i}
              className="grid grid-cols-12 items-center shadow-lg mt-3 rounded-lg p-3"
            >
              <div className="col-span-2">
                <img src={product.image} />
              </div>
              <div className="col-span-8 pl-8">
                <h5 className="text-2xl">{product.title}</h5>
                <p>
                  <strong>Author:</strong> {product.author}
                </p>
                <p>
                  <strong>Genre:</strong> {product.genre}
                </p>
                <p>
                  <strong>Publishe:</strong> {product.publication_date}
                </p>
              </div>
              <button
                onClick={() => handleDelete(product)}
                className="col-span-2 w-full h-full flex justify-center rounded-lg items-center bg-red-400"
              >
                <AiOutlineDelete size="30" className="text-red-600" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
