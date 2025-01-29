import React from "react";

const Image = ({ data }) => {
  return (
    <div className="">
      <img
        src={data.images}
        alt=""
        className="w-[90%] max-w-[500px] max-h-[600px] "
      />
    </div>
  );
};

export default Image;
