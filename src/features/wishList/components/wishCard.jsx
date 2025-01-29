import React from "react";
import PlusButton from "../../../shared/components/plusButton";
import DeleteButton from "../../../shared/components/deleteButton";
import { Link } from "react-router-dom";

const WishCard = ({ el, onDelete }) => {
  if (!el) return null;

  const { id, images, title, price, rating } = el;

  return (
    <div
      key={id}
      className="product w-[190px] h-[220px] border-[1px] rounded-3xl flex flex-col justify-between relative md:w-[300px] md:h-[350px]">
      <Link to={`/product/${id}`}>
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full rounded-3xl p-4 object-contain"
        />
      </Link>

      <h1 className="absolute max-w-[100px] left-[15px] top-[10px] italic text-[14px] md:text-[18px]">
        {title}
      </h1>
      <p className="text-[14px] w-fit h-[32px] flex items-center absolute right-[15px] top-[10px] px-[10px] py-[2px] bg-[#fff]/50 rounded-xl drop-shadow md:text-[18px]">
        $ {price}
      </p>
      <p className="absolute h-[32px] w-fit right-[55px] bottom-[10px] gap-[5px] flex flex-row items-center px-[10px] py-[2px] bg-[#fff]/50 rounded-3xl drop-shadow md:text-[20px]">
        {rating} <img src="/src/assets/Star.png" alt="star" />
      </p>
      <div className="buttons absolute bottom-[10px] right-[15px] flex flex-col gap-[7px]">
        <DeleteButton onDelete={() => onDelete(el.id)} />
        <PlusButton />
      </div>
    </div>
  );
};

export default WishCard;
