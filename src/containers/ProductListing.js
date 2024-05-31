import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";
const ProductListing = () => {
  const dispatch = useDispatch();
  const fetchProjects = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console("Err", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div className="container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
