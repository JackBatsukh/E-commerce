import React, { useState } from "react";
import "./App.css";
import WishCard from "./features/wishList/components/wishCard";
import CartItem from "./features/cart/components/cartItem";

function App() {
  const mockProduct = {
    id: 1,
    images: [
      "https://www.skolyx.se/5831-large_default/skolyx-premium-sneaker-in-white-leather.jpg",
    ],
    title: "Sample Product",
    price: 19.99,
    rating: 4.5,
    count: 1
  };

  const handleWish = (item) => {
    console.log("Added to wishlist:", item);
  };

  

  return (
    <div className="App w-full h-screen flex items-center px-[100px]">
      <CartItem el={mockProduct} wishHandle={handleWish} />
    </div>
  );
}

export default App;
