import { useState } from "react";

export function Assignment2() {
  const [bgColor, setBgColor] = useState("");

  return (
    <>
      <div className={`flex justify-center h-screen items-end ${bgColor} `}>
        <div className="flex justify-around shadow-md w-3/4 p-2 mb-6">
          <button
            className="bg-red-500 rounded pl-3 pr-3"
            onClick={() => setBgColor("bg-red-500")}
          >
            red
          </button>
          <button
            className="bg-yellow-500 rounded pl-3 pr-3 "
            onClick={() => setBgColor("bg-yellow-500")}
          >
            yellow
          </button>
          <button
            className="bg-black rounded pl-3 pr-3 text-white"
            onClick={() => setBgColor("bg-black")}
          >
            black
          </button>
          <button
            className="bg-purple-500 rounded pl-3 pr-3"
            onClick={() => setBgColor("bg-purple-500")}
          >
            purple
          </button>
          <button
            className="bg-green-500 rounded pl-3 pr-3"
            onClick={() => setBgColor("bg-green-500")}
          >
            green
          </button>
          <button
            className="bg-blue-500 rounded pl-3 pr-3"
            onClick={() => setBgColor("bg-blue-500")}
          >
            blue
          </button>
          <button
            className="bg-slate-200 rounded pl-3 pr-3"
            onClick={() => setBgColor("")}
          >
            Default
          </button>
        </div>
      </div>
    </>
  );
}
