import React from 'react';

export default function Card() {
  return (
    <div className="w-96 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {/* <a href="#" className="relative z-10">
        <img className="rounded-t-lg" src="./concreate.jpg" alt="" />
      </a> */}
      <div className="relative z-30 p-5 bg-concreate">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p> */}
      </div>
    </div>
  );
}
