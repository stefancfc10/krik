import { NextPage } from "next";
import { useState } from "react";

const Application: NextPage = () => {

    const [volunteerExperience, setVolunteerExperience] = useState(5); // 

    const handleExperienceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setVolunteerExperience(Number(event.target.value));
    };
  

  return (
    <main className="main mb-[200px] mt-[140px] ">
      <div className="mx-auto w-4/5 mb-[110px]">
        <h1 className=" flex justify-center text-3xl font-extrabold px-5">
          Волонтирај Сега!
        </h1>
      </div>

      <div className="mx-auto w-4/5 rounded-2xl shadow-2xl pt-[100px]">
        <div className="w-3/5 mx-auto flex justify-between">
          <div className="w-1/2 px-5">
            <h1 className="text-xl font-bold">Име на Волонтер*</h1>
            <input
              type="text"
              id="search-navbar"
              className="mt-[15px] mb-[10px] w-96 p-3 text-sm text-white border-solid border-2 rounded-2xl dark:bg-transparent dark:border-gray-900 dark:placeholder-text-gray-600 dark:text-gray-600"
              placeholder="Example Namington"
            ></input>
          </div>
          <div className=" flex items-center space-x-5  pt-[45px] ">
            <button
              type="button"
              className=" hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-2xl text-sm px-[40px] py-[10px] text-center me-2 mb-2 dark:border-gray-900 dark:text-gray-900"
            >
              Под 18 Години
            </button>
            <button
              type="button"
              className=" hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-2xl text-sm px-[40px] py-[10px] text-center me-2 mb-2 dark:border-gray-900 dark:text-gray-900"
            >
              Над 18 Години
            </button>
          </div>
        </div>
        <div className="flex mx-auto w-3/5">
          <div className="w-1/2 px-5">
            <h1 className="text-xl font-bold">Адреса*</h1>
            <input
              type="text"
              id="search-navbar"
              className="mt-[15px] mb-[10px] w-96 p-3 text-sm text-white border-solid border-2 rounded-2xl dark:bg-transparent dark:border-gray-900 dark:placeholder-text-gray-600 dark:text-gray-600"
              placeholder="Example Street 24"
            ></input>
          </div>
          <div className="w-1/2 ml-[10px]">
            <h1 className="text-xl font-bold">Искуство со волонтирање*</h1>

                <div className="mb-[25px]">
                <input
              id="default-range"
              type="range"
              min={1} // Set the minimum value
              max={10} // Set the maximum value
              value={volunteerExperience}
              onChange={handleExperienceChange}
              className="w-full h-2 bg-orangeColor rounded-lg appearance-none cursor-pointer dark:bg-yellowColor"
            />
            <div className="flex flex-row justify-between px-1">
            {Array.from(Array(10).keys()).map(i => (
         <div key={i}>{i + 1}</div>
        ))}
            </div>
                </div>
            
          </div>
        </div>

        <div className="w-3/5 mx-auto flex justify-between">
          <div className="w-1/2 px-5">
            <h1 className="text-xl font-bold">Телефонски број*</h1>
            <input
              type="text"
              className="mt-[15px] mb-[10px] w-96 p-3 text-sm text-white border-solid border-2 rounded-2xl dark:bg-transparent dark:border-gray-900 dark:placeholder-text-gray-600 dark:text-gray-600"
              placeholder="+38900000000"
            ></input>
          </div>
          <div className=" flex items-center space-x-5  pt-[45px] ">
            <button
              type="button"
              className=" hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-2xl text-sm px-[40px] py-[10px] text-center me-2 mb-2 dark:border-gray-900 dark:text-gray-900"
            >
              Lorem Ipsum
            </button>
            <button
              type="button"
              className=" hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-2xl text-sm px-[40px] py-[10px] text-center me-2 mb-2 dark:border-gray-900 dark:text-gray-900"
            >
              Lorem Ipsum
            </button>
          </div>
        </div>

        <div className="w-3/5 mx-auto flex justify-between">
          <div className="w-1/2 px-5">
            <h1 className="text-xl font-bold">Е-Пошта*</h1>
            <input
              type="text"
              id="search-navbar"
              className="mt-[15px] mb-[10px] w-96 p-3 text-sm text-white border-solid border-2 rounded-2xl dark:bg-transparent dark:border-gray-900 dark:placeholder-text-gray-600 dark:text-gray-600"
              placeholder="example@email.com"
            ></input>
          </div>
          <div className=" flex items-center space-x-5  pt-[45px] ">
            <button
              type="button"
              className=" hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-2xl text-sm px-[40px] py-[10px] text-center me-2 mb-2 dark:border-gray-900 dark:text-gray-900"
            >
              Lorem Ipsum
            </button>
            <button
              type="button"
              className=" hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-2xl text-sm px-[40px] py-[10px] text-center me-2 mb-2 dark:border-gray-900 dark:text-gray-900"
            >
              Lorem Ipsum
            </button>
          </div>
        </div>

        <div className="mx-auto w-4/5 flex justify-center mt-[96px] pb-[96px]">
        <button
              type="button"
              className="w-64 bg-orangeColor font-bold rounded-2xl text-l px-[60px] py-[15px] text-center me-2 mb-2 dark:border-gray-900 dark:text-white"
            >
              Пријави Се
            </button>
      </div>


      </div>
    </main>
  );
};

export default Application;
