"use client";

import { E164Number } from "libphonenumber-js/core";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";

const page = () => {
  const [phoneNumber, setPhoneNumber] = useState<E164Number>();

  const handleSubmit = () => {};

  return (
    <div className="min-h-screen flex mt-10 justify-center ">
      <div className="w-2/5 flex flex-col px-7 bg-slate-400 h-80 rounded-lg">
        <form
          className=" w-full flex flex-col justify-center"
          onSubmit={handleSubmit}
        >
          <label className="pt-5 text-lg">Phone Number:</label>
          <PhoneInput
            country="BD"
            defaultCountry="BD"
            placeholder="Enter a Phone Number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            className="w-full h-14 rounded-md"
          />
          <label className="pt-5 mb-2 text-lg">Password: </label>
          <input type="password" className="px-2 py-1 w-full h-10 rounded-lg" />
          <button className=" bg-slate-600 py-3 rounded-lg mt-5 w-full hover:bg-slate-500 text-white text-lg">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
