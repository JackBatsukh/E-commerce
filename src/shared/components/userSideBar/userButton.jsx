import React from "react";
import { Link } from "react-router";

const UserButton = ({ data }) => {
  return (
    <Link to={data.link}>
      <button className="w-full flex flex-row gap-[20px] items-center bg-white px-[15px] py-[10px] rounded-lg">
        <img src={data.image} alt="" />
        <h1>{data.text}</h1>
      </button>
    </Link>
  );
};

export default UserButton;
