import React from 'react';

function ProgressBar({ progress, totalSteps }) {
  const barWidth = `${(progress / totalSteps) * 100}%`;

  return (
    <div className="w-full h-[15px] bg-gray-400 shadow-md">
      <div
        className="bg-gray-700 h-[15px] rounded-r-[10px]"
        style={{ width: barWidth }}
      ></div>
    </div>
  );
}

export default ProgressBar;
