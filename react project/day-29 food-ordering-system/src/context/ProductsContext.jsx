import { createContext, useEffect, useState } from "react";
import api from "../utils/axios";

export const ProductContextProvider = createContext();
const ProductsContext = ({ children }) => {

  const [allProducts, setAllProducts] = useState([])
  const [singleProduct, setsingleProduct] = useState(null)
  const createProducts = async (formData) => {
    try {
      const { data } = await api.post("/products", formData);
      console.log(data);
      setsingleProduct(data.data)
    } catch (error) {
      console.log(error);
    }
  };

  const EditProducts = async (formData, id) => {
    try {
      const { data } = await api.patch(`/products/${id}`, formData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProducts = async (id) => {
    try {
      const {data} = await api.delete(`/products/${id}`);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await api.get("/products");
        console.log(data);
        setAllProducts(data.data)
      } catch (error) {
        console.log(error);
      }
    };

    getAllProducts()
  }, [singleProduct]);

  return (
    <ProductContextProvider.Provider value={{ createProducts, allProducts, deleteProducts , EditProducts}}>
      {children}
    </ProductContextProvider.Provider>
  );
};

export default ProductsContext;
