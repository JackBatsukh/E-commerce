import React from 'react';

const Profit = () => {
    return (
      <div className="bg-white flex justify-between items-center rounded-xl p-8 shadow-lg w-[400px]">
        <div className="flex flex-col">
          <h1>Нийт ашиг</h1>
          <span className="text-3xl font-bold">9,981,544₮</span>
          <span className="text-sm text-green-500">Өмнөх сараас 21% өссөн</span>
        </div>
          <img
            src="src\assets\profit-graph-infographic-data-element-svgrepo-com.svg"
            alt=""
            className='w-[32px]'
          />
      </div>
    );
}

export default Profit;
