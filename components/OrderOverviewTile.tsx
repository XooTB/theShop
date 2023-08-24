import React from "react";

interface Order {
  id: number;
  customer: string;
  totalAmount: number;
  status: string;
}

interface OrderOverviewTileProps {
  order: Order;
}

const OrderOverviewTile: React.FC<OrderOverviewTileProps> = ({ order }) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg flex justify-between mt-2">
      <h2 className="text-xl font-semibold mb-2">Order #{order.id}</h2>
      <p className="text-gray-600 mb-1">Customer: {order.customer}</p>
      <p className="text-gray-600 mb-1">
        Total Amount: ${order.totalAmount.toFixed(2)}
      </p>
      <p
        className={`${
          order.status === "Pending" ? "text-yellow-500" : "text-green-500"
        } font-semibold `}
      >
        Status: {order.status}
      </p>
    </div>
  );
};

export default OrderOverviewTile;
