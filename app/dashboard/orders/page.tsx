"use client";
import React from "react";
import { orders } from "@/constants/orders";
import OrderOverviewTile from "@/components/OrderOverviewTile";

const page = () => {
  return (
    <div>
      <div className="mx-auto mt-8">
        {orders?.map((order, i) => (
          <OrderOverviewTile order={order} key={i} />
        ))}
      </div>
    </div>
  );
};

export default page;
