import { NextPage } from "next";

const Donation: NextPage = () => {
  return (
    <main className="main mb-[200px] mt-[140px] ">
      <div className="mx-auto w-4/5 mb-[140px]">
        <h1 className=" flex justify-center text-3xl font-extrabold px-5">
          Донирај!
        </h1>
      </div>
      <div className="flex mx-auto my-8 w-3/5 mb-[140px] ">
        

        <div
          className="w-2/5 text-center mx-auto "
          style={{ borderBottom: "2px solid transparent" }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderBottom = "5px solid orange";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderBottom = "2px solid transparent";
          }}
        >
          <h1 className="text-xl">Индивидуа</h1>
        </div>

        <div
          className="w-2/5 text-center mx-auto "
          style={{ borderBottom: "2px solid transparent" }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderBottom = "5px solid orange";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderBottom = "2px solid transparent";
          }}
        >
          <h1 className="text-xl">Организација/Претпријатие</h1>
        </div>

       
      </div>

      <div className="mx-auto w-4/5 rounded shadow-2xl pt-[100px]">
        <div className="w-3/5 mx-auto">
          <h1 className="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur.{" "}
          </h1>
          <div className=" flex items-center space-x-5  mt-[24px] ">
            <button
              type="button"
              className=" hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-2xl text-sm px-[40px] py-[10px] text-center me-2 mb-2 dark:border-gray-900 dark:text-gray-900"
            >
              1000 Ден
            </button>
            <button
              type="button"
              className=" hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-2xl text-sm px-[40px] py-[10px] text-center me-2 mb-2 dark:border-gray-900 dark:text-gray-900"
            >
              3000 Ден
            </button>
            <button
              type="button"
              className=" hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-2xl text-sm px-[40px] py-[10px] text-center me-2 mb-2 dark:border-gray-900 dark:text-gray-900"
            >
              6000 Ден
            </button>
            <button
              type="button"
              className=" hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-2xl text-sm px-[40px] py-[10px] text-center me-2 mb-2 dark:border-gray-900 dark:text-gray-900"
            >
              Промени Валута
            </button>
          </div>
          <div className="text-left  mt-[30px] mb-[40px]">
            <p>
              Lorem ipsum dolor sit amet consectetur. In sed lobortis donec a
              cras feugiat mattis velit venenatis. Adipiscing viverra praesent
              tristique non. Nunc blandit turpis tellus natoque mi odio viverra
              fermentum.{" "}
            </p>
          </div>
          <h1 className="text-xl">Друг износ:</h1>
          <input
            type="text"
            id="search-navbar"
            className="mt-[15px] mb-[50px]  p-3 text-sm text-white border-solid border-2 rounded-2xl dark:bg-transparent dark:border-gray-900 dark:placeholder-text-gray-600 dark:text-gray-600"
            placeholder="Input"
          ></input>
          <div className="flex pb-[100px] ">
            <button
              type="button"
              className="  mr-[24px] bg-blackColor font-bold rounded-2xl text-sm px-[60px] py-[10px] text-center me-2 mb-2 dark:border-gray-900 dark:text-white"
            >
              Донирај со
            </button>
            <button
              type="button"
              className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-2xl text-sm px-[60px] py-[10px] text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
            >
              <svg
                className="w-4 h-4 me-2 -ms-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="paypal"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"
                ></path>
              </svg>
              PayPal
            </button>
          </div>
        </div>
      </div>
      <div className="flex mx-auto mt-[75px]  w-3/5">
        <div className="w-1/2 px-5">
        <h1 className="text-xl font-bold">Име на Донатор*</h1>
          <input
            type="text"
            id="search-navbar"
            className="mt-[15px] mb-[10px] w-96 p-3 text-sm text-white border-solid border-2 rounded-2xl dark:bg-transparent dark:border-gray-900 dark:placeholder-text-gray-600 dark:text-gray-600"
            placeholder="Example Namington"
          ></input>
          
        </div>
        <div className="w-1/2">
        <h1 className="text-xl font-bold">Број на картичка*</h1>
          <input
            type="text"
            id="search-navbar"
            className="mt-[15px] mb-[10px] w-96 p-3 text-sm text-white border-solid border-2 rounded-2xl dark:bg-transparent dark:border-gray-900 dark:placeholder-text-gray-600 dark:text-gray-600"
            placeholder="****   ****   ****   ****"
          ></input>
        </div>
        
      </div>
      <div className="flex mx-auto  w-3/5">
        <div className="w-1/2 px-5">
        <h1 className="text-xl font-bold">E-Пошта*</h1>
          <input
            type="text"
            id="search-navbar"
            className="mt-[15px] mb-[10px] w-96 p-3 text-sm text-white border-solid border-2 rounded-2xl dark:bg-transparent dark:border-gray-900 dark:placeholder-text-gray-600 dark:text-gray-600"
            placeholder="example@email.com"
          ></input>
          
        </div>
        <div className="w-1/2 flex items-center">
        <input
            type="text"
            id="search-navbar"
            className="mt-[15px] mb-[10px] p-3 text-sm text-white border-solid border-2 rounded-2xl dark:bg-transparent dark:border-gray-900 dark:placeholder-text-gray-600 dark:text-gray-600"
            placeholder="MM/YY"
          ></input>
          <input
            type="text"
            id="search-navbar"
            className="mt-[15px] mb-[10px] ml-[10px] p-3 text-sm text-white border-solid border-2 rounded-2xl dark:bg-transparent dark:border-gray-900 dark:placeholder-text-gray-600 dark:text-gray-600"
            placeholder="CVV"
          ></input>
        </div>
        
      </div>
      <div className="flex mx-auto w-3/5">
        <div className="w-1/2 px-5">
        <h1 className="text-xl font-bold">Телефонски број*</h1>
          <input
            type="text"
            id="search-navbar"
            className="mt-[15px] mb-[10px] w-96 p-3 text-sm text-white border-solid border-2 rounded-2xl dark:bg-transparent dark:border-gray-900 dark:placeholder-text-gray-600 dark:text-gray-600"
            placeholder="+38900000000"
          ></input>
          
        </div>
        <div className="w-1/2">
        <h1 className="text-xl font-bold">Име на сопственик*</h1>
          <input
            type="text"
            id="search-navbar"
            className="mt-[15px] mb-[10px] w-96 p-3 text-sm text-white border-solid border-2 rounded-2xl dark:bg-transparent dark:border-gray-900 dark:placeholder-text-gray-600 dark:text-gray-600"
            placeholder="Example Namington"
          ></input>
        </div>
        
      </div>

      <div className="flex mx-auto w-3/5">
        <div className="w-1/2 px-5">
        <h1 className="text-xl font-bold">Сума за донирање*</h1>
          <input
            type="text"
            id="search-navbar"
            className="mt-[15px] mb-[10px] w-96 p-3 text-sm text-white border-solid border-2 rounded-2xl dark:bg-transparent dark:border-gray-900 dark:placeholder-text-gray-600 dark:text-gray-600"
            placeholder="a million?"
          ></input>
          
        </div>
        <div className="w-1/2 pt-[44px]">
        <button
              type="button"
              className="  mr-[24px] w-96 bg-orangeColor font-bold rounded-2xl text-sm px-[60px] py-[15px] text-center me-2 mb-2 dark:border-gray-900 dark:text-white"
            >
              Донирај
            </button>
        </div>
        
      </div>
    
    </main>
  );
};

export default Donation;
