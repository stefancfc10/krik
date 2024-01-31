import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-blackColor rounded-t-3xl">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-6 md:mb-0  text-5xl text-white ml-5 ">
            <h1>Месечен</h1>
            <h1>Билтен</h1>
          </div>
          <div className="mb-6 md:mb-0">
            <p className="text-white">Lorem ipsum dolor</p>
            <p className="text-white">amet consectetur adipisicing elit.</p>
            <p className="text-white">
              Et odit minus error hic quae asperiores
            </p>
            <p className="text-white">consequuntur omnis nisi fugiate.</p>
          </div>
          <div className="mb-6 md:mb-0">
            <br />
            <input
              type="text"
              id="search-navbar"
              className=" p-2 w-96 text-sm text-white border-solid border-2 border-white rounded-2xl dark:bg-transparent dark:border-white dark:placeholder-white dark:text-white"
              placeholder="Вашата емаил адреса"
            ></input>
            <br />
            <br />
            <button className="bg-yellowColor text-dark font-bold mt-2 w-96 py-2 px-4 mr-5 rounded-full hover:text-white">
              CTA
            </button>
          </div>
        </div>
        <hr className="my-6 border-gray-50 sm:mx-auto dark:border-gray-50 lg:my-8" />

        <div className="md:flex md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h1 className="text-white text-2xl mt-5">Контактирај не!</h1>
            <br />

            <input
              type="text"
              id="search-navbar"
              className="mb-2 p-2 w-96 text-sm text-white border-solid border-2 border-white rounded-2xl dark:bg-transparent dark:border-white dark:placeholder-white dark:text-white"
              placeholder="Вашето Име"
            ></input>
            <br />
            <br />
            <input
              type="text"
              id="search-navbar"
              className=" p-2 w-96 text-sm text-white border-solid border-2 border-white rounded-2xl dark:bg-transparent dark:border-white dark:placeholder-white dark:text-white"
              placeholder="Вашата емаил адреса"
            ></input>
            <br />
            <br />
            <button className="bg-yellowColor text-dark font-bold mt-2 w-96 py-2 px-4 mr-5 rounded-full hover:text-white">
              CTA
            </button>
          </div>
          <div className="mb-6 md:mb-0">
            <h1 className="text-white text-2xl mt-5">Приклучи Се</h1>
            <br />

            <p className="text-white">Lorem ipsum dolor</p>
            <p className="text-white">amet consectetur adipisicing elit.</p>
            <p className="text-white">
              Et odit minus error hic quae asperiores
            </p>
            <p className="text-white">consequuntur omnis nisi fugiate.</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h1 className="text-white text-2xl mt-5">За Крик</h1>
            <br />

            <p className="text-white">Lorem ipsum dolor</p>
            <p className="text-white">amet consectetur adipisicing elit.</p>
            <p className="text-white">
              Et odit minus error hic quae asperiores
            </p>
            <p className="text-white">consequuntur omnis nisi fugiate.</p>
            <div className="flex pt-2 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7036 17.8252C17.0127 17.8252 18.074 16.8198 18.074 15.5796C18.074 14.3394 17.0127 13.334 15.7036 13.334C14.3945 13.334 13.3333 14.3394 13.3333 15.5796C13.3333 16.8198 14.3945 17.8252 15.7036 17.8252Z"
                    fill="white"
                  />
                  <path
                    d="M20.6513 20.4223V34.6656H25.1419V27.622C25.1419 25.7634 25.497 23.9635 27.8371 23.9635C30.1449 23.9635 30.1735 26.0884 30.1735 27.7393V34.6668H34.6666V26.8558C34.6666 23.0189 33.8278 20.0703 29.274 20.0703C27.0876 20.0703 25.6221 21.2519 25.0228 22.3701H24.962V20.4223H20.6513ZM13.3333 20.4223H17.8311V34.6656H13.3333V20.4223Z"
                    fill="white"
                  />
                  <rect
                    x="47"
                    y="47"
                    width="46"
                    height="46"
                    rx="23"
                    transform="rotate(-180 47 47)"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="47"
                    y="47"
                    width="46"
                    height="46"
                    rx="23"
                    transform="rotate(-180 47 47)"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M18.96 12H29.04C32.88 12 36 15.12 36 18.96V29.04C36 30.8859 35.2667 32.6562 33.9615 33.9615C32.6562 35.2667 30.8859 36 29.04 36H18.96C15.12 36 12 32.88 12 29.04V18.96C12 17.1141 12.7333 15.3438 14.0385 14.0385C15.3438 12.7333 17.1141 12 18.96 12ZM18.72 14.4C17.5743 14.4 16.4755 14.8551 15.6653 15.6653C14.8551 16.4755 14.4 17.5743 14.4 18.72V29.28C14.4 31.668 16.332 33.6 18.72 33.6H29.28C30.4257 33.6 31.5245 33.1449 32.3347 32.3347C33.1449 31.5245 33.6 30.4257 33.6 29.28V18.72C33.6 16.332 31.668 14.4 29.28 14.4H18.72ZM30.3 16.2C30.6978 16.2 31.0794 16.358 31.3607 16.6393C31.642 16.9206 31.8 17.3022 31.8 17.7C31.8 18.0978 31.642 18.4794 31.3607 18.7607C31.0794 19.042 30.6978 19.2 30.3 19.2C29.9022 19.2 29.5206 19.042 29.2393 18.7607C28.958 18.4794 28.8 18.0978 28.8 17.7C28.8 17.3022 28.958 16.9206 29.2393 16.6393C29.5206 16.358 29.9022 16.2 30.3 16.2ZM24 18C25.5913 18 27.1174 18.6321 28.2426 19.7574C29.3679 20.8826 30 22.4087 30 24C30 25.5913 29.3679 27.1174 28.2426 28.2426C27.1174 29.3679 25.5913 30 24 30C22.4087 30 20.8826 29.3679 19.7574 28.2426C18.6321 27.1174 18 25.5913 18 24C18 22.4087 18.6321 20.8826 19.7574 19.7574C20.8826 18.6321 22.4087 18 24 18ZM24 20.4C23.0452 20.4 22.1295 20.7793 21.4544 21.4544C20.7793 22.1295 20.4 23.0452 20.4 24C20.4 24.9548 20.7793 25.8705 21.4544 26.5456C22.1295 27.2207 23.0452 27.6 24 27.6C24.9548 27.6 25.8705 27.2207 26.5456 26.5456C27.2207 25.8705 27.6 24.9548 27.6 24C27.6 23.0452 27.2207 22.1295 26.5456 21.4544C25.8705 20.7793 24.9548 20.4 24 20.4Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26 25.5H28.5L29.5 21.5H26V19.5C26 18.47 26 17.5 28 17.5H29.5V14.14C29.174 14.097 27.943 14 26.643 14C23.928 14 22 15.657 22 18.7V21.5H19V25.5H22V34H26V25.5Z"
                    fill="white"
                  />
                  <rect
                    x="47"
                    y="47"
                    width="46"
                    height="46"
                    rx="23"
                    transform="rotate(-180 47 47)"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="47"
                    y="47"
                    width="46"
                    height="46"
                    rx="23"
                    transform="rotate(-180 47 47)"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M34.2119 17.6569C33.4488 17.9945 32.6395 18.2163 31.8109 18.3149C32.6839 17.792 33.3372 16.9696 33.6489 16.0009C32.8289 16.4889 31.9299 16.8309 30.9939 17.0159C30.3645 16.3425 29.5302 15.8959 28.6208 15.7455C27.7114 15.5951 26.7778 15.7494 25.9651 16.1844C25.1525 16.6193 24.5063 17.3106 24.127 18.1507C23.7477 18.9908 23.6566 19.9327 23.8679 20.8299C22.2048 20.7467 20.5778 20.3146 19.0926 19.5618C17.6074 18.8089 16.2971 17.7521 15.2469 16.4599C14.8752 17.0984 14.6798 17.8241 14.6809 18.5629C14.6809 20.0129 15.4199 21.2939 16.5409 22.0439C15.8769 22.023 15.2275 21.8436 14.6469 21.5209V21.5719C14.6469 22.5378 14.9809 23.4739 15.5924 24.2216C16.2039 24.9692 17.0552 25.4823 18.0019 25.6739C17.3855 25.8411 16.7392 25.8657 16.1119 25.7459C16.3788 26.5773 16.8991 27.3044 17.5999 27.8253C18.3007 28.3462 19.1468 28.6349 20.0199 28.6509C19.1522 29.3324 18.1588 29.8361 17.0963 30.1333C16.0338 30.4305 14.9232 30.5153 13.8279 30.3829C15.7396 31.6123 17.965 32.265 20.2379 32.2629C27.9319 32.2629 32.1379 25.8899 32.1379 20.3629C32.1379 20.1829 32.1339 20.0009 32.1259 19.8219C32.9443 19.2303 33.6507 18.4965 34.2119 17.6569Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

