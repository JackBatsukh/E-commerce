import React, { useContext } from "react";
import cartContext from "../hooks/cartContext";
import Layout from "../../../shared/components/layout";
import UserSidebar from "../../../shared/components/userSideBar/userSidebar";
import NoItem from "../components/noItem";
import CartItem from "../components/cartItem";
import TotalPrice from "../components/totalPrice";

const Cart = () => {
  const { cartData, totalPrice } = useContext(cartContext);

  return (
    <Layout>
      <div className="w-full h-screen bg-[#f6f6f6] flex flex-col px-[10px]">
        <div className="desktop w-full h-full bg-[#f6f6f6] justify-center hidden md:flex">
          <div className="content max-w-[1440px] w-full h-full flex flex-row">
            <div className="side w-1/4">
              <UserSidebar />
            </div>
            <div className="w-3/4 h-full flex flex-col p-[10px] bg-[#f6f6f6] justify-center items-center relative">
              <div className="w-full h-full p-[20px] bg-white flex flex-col flex-wrap gap-[30px] rounded-xl items-end border">
                <div className="w-full flex flex-col gap-[10px]">
                  {cartData.length === 0 ? (
                    <NoItem />
                  ) : (
                    cartData.map((el) => <CartItem key={el.id} el={el} />)
                  )}
                </div>
                <div className="absolute bottom-[50px]">
                  <TotalPrice totalPrice={totalPrice} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile w-full h-full flex flex-col items-end md:hidden">
          <div className="w-full h-full flex flex-col gap-[10px] pt-[20px]">
            {cartData.length === 0 ? (
              <NoItem />
            ) : (
              cartData.map((el) => <CartItem key={el.id} el={el} />)
            )}
          </div>
          <div className="absolute bottom-[50px]">
            <TotalPrice totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
