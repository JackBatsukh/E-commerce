import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { useProducts } from "../../../ProductProvider";

const Products = () => {
  const { products: contextProducts } = useProducts();
  const [productData, setProductData] = useState([]);
  const [wishData, setWishData] = useState(
    JSON.parse(localStorage.getItem("wish")) || []
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProductData(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleWish = (wishItem) => {
    if (wishData.some((item) => item.id === wishItem.id)) {
      alert("This item is already in your wishlist!");
      return;
    }

    const updatedWishList = [...wishData, wishItem];
    setWishData(updatedWishList);
    localStorage.setItem("wish", JSON.stringify(updatedWishList));
  };

  const combinedProducts = [...contextProducts, ...productData];

  return (
    <div className="w-full h-fit grid grid-cols-2 justify-items-center content-center gap-[30px] lg:grid-cols-3 xl:grid-cols-4">
      {combinedProducts.map((el, index) => (
        <ProductCard key={index} el={el} wishHandle={handleWish} />
      ))}
    </div>
  );
};

export default Products;
