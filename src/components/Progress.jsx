import React from "react";

const Progress = ({ color, progress }) => {
  console.log({ progress, color });
  return (
    <div
      className={`w-ful bg-${color}-500 border-2 border-${color}-900 h-6 rounded-lg overflow-hidden`}
    >
      <div
        style={{
          width: `${progress * 100}%`,
        }}
        className={`bg-white h-full`}
      ></div>
    </div>
  );
};

export default Progress;
