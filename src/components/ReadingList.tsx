import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { IProduct } from "../Types/globalTypes";
import { deleteFromList } from "../redux/readList/listSlice";
import { useDeleteFromDBListMutation } from "../redux/readList/apiList";
const ReadingList = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { products } = useAppSelector((state) => state.list);
  const { email } = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const handleSideBar = () => {
    setShowSidebar(!showSidebar);
  };
  const [deleteFromDB] = useDeleteFromDBListMutation();
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);
  const handleClickOutside = (e: MouseEvent) => {
    if (!ref?.current?.contains(e.target as Node)) {
      setShowSidebar(false);
    }
  };
  if (!products) {
    return "";
  }
  const handleDelete = (product: IProduct) => {
    deleteFromDB({ email, id: product._id });
    dispatch(deleteFromList(product));
  };

  return (
    <>
      <li>
        <button
          onClick={() => handleSideBar()}
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white"
        >
          <BsCardChecklist
            size="30"
            className={`${products?.length > 0 ? "text-red-500" : ""}`}
          />{" "}
          <span className="sr-only">Notifications</span>
          {products?.length > 0 && (
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              {products?.length > 0 ? products?.length : ""}
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
          <h1 className="text-2xl text-center">Reading list</h1>
        </div>
        <div className="flex flex-col w-[95%] mx-auto">
          {products.map((product, i) => (
            <div
              key={i}
              className={`grid grid-cols-12 items-center ${
                product.finished && "bg-green-500"
              } shadow-lg mt-3 rounded-lg p-3`}
            >
              <div className="col-span-2">
                <img src={product.image} className="rounded-lg" />
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
              <div className="flex flex-col col-span-2">
                {!product.finished && (
                  <button
                    onClick={() => handleDelete(product)}
                    className={`flex justify-center rounded-lg items-center shadow-lg py-2`}
                  >
                    Complete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReadingList;
