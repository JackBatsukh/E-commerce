import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: [
      "Гэр ахуйн",
      "Эмэгтэй хувцас",
      "Хүүхдийн хувцас",
      "Гоо сайхан",
      "Багаж хэрэгсэл",
      "Цахилгаан бараа",
    ],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgb(122, 4, 30)",
          "rgb(16, 72, 109)",
          "rgb(142, 103, 6)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        label: "# of Votes",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col bg-white gap-8 w-full lg:w-1/2 border-2 shadow rounded-lg p-16 items-center md:flex-row shadow-lg ">
      <div className="w-[100%] lg:w-2/3">
        <Doughnut data={data} options={options} />
      </div>
      <div className="w-full flex flex-col gap-2 md:flex-row md:flex-col lg:flex-col lg:w-1/3">
        <h1 className="text-xl font-bold">Нийт зарагдсан бараа</h1>
        {data.labels.map((label, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-4 h-4"
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
              }}
            ></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
