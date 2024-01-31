// components/Card.tsx
import React from 'react';

const Card: React.FC = () => {
    
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img
        className="rounded-t-lg"
        src="/docs/images/blog/image-1.jpg"
        alt=""
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className=" mt-[100px]  text-l  tracking-tight text-gray-900 dark:text-black rounded-2xl bg-yellowColor">
        АКТИВНОСТ ECO-ACTION
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg dark:bg-transparent"
      >
        Види Повеќе
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
  );
};

export default Card;
