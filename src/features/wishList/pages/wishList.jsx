import React, { useState, useEffect } from "react";
import UserSidebar from "../../../shared/components/userSideBar/userSidebar";
import NoWish from "../components/noWish";
import Layout from "../../../shared/components/layout";
import WishCard from "../components/wishCard";

const WishList = () => {
  const [wishData, setWishData] = useState([]);

  useEffect(() => {
    const storedWishData = JSON.parse(localStorage.getItem("wish")) || [];
    setWishData(storedWishData);
  }, []);

  const handleDelete = (id) => {
    const updatedWishData = wishData.filter((item) => item.id !== id);
    setWishData(updatedWishData);
    localStorage.setItem("wish", JSON.stringify(updatedWishData));
  };

  return (
    <Layout>
      <div className="w-full h-screen flex flex-col px-[10px]">
        <div className="mobile w-full h-full flex flex-col py-[10px] items-center md:hidden">
          <div className="w-full bg-white grid grid-cols-2 gap-[10px] justify-items-center">
            {wishData.length === 0 ? (
              <NoWish />
            ) : (
              wishData.map((el, index) => (
                <WishCard key={index} el={el} onDelete={handleDelete} />
              ))
            )}
          </div>
        </div>
        <div className="desktop w-full h-full justify-center hidden md:flex">
          <div className="content max-w-[1440px] w-full h-full flex flex-row gap-[10px]">
            <div className="side w-1/4">
              <UserSidebar />
            </div>
            <div className="w-3/4 h-full flex flex-col justify-center items-center pt-[10px]">
              <div className="w-full h-full bg-white p-[10px] flex flex-row flex-wrap gap-[10px] rounded-xl border">
                {wishData.length === 0 ? (
                  <NoWish />
                ) : (
                  wishData.map((el, index) => (
                    <WishCard key={index} el={el} onDelete={handleDelete} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WishList;
