import React from "react";
import Stats from "../componets/dashboard/stats";
import DoughnutChart from "../componets/dashboard/doughnutChart";
import Layout from "../componets/layout";
import Order from "../componets/dashboard/order";
import Profit from "../componets/dashboard/profit";
// import { Link } from "react-router";
import LineChart from "../componets/dashboard/lineChart";
import RecentBuyers from "../componets/dashboard/recentBuyers";
import TopGoods from "../componets/dashboard/topGoods";

const Dashboard = () => {
  return (
    <div>
      <img
        src="src\assets\notification-12-svgrepo-com.svg"
        alt=""
        className="absolute right-0 p-8"
      />
      <Layout>
        <div
          className="py-[50px] my-40 flex flex-col w-full px-[20px] lg:px-[90px] gap-6 lg:h-fit lg:absolute lg:ml-[50px] lg:right-0
           lg:w-5/6 lg:my-[50px]">
          <h1 className="text-2xl font-semibold lg:text-3xl lg:font-bold ">
            Сайн байна уу, <br />
            <span className=" text-lg font-normal">
              Эрхэм Админ хэн нэгэн. Таньд{" "}
              <span className="font-semibold">J&B</span> онлайн дэлгүүрийн
              статистик үзүүлэлтийг харуулж байна.
            </span>
          </h1>
          <div className="flex flex-wrap justify-between gap-4 md:flex-nowrap">
            <Stats />
            <Profit />
            <Order />
          </div>
          <div className="flex flex-col gap-8 lg:flex-row">
            <LineChart />
            <DoughnutChart />
          </div>
          <div className="flex flex-col gap-8 w-full items-center lg:flex-row ">
            <RecentBuyers />
            <TopGoods />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
