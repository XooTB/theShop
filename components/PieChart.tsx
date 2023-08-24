"use client";
import React from "react";

import { PieChartProps } from "@/interfaces/piechart";
import ReactApexChart from "react-apexcharts";

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
  return (
    <div className="flex flex-1 bg-[#fcfcfc] flex-row justify-between align-center pl-4 py-2 gap-2 rounded-2xl m-h-[110px] w-fit">
      <div className="flex flex-col">
        <h3 className="text-sm text-[#818191]">{title}</h3>
        <p className="text-2xl text-[#11142d] font-bold mt-2">{value}</p>
      </div>
      <ReactApexChart
        options={{
          chart: {
            type: "donut",
          },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type="donut"
        width="120px"
      />
    </div>
  );
};

export default PieChart;
