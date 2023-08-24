import React from "react";
import { Customer } from "@/interfaces/customer";
import { customers } from "@/constants/customers";

interface pageProps {
  params: { customerID: string };
}

const page = ({ params }: pageProps) => {
  const ID = parseInt(params.customerID);
  const customer = customers.filter((customer) => customer.id === ID)[0];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-2">{customer?.name}</h1>
      <p className="mb-4">Username: {customer?.username}</p>
      <p className="mb-4">Email: {customer?.email}</p>
      <p className="mb-4">Phone: {customer?.phone}</p>
      <p className="mb-4">Website: {customer?.website}</p>

      <div className="border-t pt-4 mt-4">
        <h2 className="text-lg font-semibold mb-2">Address</h2>
        <p className="mb-2">{customer?.address.street}</p>
        <p className="mb-2">{customer?.address.suite}</p>
        <p className="mb-2">
          {customer?.address.city}, {customer?.address.zipcode}
        </p>
        <p className="mb-2">Latitude: {customer?.address.geo.lat}</p>
        <p className="mb-4">Longitude: {customer?.address.geo.lng}</p>
      </div>

      <div className="border-t pt-4 mt-4">
        <h2 className="text-lg font-semibold mb-2">Company</h2>
        <p className="mb-2">{customer?.company.name}</p>
        <p className="mb-2">{customer?.company.catchPhrase}</p>
        <p>{customer?.company.bs}</p>
      </div>
    </div>
  );
};

export default page;
