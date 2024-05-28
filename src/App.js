import React from "react";
import ElementInput from "./ElementInput";
import Button from "./Button";

const App = () => {
  return (
    <div className="flex justify-center p-12 ">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <div className="">
          <div>
            <h1 className="text-3xl pt-12 font-medium">Form title</h1>
            <p className="pt-1 pb-3">Form instructions</p>
            <div className="border-t border-gray-300 pt-2"></div>
            <p className="text-xl font-normal text-gray-700">Section title</p>
            <ElementInput />
            <div className="border-t border-gray-300 pt-2 mt-7"></div>
            <p className="text-xl font-normal text-gray-700">Section title</p>
            <ElementInput />
            <ElementInput />
            <div className="flex justify-between mt-12">
              <Button />
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
