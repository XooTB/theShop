"use client";
import ReactApexChart from "react-apexcharts";
import { ArrowCircleUpRounded } from "@mui/icons-material";
import {
  TotalRevenueOptions,
  TotalRevenueSeries,
} from "@/components/chart.config";

const TotalRevenue = () => {
  return (
    <div className=" bg-[#FCFCFC] flex flex-1 flex-col rounded-2xl">
      <p className="text-lg font-semibold text-[#11142D] ">Total Revenue</p>
      <div className="my-5 gap-4 flex-wrap flex flex-row">
        <p className="text-2xl font-bold text-[#11142D] pl-5">$255,897</p>
        <div className="flex-row items-center gap-2">
          <ArrowCircleUpRounded className="text-2xl text-[#475be8]" />
          <div>
            <p className="text-lg text-[#475be8]">0.8%</p>
            <p className="text-xs text-[#08191]">Than Last Month</p>
          </div>
        </div>
      </div>
      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </div>
  );
};

export default TotalRevenue;
