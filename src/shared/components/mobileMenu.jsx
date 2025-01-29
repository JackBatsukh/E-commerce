import React from "react";
import UserSidebar from "./userSideBar/userSidebar";
import Layout from "./layout";

const MobileMenu = () => {
  return (
    <Layout>
      <div className="w-full h-screen">
        <UserSidebar />
      </div>
    </Layout>
  );
};

export default MobileMenu;
