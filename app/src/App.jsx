"use client";
// src/App.js
import React, { useState } from "react";
import Updates from "./components/Updates";
import Details from "./components/Details";
import { updates, transactionDetails, customer, category } from "../data"; // Importing category
import { AiOutlineArrowUp } from "react-icons/ai";

function App() {
  const [activeTab, setActiveTab] = useState("updates");

  // Function to get category label
  const getCategoryLabel = () => {
    switch (category) {
      case "f":
        return "Family";
      case "p":
        return "Personal Expenses";
      case "e":
        return "Education";
      default:
        return "General";
    }
  };

  // Share button logic
  const ShareButton = () => {
    if (transactionDetails.shareYes === "Y") {
      return (
        <div className="flex justify-center mt-4">
          <button className="text-[15px] bg-green-400 rounded-full p-2 w-[300px] text-[20px] text-gray-700">
            Share
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white md:mx-[26rem] mt-12 mb-20">
      <div className="sm:h-[100%] bg-white">
        {/* Header with amount */}
        <div className="p-6 text-center flex items-center flex-col justify-center">
          <div className="w-[3rem] h-[3rem] mb-3 bg-slate-100 rounded-full flex items-center justify-center text-5xl">
            <AiOutlineArrowUp fontSize={30} color="black" />
          </div>
          <p className="mb-2 text-sm font-light">{customer.paymentStatus}</p>
          <h2 className="text-xl mb-1 font-semibold">
            {customer.convertAmount}
          </h2>
          <p className="text-sm text-gray-500">{customer.name}</p>
          <button className="mt-2 text-xs bg-gray-200 px-5 py-[0.5rem] rounded-md">
            {getCategoryLabel()}
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 pointer">
          <button
            className={`cursor-pointer w-1/2 py-2 ${
              activeTab === "updates"
                ? "border-b-2 border-green-600 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("updates")}
          >
            Updates
          </button>
          <button
            className={`w-1/2 py-2 cursor-pointer ${
              activeTab === "details"
                ? "border-b-2 border-green-600 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
        </div>

        {/* Content Based on Active Tab */}
        <div className="lg:p-4">
          {activeTab === "updates" ? (
            <Updates updates={updates} />
          ) : (
            <Details transactionDetails={transactionDetails} />
          )}
        </div>

        {/* Share Button */}
        <ShareButton />
      </div>
    </div>
  );
}

export default App;
