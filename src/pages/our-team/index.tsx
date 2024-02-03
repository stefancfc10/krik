import { NextPage } from "next";
import React from "react";
import Carousel from "../../components/Carousel";
import { OurTeam } from "@/types";
import { useApp } from "@/context/AppContext";

interface Props {
  data: OurTeam[];
}

const Ourteam: NextPage<Props> = ({ data }) => {
  const { enlargeFont } = useApp();

  return (
    <main className="main mb-[200px] mt-[140px] ">
      <div className="mx-auto w-4/5">
        <h1
          className={`${
            enlargeFont ? "text-4xl" : "text-3xl"
          } flex justify-center font-extrabold px-5 `}
        >
          Запознајте го{" "}
        </h1>
        <h1
          className={`${
            enlargeFont ? "text-4xl" : "text-3xl"
          } flex justify-center font-extrabold px-5 `}
        >
          Нашиот Тим{" "}
        </h1>
      </div>

      <div className="mx-auto w-4/5">
        <div className="min-h-screen flex items-center justify-center">
          <Carousel images={data} />
        </div>
      </div>
      <div className="mx-auto w-4/5">
        <h1
          className={`${
            enlargeFont ? "text-4xl" : "text-3xl"
          } flex justify-center font-extrabold px-5 `}
        >
          Членови на Управниот Одбор
        </h1>
      </div>
      <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-900 lg:my-8" />
      <div className=" flex mx-auto w-1/2">
        <div className="w-1/2">
          <img src="/ourteam/Rectangle 69.png" alt="" />
        </div>
        <div className="w-1/2">
          <h4
            className={`${
              enlargeFont ? "text-2xl" : "text-xl"
            } flex justify-center font-extrabold pb-2 `}
          >
            Lorem ipsum dolor sit
          </h4>
          <h4 className="font-bold text-l pb-2">
            Lorem ipsum dolor sit amet consectetur.
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu
            ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus
            elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst
            viverra semper scelerisque proin nisl luctus vitae ut.
          </p>
        </div>
      </div>
      <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-900 lg:my-8" />

      <div className=" flex mx-auto w-1/2">
        <div className="w-1/2">
          <img src="/ourteam/Rectangle 68.png" alt="" />
        </div>
        <div className="w-1/2">
          <h4 className="font-bold text-xl pb-2">Lorem ipsum dolor sit</h4>
          <h4 className="font-bold text-l pb-2">
            Lorem ipsum dolor sit amet consectetur.
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu
            ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus
            elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst
            viverra semper scelerisque proin nisl luctus vitae ut.
          </p>
        </div>
      </div>

      <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-900 lg:my-8" />

      <div className=" flex mx-auto w-1/2 my-8">
        <div className="w-1/2">
          <img src="/ourteam/Rectangle 70.png" alt="" />
        </div>
        <div className="w-1/2">
          <h4 className="font-bold text-xl pb-2">Lorem ipsum dolor sit</h4>
          <h4 className="font-bold text-l pb-2">
            Lorem ipsum dolor sit amet consectetur.
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu
            ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus
            elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst
            viverra semper scelerisque proin nisl luctus vitae ut.
          </p>
        </div>
      </div>
    </main>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://cloud-tortoiseshell-myth.glitch.me/our-team"
  );
  const data = await res.json();

  return {
    props: { data },
  };
};

export default Ourteam;
