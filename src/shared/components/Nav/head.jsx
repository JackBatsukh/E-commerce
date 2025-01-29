import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchComponent from "../userSideBar/search";

const Head = () => {
  const [button, setButton] = useState([
    {
      img: "/src/assets/bell-svgrepo-com.svg",
      name: "Notification",
      link: "/notification",
    },
    { img: "/src/assets/cart-svgrepo-com.svg", name: "Cart", link: "/cart" },
    {
      img: "/src/assets/ser-circle-svgrepo-com (1).svg",
      name: "User",
      link: "/userinformation",
    },
    { img: "/src/assets/menu-svgrepo-com.svg", name: "Menu", link: "/menu" },
  ]);

  const navigate = useNavigate();

  return (
    <div className="w-full h-fit py-[20px] flex flex-row justify-center px-[10px] items-center">
      <div className="content w-full max-w-[1440px] flex flex-row justify-between items-center">
        <Link to="/">
          <img
            src="https://res-console.cloudinary.com/dlfvuaspc/media_explorer_thumbnails/d42333a27eedbac0f1527537560b0dc2/detailed"
            alt="Logo"
            className="w-auto h-[35px]"
          />
        </Link>
        <div className="buttons flex flex-row gap-[10px]">
          <div>
            <SearchComponent navigate={navigate} />
          </div>
          {button.map((el, index) => (
            <React.Fragment key={index}>
              {el.name === "User" ? (
                <>
                  <Link to="/userinformation" className="hidden md:block">
                    <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white p-[6px]">
                      <img src={el.img} alt={el.name} />
                    </button>
                  </Link>
                  <Link to="/mobilemenu" className="block md:hidden">
                    <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white p-[6px]">
                      <img src={el.img} alt={el.name} />
                    </button>
                  </Link>
                </>
              ) : (
                <Link
                  to={el.link}
                  className={el.name === "Menu" ? "flex md:hidden" : ""}
                >
                  <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white p-[6px]">
                    <img src={el.img} alt={el.name} />
                  </button>
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Head;
