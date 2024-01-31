import { VolunteersTypes } from "@/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";


interface Props {
  data: any;
}

interface VolunteersPageProps {
  volunteers: VolunteersTypes;
}

const VolunteersPage: NextPage<VolunteersPageProps> = ({ volunteers }) => {

  return (
    <main className="main mb-[200px] mt-[140px] ">
      <div className="mx-auto w-4/5 flex border-2 border-black rounded-2xl ">
        <div className="w-2/5 pr-[15px]">
          <img
            className=" rounded-2xl"
            src={volunteers.img}
            alt=""
          />
        </div>
        <div className="w-3/5">
          <div className="p-[45px]">
            <h4 className="font-bold text-xl pb-2 text-left">
              {volunteers.name}
            </h4>
            <p>
             {volunteers.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-4/5 mt-[70px]">
        <h1 className=" text-3xl font-extrabold ">Проекти во кои учествува</h1>

        <div className="mt-[50px] mx-auto w-4/5 flex justify-center mb-3">
          <div className="w-2/6 mr-3 filter grayscale">
            <Link
              href="#"
              className=" p-[8px] md:dark:text-black rounded-2xl border-2 border-black font-bold"
            >
              Тековен
            </Link>
          </div>
          <div className="w-2/6 mr-3 filter grayscale">
            <Link
              href="#"
              className=" p-[8px] md:dark:text-black rounded-2xl border-2 border-black font-bold"
            >
              Завршен
            </Link>
          </div>
          <div className="w-2/6 mr-3 filter grayscale">
            <Link
              href="#"
              className=" p-[8px] md:dark:text-black rounded-2xl border-2 border-black font-bold"
            >
              Завршен
            </Link>
          </div>
        </div>

        <div className="mx-auto w-4/5 flex justify-center mb-6">
          <div className="w-2/6 mr-3 ">
          <img src="/icons/Component 1.png" alt="" />
          </div>
          <div className="w-2/6 mr-3">
          <img src="/icons/Frame 280.png" alt="" />
          </div>
          <div className="w-2/6">
          <img src="/icons/Frame 281.png" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default VolunteersPage;



export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:5001/volonteers");
  const data: VolunteersTypes[] = await response.json();

  const paths = data.map((item) => {
    return {
      params: {
        id: item.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.id) {
    const response = await fetch(
      `http://localhost:5001/volonteers/${params.id}`
    );
    const data: VolunteersTypes = await response.json();

    return {
      props: {
        volunteers: data,
      },
    };
  }
  return {
    props: {
      volunteers: {},
    },
  };
};
