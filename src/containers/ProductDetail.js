import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  console.log(product);
  const dispatch = useDispatch();
  const id = useParams().projectId;
  const fetchProject = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console("Err", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    fetchProject();
    dispatch(removeSelectedProduct());
  }, [id]);

  return (
    <div className="container flex justify-center">
      {Object.keys(product).length !== 0 ? (
        <div className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl">
          <img
            className=" object-contain m-3 w-full  rounded-t-lg h-96 md:h-auto md:max-w-80 md:rounded-none md:rounded-s-lg"
            src={product.image}
            alt=""
          />
          <div className="flex flex-col gap-4 justify-start  shadow-md  px-7   py-4 leading-normal">
            <div className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
              {product.title}
            </div>
            <div className=" bg-teal-500 w-20 p-2 flex justify-center -skew-x-12 rounded-sm shadow-md  text-white ">
              ${product.price}
            </div>
            <div className=" bg-slate-100 p-2 text-orange-800 shadow-sm ">
              {product.category}
            </div>
            <div className=" text-gray-500 text-sm">{product.description}</div>
            <button className=" bg-red-500 w-36 flex justify-center text-white p-2 font-bold hover:bg-red-600">
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <div>loading data....</div>
      )}
    </div>
  );
};

export default ProductDetail;
