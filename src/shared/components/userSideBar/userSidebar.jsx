import React, { useState } from "react";
import UserButton from "./userButton";
import { Link } from "react-router";

const UserSidebar = () => {
  const [userButtonData, setUserButtonData] = useState([
    {
      image: "/src/assets/ser-circle-svgrepo-com (1).svg",
      text: "Хувийн мэдээлэл",
      link: "/userinformation",
    },
    {
      image: "/src/assets/list-ul-alt-svgrepo-com.svg",
      text: "Захиалага",
      link: "/order",
    },
    {
      image: "/src/assets/heart-alt-svgrepo-com.svg",
      text: "Хүслийн жагсаалт",
      link: "/wishList",
    },
    {
      image: "/src/assets/bell-svgrepo-com.svg",
      text: "Мэдэгдэл",
      link: "/notification",
    },
    {
      image: "/src/assets/cart-svgrepo-com.svg",
      text: "Сагс",
      link: "/cart",
    },
  ]);

  return (
    <div className="w-full h-full flex flex-col justify-between border-r-[1px] border-l-[1px] md:bg-white px-[40px] py-[120px]">
      <div className="w-fit flex flex-col gap-[20px]">
        {userButtonData.map((el) => {
          return <UserButton key={el.link} data={el} />;
        })}
      </div>
      <div className="w-full h-fit">
        <Link to={"/login"}>
          <button className="flex flex-row gap-[20px] w-[300px] bg-white px-[15px] py-[10px] rounded-lg">
            <img src="/src/assets/leave-svgrepo-com.svg" alt="" />
            <h1>Гарах</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserSidebar;
