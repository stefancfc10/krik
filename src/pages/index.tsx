import AccessibilityButton from "@/components/Accessibility";
import ImageScroll from "@/components/ImageScroll";
import { useApp } from "@/context/AppContext";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { enlargeFont } = useApp();

  return (
    <>
      <div className="relative text-center">
        <AccessibilityButton />
        <main className="hero bg-cover max-h-screen main-header ">
          <div className="absolute top-[110px] transform -translate-x-1/2 left-1/2  ">
            <h1
              className={`${
                enlargeFont ? "text-4xl" : "text-3xl"
              } font-extrabold`}
            >
              ПРОМЕНАТА ДОАЃА
            </h1>
            <h1
              className={`${
                enlargeFont ? "text-4xl" : "text-3xl"
              } font-extrabold`}
            >
              ОД МЛАДИТЕ
            </h1>
            <div className="mt-[120px]">
              <h1 className="text-2xl font-bold">Кои сме ние?</h1>
            </div>
            <div className="w-[480px] text-center">
              <p>
                Центарот за младински активизам Крик е невладина, непрофитна
                организација основана од млади луѓе, предводена од млади луѓе и
                работи за и со млади луѓе.
              </p>
            </div>
            <div className="mt-[40px]">
              <Link href={"/about-us"}>
                <button
                  type="button"
                  className="w-80 bg-purpleColor font-extrabold rounded-3xl text-xl px-[30px] py-[16px] text-center dark:border-gray-900 dark:text-black"
                >
                  Повеќе за Нас
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
      <div className="flex mx-auto w-4/5 bg-blackColor  rounded-2xl relative top-[-160px] ">
        <div className="w-1/2 px-5">
          <div className="mt-[68px] ">
            <h1 className={`${
                enlargeFont ? "text-4xl" : "text-3xl"
              } font-extrabold text-yellowColor pb-[40px]`} >
              НАСКОРО
            </h1>
            <h1 className="text-white text-l pb-[40px] ">Нижеме заедно</h1>
            <p className="text-white mt-[24px] pb-[80px] ">
              Проектот „Еднакви можности за девојчињата и младите жени во
              Северна Македонија” го спроведуваат Националниот младински совет
              на Македонија и Stella Network, со финансиска поддршка од страна
              на Британската амбасада во Скопје
            </p>
            <div className="flex flex-row gap-[15px] mt-[20px]">
              <button
                type="button"
                className="  mr-[24px] bg-yellowColor font-bold rounded-2xl text-sm px-[60px] py-[10px] text-center dark:border-gray-900 dark:text-dark"
              >
                Види Повеќе
              </button>
              <button
                type="button"
                className="  mr-[24px] bg-purpleColor font-bold rounded-2xl text-sm px-[60px] py-[10px] text-center dark:border-gray-900 dark:text-dark"
              >
                Пријави се!
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src="/homepage/homepage_nastan_750x655px.jpg" alt="" />
        </div>
      </div>
      <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-900 lg:my-8" />
      <div className="flex mx-auto my-8 w-3/4 my-6 ">
        <div className="w-4/12 text-center  ">
          <h2 className="text-5xl font-extrabold text-orangeColor">320+</h2>
          <h2 className="text-xl text-orangeColor">Проекти</h2>
        </div>

        <div className="w-4/12 text-center">
          <h2 className="text-5xl font-extrabold text-orangeColor">580+</h2>
          <h2 className="text-xl  text-orangeColor">Волонтери</h2>
        </div>

        <div className="w-4/12 text-center ">
          <h2 className="text-5xl font-extrabold text-orangeColor">25+</h2>
          <h2 className="text-xl text-orangeColor">Партнери</h2>
        </div>
      </div>
      <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-900 lg:my-8" />

      <div className="mx-auto w-4/5 flex my-5">
        <div className="w-4/6  mr-[10px] ">
          <img className="rounded-2xl" src="/icons/image 22.png" alt="" />
        </div>
        <div className="w-2/6 bg-blackColor rounded-2xl px-5">
          <h1 className="text-2xl text-white font-bold mt-[48px]">Стани</h1>
          <h1 className="text-white text-xl font-bold">Волонтер</h1>
          <p className="text-white mt-[72px] ">
            Сакаш да работиш со млади лица? Оваа можност е токму за тебе.
          </p>
          <div className="mt-[84px]">
            <Link href={"/volunteers-app"}>
              <button
                type="button"
                className=" hover:text-white border border-gray-800  font-medium rounded-2xl text-sm px-[40px] py-[10px] text-center me-2 mb-2 dark:border-white dark:text-white"
              >
                Придружи ни Се
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto w-4/5 mt-[140px]">
        <h1 className={`${
                enlargeFont ? "text-4xl" : "text-3xl"
              } font-extrabold px-5`} >Најнови вести</h1>
        <div className="container mx-auto mt-8">
          <ImageScroll />
        </div>
      </div>

      <div className="mx-auto w-4/5 mt-[70px]">
        <div className="flex flex-row justify-end ">
          <button
            type="button"
            className=" bg-purpleColor  font-extrabold rounded-3xl text-xl px-[15px] py-[10px] text-center dark:border-gray-900 dark:text-black"
          >
            Види За Цел Месец
          </button>
        </div>
      </div>
      <div className="mx-auto w-4/5 mt-[70px]">
        <h1 className={`${
                enlargeFont ? "text-4xl" : "text-3xl"
              } font-extrabold px-5`}>Нашите услуги</h1>
      </div>
      <div className="flex mx-auto my-8 w-4/5">
        <div className="w-1/2 px-5">
          <img
            className="filter grayscale w-[748px] h-[608px] rounded-2xl"
            src="/homepage/homepage_uslugi_cardimg.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <div className="flex items-center justify-between ">
            <h1 className="font-bold text-3xl pb-2 text-left">
              01 Мултифункционален центар Крикни
            </h1>
            <svg
              className="ml-[35px]"
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="51" height="51" rx="25.5" fill="#191919" />
              <path
                d="M17.8813 34.1667L32.9473 19M32.9473 19V33.56M32.9473 19H18.484"
                stroke="white"
                stroke-width="2"
                stroke-linecap="square"
              />
            </svg>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur. Non at at risus dolor
            accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus
            volutpat.
          </p>
          <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-900 lg:my-8" />

          <div className="flex items-center justify-between">
            <h1 className="font-bold text-3xl pb-2 text-left">
              02 Независни станбени единици
            </h1>
            <svg
              className="ml-[35px]"
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="51" height="51" rx="25.5" fill="#FB5E3C" />
              <path
                d="M17.8813 34.1667L32.9473 19M32.9473 19V33.56M32.9473 19H18.484"
                stroke="white"
                stroke-width="2"
                stroke-linecap="square"
              />
            </svg>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur. Non at at risus dolor
            accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus
            volutpat.
          </p>
          <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-900 lg:my-8" />

          <div className="flex items-center justify-between">
            <h1 className="font-bold text-3xl pb-2 text-left">
              03 советувалиште за Млади и Родители
            </h1>

            <div className="flex flex-row justify-end">
              <svg
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="51" height="51" rx="25.5" fill="#FB5E3C" />
                <path
                  d="M17.8813 34.1667L32.9473 19M32.9473 19V33.56M32.9473 19H18.484"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="square"
                />
              </svg>
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur. Non at at risus dolor
            accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus
            volutpat.
          </p>
          <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-900 lg:my-8" />
        </div>
      </div>
      <div className="mx-auto w-4/5 mt-[70px] mb-[54px]">
        <h1 className=" text-4xl font-extrabold px-5">Партнери</h1>
      </div>
      <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-900 lg:my-8" />
      <div className=" mx-auto w-4/5 flex items-center space-x-8">
        <div className="w-1/4">
          <img src="/icons/VCS 1.png" alt="" />
        </div>
        <div className="w-1/4">
          <img src="/icons/Frame 92.png" alt="" />
        </div>
        <div className="w-1/4">
          <img src="/icons/nmsmakedonija 1.png" alt="" />
        </div>
        <div className="w-1/4 ">
          <img src="/icons/stella-network 2.png" alt="" />
        </div>
      </div>

      <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-900 lg:my-8" />
    </>
  );
}
