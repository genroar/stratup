import React from 'react';

function ProgressBar({ barProgress, totalSteps }) {
  const barWidth = `${(barProgress / totalSteps) * 100}%`;

  return (
    <div className="w-full xl:h-[15px] lg:h-[15px] md:h-[15px] sm:h-[5px]  h-[5px] bg-gray-400 shadow-md">
      <div
        className="bg-gray-700 xl:h-[15px] lg:h-[15px] md:h-[15px] sm:h-[5px]  h-[5px] rounded-r-[10px]"
        style={{ width: barWidth }}
      ></div>
    </div>
  );
}

export default ProgressBar;
