// src/components/Updates.js
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { senderDetails } from "../../data";

// eslint-disable-next-line react/prop-types
const Updates = ({ updates }) => {
  return (
    <div className="pl-[3rem] pr-[3rem] mt-10 mb-10">
      <div className="relative w-full">
        {/* Vertical line for the timeline */}
        <div className="absolute ml-[1rem] top-[0.6rem] bottom-[9.3rem] sm360:h-[22rem] md412:h-[22rem] md375:h-[26rem] lg414:h-[22rem] xl430:h-[22rem] lg344:h-[28rem] h-[22rem] md390:h-[25rem] md:h-[20rem] w-[0.1rem] bg-gray-300"></div>

        {updates.map((update, index) => (
          <div
            key={index}
            className="flex items-start ml-[0.4rem] mb-6 relative"
          >
            {/* Status Indicator */}
            <div className="relative">
              <div className="w-7 rounded-full p-1 bg-white z-10">
                {update.status === "completed" && (
                  <AiOutlineCheck className="w-4 h-4 text-green-600" />
                )}
                {update.status === "in-progress" && (
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                )}
                {update.status === "pending" && (
                  <div className="w-3 h-3 rounded-full border border-gray-300"></div>
                )}
              </div>
            </div>

            {/* Update Details */}
            <div className="pl-4">
              <p className="text-md mb-2 text-gray-500">{update.date}</p>
              <p className="text-sm font-medium text-gray-700">
                {update.message}
              </p>

              {update.message === "Your money's on its way" && (
                <button className="mt-4 px-4 py-2 text-white bg-green-700 rounded-md">
                  Take Action Now
                </button>
              )}
            </div>
          </div>
        ))}

        <hr className="border-t-[1.4px] border-dashed border-gray-300 my-4" />
        <h3 className="text-lg font-semibold mb-2 mt-4">Transfer details</h3>
        <div className="flex gap-6 flex-col">
          <div className="flex gap-[8rem]">
            <div>
              <p>Sender</p>
              <p className="text-slate-500">Ahmad Ali</p>
            </div>
            <div>
              <p>Amount</p>
              <p className="text-slate-500">{senderDetails.amount}</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div>
              <p>IBAN Number</p>
              <p className="text-slate-500">GB66 BARC 2095 8787 1239 33</p>
            </div>
            <div>
              <p>SWIFT Code</p>
              <p className="text-slate-500">BARCGB22XXX</p>
              {/* <p className="text-slate-500">RYBKSARI</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
