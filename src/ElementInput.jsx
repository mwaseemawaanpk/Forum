import React from "react";

const ElementInput = () => {
  return (
    <div className="mt-5">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-semibold	  mb-2"
          for="name"
        >
          Text field label
        </label>
        <input
          className="shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Value"
        />
      </div>

      {/* <div class="mb-4"><label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label><input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"   ></div> */}
    </div>
  );
};

export default ElementInput;
