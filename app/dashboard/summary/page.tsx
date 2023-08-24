"use client";
import React from "react";
import PieChart from "@/components/PieChart";
import TotalRevenue from "@/components/TotalRevenue";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-left">
        Last Month's Summary:{" "}
      </h1>
      <div className="mt-10 flex flex-wrap gap-4 px-5">
        <PieChart
          title="Total Products"
          value={384}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Customers"
          value={284}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Total Orders"
          value={484}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Gross Profit"
          value={784}
          series={[75, 100]}
          colors={["#475be8", "#e4e8ef"]}
        />
      </div>
      <div className="px-5 py-5">
        <TotalRevenue />
      </div>
    </div>
  );
};

export default page;
