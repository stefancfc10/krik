// components/ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="relative h-16 bg-white w-full rounded-3xl border-2 border-black">
      <div
        className="absolute top-0 left-0 h-full bg-yellowColor transition-all ease-in-out duration-300 rounded-3xl"
        style={{ width: `${progress}%` }}
      >
      </div>
        <div className="absolute top-0 right-0 h-full flex items-center  pr-2 text-black font-bold text-2xl">
          {progress}%
        </div>
    </div>
  );
};

export default ProgressBar;

