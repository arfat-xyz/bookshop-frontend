import SingleProduct from "../SingleProduct";

const ProductSection = () => {
  const products = [
    1, 2, 3, 4, 5, 56, 7, 7, 98, 9, 0, 0, 63, 3, 5, 78, 3, 9, 64, 2,
  ];
  return (
    <div className="grid lg:grid-cols-4 py-5 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-9 mx-auto justify-items-center mt-7">
      {products.map((product, i) => (
        <SingleProduct key={i} product={product} />
      ))}
    </div>
  );
};

export default ProductSection;
