import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const Newsletter: NextPage = () => {
  return (
    <main className="main mb-[200px]  ">
      <div className="bg-blackColor">
        <div className="mx-auto w-4/5 mb-[140px] ">
          <div className="">
            <h1 className="flex justify-start text-9xl text-white font-extrabold pt-[140px] px-5">
              Месечен
            </h1>
          </div>
          <div>
            <h1 className="flex justify-end text-9xl text-white font-extrabold px-5 pb-[60px] ">
              Билтен
            </h1>
          </div>
        </div>
      </div>
      <div className="flex mx-auto mb-[150px] w-4/5">
        <div className="w-1/2 p-4 ">
          <h1 className="font-bold text-3xl pb-2 text-end">Август, 2023</h1>
          <p className="text-end">
            Lorem ipsum dolor sit amet consectetur. In natoque euismod enim
            cursus velit in. Libero nisi morbi sed libero egestas.
          </p>
        </div>

        <div className="w-1/2 px-5 p-4 ">
          <img
            className="filter grayscale"
            src="/newsletter/image 23.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex mx-auto mb-[150px] w-4/5">
        <div className="w-1/2 px-5 p-4">
          <img
            className="filter grayscale"
            src="/newsletter/Rectangle 119.png"
            alt=""
          />
        </div>

        <div className="w-1/2 p-4 ">
          <h1 className="font-bold text-3xl pb-2 text-start">Јули, 2023</h1>
          <p className="text-start">
            Lorem ipsum dolor sit amet consectetur. In natoque euismod enim
            cursus velit in. Libero nisi morbi sed libero egestas.
          </p>
        </div>
      </div>

      <div className="flex mx-auto mb-[150px] w-4/5">
        <div className="w-1/2 p-4">
          <h1 className="font-bold text-3xl pb-2 text-end">Јуни, 2023</h1>
          <p className="text-end">
            Lorem ipsum dolor sit amet consectetur. In natoque euismod enim
            cursus velit in. Libero nisi morbi sed libero egestas.
          </p>
        </div>

        <div className="w-1/2 px-5 p-4">
          <img
            className="filter grayscale"
            src="/newsletter/image 24.png"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Newsletter;
