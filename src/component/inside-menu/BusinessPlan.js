import React from "react";

const BusinessPlan = ({response}) => {
  return (
    <div className="container mx-auto mt-10 p-5">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Business Plan Response
      </h1>
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-700">Generated Business Plan response:</h2>
        <div className="mt-4">
            <p className="whitespace-pre-wrap break-words text-gray-700">{response}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlan;
