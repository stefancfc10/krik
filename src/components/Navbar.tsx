import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="bg-white dark:bg-blackColor">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 shadow-2xl">
        <div className="flex items-center space-x-3 ">
        <Link
                href="/newsletter"
                className="block py-2 px-3 text-white rounded md:bg-transparent md: md:p-0 dark:text-white md:dark:text-white"
              >
                 <span className="self-center text-2xl mr-5 font-semibold whitespace-nowrap dark:text-white">
            NEWSLETTER
          </span>
              </Link>
          
          <input
            type="text"
            id="search-navbar"
            className=" p-2 text-sm text-white border-solid border-2 border-white rounded-2xl dark:bg-transparent dark:border-white dark:placeholder-white dark:text-white"
            placeholder="SEARCH"
          ></input>
        </div>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-dark">
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md: md:p-0 dark:text-white md:dark:text-white"
              >
                En/Mk
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block py-2 px-3 text-white  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover: dark:hover: dark:hover:text-white md:dark:hover:bg-transparent"
              >
                E-Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <nav className="bg-white dark:bg-yellowColor">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <Link
            href={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/icons/krik-logo 1.png"
              className="h-20"
              alt="Krik Logo"
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-900"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-transparent">
              <li className="relative pt-[8px]">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="hover:outline outline-offset-2 outline-gray-900 rounded-2xl flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:hover:text-grey-900 md:p-0 md:w-auto  dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent relative"
                  onClick={toggleDropdown}
                >
                  За нас
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 ${
                      isDropdownOpen ? "transform rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className={`absolute top-full left-0 z-10 ${
                    isDropdownOpen ? "" : "hidden"
                  } font-normal  divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-blackColor dark:divide-gray-900`}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-white">
                    <li>
                      <Link href="/about-us" className="block px-4 py-2 ">
                        За Крик
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-team" className="block px-4 py-2 ">
                        Нашиот Тим
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteers" className="block px-4 py-2 ">
                        Волонтери
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 ">
                        Архива
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 px-3 md:dark:text-gray-900 hover:outline outline-offset-2 outline-gray-900 rounded-2xl"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block py-2 px-3 hover:outline outline-offset-2 outline-gray-900 rounded-2xl  md:dark:text-gray-900"
                >
                  Проекти
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 hover:outline outline-offset-2 outline-gray-900 rounded-2xl  md:dark:ttext-gray-900"
                >
                  Контакт
                </Link>
              </li>
              <li>
                <Link
                  href="/donation"
                  className="block py-2 px-3 hover:outline outline-offset-2 outline-gray-900 rounded-2xl  md:dark:text-white rounded-2xl bg-gray-900"
                >
                  Донирај
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
