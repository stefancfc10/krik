import ProgressBar from "@/components/Progressbar";
import { useApp } from "@/context/AppContext";
import { OurTeam, Project, ShopTypes, VolunteersTypes } from "@/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  project: Project;
}

const ProjectPage: NextPage<Props> = ({ project }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress: number) => (prevProgress < 31 ? prevProgress + 1 : 31));
    }, 50);
    

    return () => clearInterval(interval);
  }, []);
  const { enlargeFont } = useApp();
  return (
    <main className="main mb-[200px] mt-[140px] ">
      <div className="mx-auto w-4/5  rounded-2xl ">
          <img className="rounded-2xl h-96 w-full object-cover" src={project.image} alt="" />
        
      </div>

      <div className="mx-auto w-4/5 mt-[70px]">
        <h1 className={`${
                enlargeFont ? "text-4xl" : "text-2xl"
              } font-extrabold text-center `}>
          Млади за активно општество
        </h1>
        <div className="w-1/2 mx-auto mt-[40px] ">
          <p className="text-center">
            Проектот ќе се фокусира на обезбедување и креирање иновативна
            дигитална алатка која ќе обезбеди онлајн можност за учење на младите
            од партнерски земји за развој на заедницата, активно граѓанство и
            процеси на одлучување.
          </p>
        </div>
      </div>

      <div className="mx-auto w-4/5 flex border-2 border-black rounded-2xl mt-[140px] mb-[128px] ">
        <div className="w-2/5 pl-[60px] pt-[56px] pb-[280px] bg-blackColor rounded-2xl">
          <h1 className="text-white text-3xl font-bold">Цел на </h1>
          <h1 className="text-white text-3xl font-bold">проектот</h1>
        </div>
        <div className="w-3/5">
          <div className="p-[45px]">
            <p>
              - Да се ​​создаде иновативна дигитална алатка која ќе обезбеди
              можност за учење на младите луѓе за развој на заедницата, активно
              граѓанство и процеси на одлучување;
            </p>
            <p>
              - Да се ​​зајакне чувството на припадност кон европското
              граѓанство на младите и да се промовира важноста на европските
              вредности;
            </p>
            <p>
              - Да се ​​поттикнат и да се зајакнат младите да се вклучат во
              процесите на донесување одлуки на локално/национално и меѓународно
              ниво;
            </p>
            <p>
              - Да се ​​воведе процесот на креирање политики на
              локално/национално/меѓународно ниво во областа на млади.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-4/5 flex my-5">
        <div className="w-4/6  mr-[10px] border-2 border-black rounded-2xl  pl-[60px] pt-[80px] ">
         <h1 className="text-3xl font-bold">За кого е наменет</h1>
         <h1 className="text-3xl font-bold">овој проект?</h1>
         <p className="pt-[20px] pb-[90px]">Lorem ipsum dolor sit amet consectetur. Ipsum malesuada rutrum sem porttitor quam rhoncus elit et vulputate. Eu orci eu sit montes sit dui vitae consequat. Sed fermentum consequat amet elit urna in tincidunt curabitur</p>
        </div>
        <div className="w-2/6 rounded-2xl px-5">
         <img className="w-full rounded-2xl h-full" src={project.image} alt="" />
       
        </div>
        
      </div>
      <div className="mx-auto w-4/5 flex items-center justify-center mt-[140px]  ">
      <ProgressBar progress={progress} />
      
    </div>
    <div className="mx-auto w-4/5 flex justify-end mt-[45px]">
      <p>Заинтересиран/а си?</p>
        <div className="pl-[24px]">
        <Link href={"/volunteers-app"}>
        <button
                type="button"
                className="  mr-[24px]  bg-blackColor font-bold rounded-2xl text-sm px-[60px] py-[10px] text-center dark:border-gray-900 dark:text-white"
              >
                Пријави Се!
              </button>
              </Link>
       
        </div >
        
      </div>
      <div className="mx-auto w-4/5 flex justify-end pt-[40px]">
        <p>Сакаш да не поддржиш?</p>
        <div className="pl-[24px]">
        <Link href={"/donation"}>
        <button
                type="button"
                className="  mr-[24px] bg-orangeColor font-bold rounded-2xl text-sm px-[60px] py-[10px] text-center dark:border-gray-900 dark:text-white"
              >
                Донирај
              </button>
              </Link>

        
        </div>
        
      </div>
      
    </main>
  );
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    "https://cloud-tortoiseshell-myth.glitch.me/projects"
  );
  const data: ShopTypes[] = await response.json();

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
      `https://cloud-tortoiseshell-myth.glitch.me/projects/${params.id}`
    );
    const data: ShopTypes = await response.json();

    return {
      props: {
        project: data,
      },
    };
  }
  return {
    props: {
      project: {},
    },
  };
};
function setProgress(arg0: (prevProgress: number) => number) {
  throw new Error("Function not implemented.");
}

