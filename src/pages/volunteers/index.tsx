import { VolunteersTypes } from "@/types";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";

interface Props {
data: any,

}

const Volunteers: NextPage<Props> = ({data}) => {
  return (
    <main className="main mb-[200px] mt-[140px] ">
      <div className="mx-auto w-4/5 mb-[50px]">
        <h1 className=" flex justify-center text-3xl font-extrabold px-5">
        Нашите Волонтери
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
          <h1 className="text-xl font-bold">Долг рок</h1>
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
          <h1 className="text-xl font-bold">Краток рок</h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-around p-4 w-4/5 mx-auto">
    {data.map((data: VolunteersTypes) => (
        <div key={data.id} className="max-w-sm w-64 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-3">
            <div className="max-w-sm bg-white rounded-2xl shadow-lg dark:bg-white dark:border-gray-700">
                <Link href={`/volunteers/${data.id}`}>
                    <img className="rounded-t-lg" src={data.img} alt="" />
                </Link>
                <div className="p-5">
                    <Link href={`/volunteers/${data.id}`} >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">{data.name}</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">{data.age}, {data.place}</p>
                </div>
            </div>
        </div>
    ))}
</div>



      
    
    </main>
  );
};


export default Volunteers;

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch ("http://localhost:5001/volonteers");
    const data = await res.json();

    return {

        props: { data}
    }
}