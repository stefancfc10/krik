import { useApp } from "@/context/AppContext";
import { NextPage } from "next";
import { useState } from "react";

const Services: NextPage = () => {
  const [activeTab, setActiveTab] = useState(0)
  const { enlargeFont } = useApp();
  return (
    <main className="main mb-[200px] mt-[140px]">
      <div className="flex mx-auto my-8 w-3/5 my-6 mb-[140px] ">
        <div
          className={`w-4/12 text-center tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => setActiveTab(0)}
        >
          <h2 >Центар Крикни</h2>
        </div>

        <div
          className={`w-4/12 text-center tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => setActiveTab(1)}
        >
          <h2>Независни станбени единици</h2>
        </div>

        <div
          className={`w-4/12 text-center tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => setActiveTab(2)}
        >
          <h2>Советувалиште</h2>
        </div>
      </div>

      {activeTab === 0 && 
      <>
      <div className=" mx-auto w-4/5 ">
        <h1 className={`${
                enlargeFont ? "text-4xl" : "text-3xl"
              } font-extrabold px-5 my-6`}>Центар Крикни</h1>
      </div>
      <div className="mx-auto w-4/5 mb-[140px]">
        <p>
          Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu
          ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit.
          Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra
          semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris
          adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc
          dolor vitae vel sem aliquet. Aliquam est integer libero morbi congue
          est porttitor. Vitae tellus lorem arcu tortor sem tellus hendrerit
          nibh. Mattis volutpat nunc parturient dignissim. Tincidunt mauris
          velit congue rhoncus ut eget malesuada purus. Ut commodo tempus sed
          consectetur sem etiam. Vel enim aliquam urna orci tempus mauris vitae
          tincidunt habitant.{" "}
        </p>
      </div>

      <div className=" mx-auto w-4/5 mt-8 ">
        <h2 className={`${
                enlargeFont ? "text-2xl" : "text-xl"
              } font-extrabold `}>Галерија Со Активности</h2>
      </div>

      <div className="mx-auto w-4/5 flex my-5">
        <div className="w-2/6 mr-3">
          <img src="/icons/Rectangle 11.png" alt="" />
        </div>
        <div className="w-4/6 filter grayscale">
          <img src="/icons/centar krikni 2 3.png" alt="" />
        </div>
      </div>
      <div className="mx-auto w-4/5 flex justify-center mb-6">
        <div className="w-2/6 mr-3 filter grayscale">
          <img src="/icons/Rectangle 21.png" alt="" />
        </div>
        <div className="w-2/6 mr-3">
          <img src="/icons/Rectangle 22.png" alt="" />
        </div>
        <div className="w-2/6">
          <img src="/icons/Rectangle 23.png" alt="" />
        </div>
      </div>
      </>}

      
      {activeTab === 1 && null}

      
      {activeTab === 2 && null}
    </main>
  );
};

export default Services;
