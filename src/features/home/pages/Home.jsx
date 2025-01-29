import React from "react";
import Category from "../../../shared/components/Nav/category";
import Main from "../components/main";
import Layout from "../../../shared/components/layout";
import Advertisement from "../components/advertisement";


const Home = () => {
  return (
    <Layout>
      
      <div className="w-full h-fit md:p-0 flex flex-col items-center bg-[#f6f6f6]">
        {/* <Advertisement /> */}
        <div className=" w-full max-w-[1440px] flex flex-col">
          <Main />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
