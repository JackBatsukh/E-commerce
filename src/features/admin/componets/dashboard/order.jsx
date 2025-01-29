import React from 'react';

const Order = () => {
    return (
      <div className="bg-white flex justify-between items-center rounded-xl p-8 border shadow-lg w-[400px]">
        <div className="flex flex-col">
          <h1>Шинэ бүтээгдэхүүн</h1>
          <span className="text-3xl font-bold">437</span>
          <span className="text-sm text-red-500">
            Өмнөх сараас 7% хувь буурсан.
          </span>
        </div>
        <img
          src="src\assets\product-svgrepo-com (3).svg"
          alt=""
          className="w-[35px]"
        />
      </div>
    );
}

export default Order;
