import React, { useEffect, useRef } from "react";
import { Data } from "../data/data";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function LineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const chartData = {
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: Data.map((data) => data.userGain),
        backgroundColor: ["rgba(3, 244, 35, 0.6)"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="chart-container flex flex-col items-center justify-center shadow-lg gap-8 bg-white border rounded-lg py-4 md:px-8 shadow w-full lg:w-1/2">
      <h2 className="text-2xl text-start font-semibold">Жилийн дундаж үзүүлэлт</h2>

      <Line
        ref={chartRef}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "2016-2020 он",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;
