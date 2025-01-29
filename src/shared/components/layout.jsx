import React from "react";
import Head from "./Nav/head";
import Footer from "./footer";
import Category from "./Nav/category";

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <Head />
        <Category />
      </nav>
      <main>{children}</main>
      <footer className="w-full bg-[#262626] flex justify-center rounded-t-xl">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
