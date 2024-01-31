import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";


interface Props {
  data: any;
}


const Products: NextPage<Props> = ({ data }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedItems, setDisplayedItems] = useState(data.slice(0, itemsPerPage));

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const newItems = data.slice(startIndex, endIndex);
    setDisplayedItems((prevItems: any) => [...prevItems, ...newItems]);
    setCurrentPage(nextPage);
  };

  return (
    <main className="main mb-[200px] mt-[140px] ">
      <div className="mx-auto w-4/5 mb-[140px]">
        <h1 className="flex justify-center text-3xl font-extrabold px-5">
          E-shop КРИК на младите
        </h1>
      </div>

      
<div className="mx auto w-full flex flex-col">
        <div className=" flex flex-row">
          <div className="w-1/2 flex flex-row p-2">
            <div className="w-4/6 filter grayscale p-2">
              <img src="/icons/centar krikni 2 3.png" alt="" />
            </div>
            <div className="w-2/6 p-2">
              <img src="/icons/Rectangle 11.png" alt="" />
            </div>
          </div>

          <div className="w-1/2 flex flex-row p-2">
            <div className="w-4/6 filter grayscale p-2">
              <img src="/icons/centar krikni 2 3.png" alt="" />
            </div>
            <div className="w-2/6 p-2">
              <img src="/icons/Rectangle 11.png" alt="" />
            </div>
          </div>
        </div>

        <div className=" flex flex-row">
          <div className="w-1/2 flex flex-row p-2">
            <div className="w-4/6 filter grayscale p-2">
              <img src="/icons/centar krikni 2 3.png" alt="" />
            </div>
            <div className="w-2/6 p-2">
              <img src="/icons/Rectangle 11.png" alt="" />
            </div>
          </div>

          <div className="w-1/2 flex flex-row p-2">
            <div className="w-4/6 filter grayscale p-2">
              <img src="/icons/centar krikni 2 3.png" alt="" />
            </div>
            <div className="w-2/6 p-2">
              <img src="/icons/Rectangle 11.png" alt="" />
            </div>
          </div>
        </div>
      </div>
 <div className="mx-auto w-4/5 mt-[90px]">
        <h1 className="text-2xl font-bold text-blackColor px-5">
          Рачно изработен накит
        </h1>
      </div>

      <div className="flex flex-wrap justify-around p-4 w-4/5 mx-auto">
        {displayedItems.map((item: any) => (
          <div key={item.id} className="max-w-sm w-64 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-3">
            <div className="max-w-sm bg-white rounded-xl shadow-lg dark:bg-white dark:border-gray-700">
              <Link href={`/products/${item.id}`}>
                <img className="rounded-t-lg" src={item.image} alt="" />
              </Link>
              <div className="p-5">
                <Link href={`/Products/${item.id}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
                    {item.category}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
                  {item.product_info.material}
                </p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
                  {item.price}
                </h5>
              </div>
              <div className="flex flex-row justify-between p-3">
                <button
                  type="button"
                  className="w-32 bg-orangeColor font-bold rounded-2xl text-l p-2 text-center dark:text-white"
                >
                  Купи
                </button>
                <button>
                 
<svg
                      width="40"
                      height="40"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 30C1.5 14.2599 14.2599 1.5 30 1.5C45.7401 1.5 58.5 14.2599 58.5 30C58.5 45.7401 45.7401 58.5 30 58.5C14.2599 58.5 1.5 45.7401 1.5 30Z"
                        fill="white"
                        stroke="#191919"
                        stroke-width="3"
                      />
                      <path
                        d="M39.2095 15.2676C35.4068 15.2676 32.0773 16.8285 30.002 19.467C27.9266 16.8285 24.5971 15.2676 20.7944 15.2676C17.7673 15.2708 14.8652 16.4201 12.7248 18.4633C10.5844 20.5064 9.38036 23.2766 9.37695 26.166C9.37695 38.4707 28.4901 48.4305 29.304 48.8418C29.5185 48.952 29.7584 49.0096 30.002 49.0096C30.2456 49.0096 30.4854 48.952 30.6999 48.8418C31.5138 48.4305 50.627 38.4707 50.627 26.166C50.6235 23.2766 49.4195 20.5064 47.2791 18.4633C45.1387 16.4201 42.2366 15.2708 39.2095 15.2676ZM30.002 45.9941C26.6393 44.1238 12.3234 35.6037 12.3234 26.166C12.3263 24.0223 13.2197 21.9673 14.8077 20.4515C16.3957 18.9357 18.5486 18.0829 20.7944 18.0801C24.3761 18.0801 27.3833 19.9012 28.6392 22.8262C28.7502 23.0841 28.939 23.3047 29.1817 23.4599C29.4243 23.6152 29.7098 23.6981 30.002 23.6981C30.2941 23.6981 30.5796 23.6152 30.8222 23.4599C31.0649 23.3047 31.2537 23.0841 31.3647 22.8262C32.6206 19.8959 35.6278 18.0801 39.2095 18.0801C41.4553 18.0829 43.6082 18.9357 45.1962 20.4515C46.7842 21.9673 47.6776 24.0223 47.6805 26.166C47.6805 35.5896 33.3609 44.1221 30.002 45.9941Z"
                        fill="#191919"
                      />
                    </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {currentPage < totalPages && (
          <button
            className="bg-blackColor text-white px-4 py-2 rounded-2xl"
            onClick={handleLoadMore}
          >
            Види Повеќе Продукти
          </button>
        )}
      </div>
    </main>
  );
};

export default Products;

export const getStaticProps = async () => {
  const res = await fetch("https://cloud-tortoiseshell-myth.glitch.me/products");
  const data = await res.json();

  return {
    props: { data },
  };
};
