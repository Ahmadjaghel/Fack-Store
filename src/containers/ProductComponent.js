import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {products.map((product) => {
        return (
          <Link to={`/project/${product.id}`} key={product.id}>
            <div className=" max-w-sm mx-[10%] sm:mx-0 h-full  bg-white border hover:-translate-y-1 transition-transform border-gray-200 rounded-lg shadow">
              <div className="p-2 flex justify-center shadow-md">
                {" "}
                <img
                  className=" h-[200px]"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="text-sm p-2 flex flex-col justify-between ">
                <div className=" mb-1 text-md font-bold text-gray-900">
                  {product.title}
                </div>
                <div className="mb-1 text-md font-bold text-gray-900">
                  ${product.price}
                </div>
                <div className=" text-zinc-500">{product.category}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductComponent;
