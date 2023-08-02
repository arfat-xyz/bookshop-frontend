import { useLocation, useSearchParams } from "react-router-dom";
import { IProduct } from "../Types/globalTypes";
import { useGetAllProductsQuery } from "../redux/api/apiSlice";
import SingleProduct from "./SingleProduct";
import { useState, useEffect, ChangeEvent } from "react";

const ProductSection = ({ heading }: { heading: null | string }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [genre, setGenre] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string[]>([]);
  const [year, setYear] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<number[]>([]);
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
    if (data) {
      setProducts(data?.data);
      const temp: string[] = data?.data?.map((pro: IProduct) => pro?.genre);
      const uniqueGenre = new Set(temp);
      setGenre([...uniqueGenre]);

      // for year
      const temp2: number[] = data?.data
        ?.map((pro: IProduct) => {
          const itemDate = new Date(pro.publication_date);
          return itemDate.getFullYear();
        })
        .sort((a: number, b: number) => a - b);
      const temp3: string[] = temp2.map((n: number) => n.toString());
      const uniqueYear = new Set(temp3);
      setYear([...uniqueYear]);
      if (selectedYear.length > 0 && selectedGenre.length > 0) {
        setProducts(
          data?.data?.filter((book: IProduct) => {
            const itemDate: number = new Date(
              book.publication_date
            ).getFullYear();

            return (
              selectedYear.includes(itemDate) &&
              selectedGenre.includes(book.genre)
            );
          })
        );
      } else if (selectedGenre.length > 0) {
        const x = data.data.filter((book: IProduct) =>
          selectedGenre.includes(book.genre)
        );
        setProducts(x);
      } else if (selectedYear.length > 0) {
        setProducts(
          data?.data?.filter((book: IProduct) => {
            const itemDate: number = new Date(
              book.publication_date
            ).getFullYear();

            if (selectedYear.includes(itemDate)) {
              return book;
            }
          })
        );
      } else {
        setProducts(data?.data);
      }
    }
  }, [data, selectedGenre, selectedYear]);
  if (isLoading) "loading";
  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    if (!selectedGenre.includes(e.target.value)) {
      setSelectedGenre([...selectedGenre, e.target.value]);
    } else {
      setSelectedGenre(selectedGenre.filter((g) => g !== e.target.value));
    }
  };
  const handleSubmitYear = (e: ChangeEvent<HTMLInputElement>) => {
    if (!selectedYear.includes(Number(e.target.value))) {
      setSelectedYear([...selectedYear, Number(e.target.value)]);
    } else {
      setSelectedYear(selectedYear.filter((g) => g !== Number(e.target.value)));
    }
  };
  return (
    <>
      <h1 className="text-gray-200 text-3xl md:text-6xl text-center mt-6">
        {heading ? heading : "Products"}
      </h1>
      <div className="grid md:grid-cols-2 mt-5">
        <div>
          <h4 className="text-xl text-gray-200 mb-4 font-bold">Genre filter</h4>
          {genre &&
            genre?.map((g, i) => (
              <div key={i}>
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value={g}
                    onChange={handleSubmit}
                  />
                  <label className="inline-block text-gray-200 pl-[0.15rem] hover:cursor-pointer">
                    {g}
                  </label>
                </div>
              </div>
            ))}
        </div>
        <div>
          <h4 className="text-xl text-gray-200 mb-4 font-bold">Year filter</h4>
          {year &&
            year?.map((g, i) => (
              <div key={i}>
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value={g}
                    onChange={handleSubmitYear}
                  />
                  <label className="inline-block text-gray-200 pl-[0.15rem] hover:cursor-pointer">
                    {g}
                  </label>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-4 py-5 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-9 mx-auto justify-items-center mt-7">
        {products?.map((product: IProduct, i) => (
          <SingleProduct key={i} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductSection;
