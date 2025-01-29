import React from "react";
import Head from "../../../shared/components/Nav/head";
import Category from "../../../shared/components/Nav/category";
import UserSidebar from "../../../shared/components/userSideBar/userSidebar";
import NoOrder from "../components/noOrder";
import Layout from "../../../shared/components/layout";

const Order = () => {
  return (
    <Layout>
      <div className="w-full h-screen flex flex-col px-[10px]">
        <div className="mobile w-full h-full flex flex-col justify-center items-center  md:hidden">
          <NoOrder />
        </div>
        <div className="desktop w-full h-full  justify-center hidden md:flex">
          <div className="content max-w-[1440px]  w-full h-full flex flex-row gap-[10px] ">
            <div className="side w-1/4">
              <UserSidebar />
            </div>
            <div className="w-3/4 h-full flex flex-col justify-center items-center pt-[10px]  ">
              <div className="w-full h-full flex justify-center items-center border bg-white rounded-xl">
                <NoOrder />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
