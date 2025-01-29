import React, { useEffect, useState } from "react";
import cartContext from "./cartContext";

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState(() => {
    const savedData = localStorage.getItem("cart");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }, [cartData]);

  const addToCart = (product) => {
    const exist = cartData.find((item) => item.id === product.id);
    alert("Сагсанд нэмэгдлээ!");
    if (exist) {
      setCartData(
        cartData.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartData([...cartData, { ...product, quantity: 1 }]);
    }
  };

  const minusFromQuantity = (product) => {
    setCartData(
      cartData
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const addOnQuantity = (product) => {
    setCartData(
      cartData.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const deleteProduct = (productId) => {
    setCartData(cartData.filter((item) => item.id !== productId));
  };

  const totalPrice = cartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <cartContext.Provider
      value={{
        cartData,
        addToCart,
        minusFromQuantity,
        addOnQuantity,
        deleteProduct,
        totalPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
