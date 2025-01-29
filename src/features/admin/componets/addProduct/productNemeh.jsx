import React from "react";
import ProducrtAddCard from "./producrtAddCard";
import Layout from "../layout";

const ProductNemeh = () => {
  return (
    <>
      <div className="w-[50vh] text-2xl">
        <div className="p-[30px] flex flex-col gap-4 justify-center">
          <ProducrtAddCard />
        </div>
      </div>
    </>
  );
};

export default ProductNemeh;

