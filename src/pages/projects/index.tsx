import { Project } from "@/types";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
  data: Project[]
}

const Projects: NextPage<Props> = ({data}) => {
  const [activePage, setActivePage] = useState(0)
  const [finishedPage, setFinishedPage] = useState(0)

  const [activeProjects, setActiveProjects] = useState<Project[]>([])
  const [finishedProjects, setFinishedProjects] = useState<Project[]>([])

  const [totalActiveProjects, setTotalActiveProjects] = useState(0)
  const [totalFinishedProjects, setTotalFinishedProjects] = useState(0)

  const router = useRouter();


  useEffect(() => {
    const tmpActiveProjects = data.filter(p => !p.end)
    setActiveProjects(tmpActiveProjects.slice(
      activePage * 4,
      activePage * 4 + 4,
    ))
    setTotalActiveProjects(tmpActiveProjects.length)
  
  }, [data, activePage])

  useEffect(() => {
    const tmpFinishedProjects = data.filter(p => !!p.end)
    
    setFinishedProjects(tmpFinishedProjects.slice(
      finishedPage * 4,
      finishedPage * 4 + 4,
    ))
    setTotalFinishedProjects(tmpFinishedProjects.length)
  }, [data, finishedPage])

  const handleChangeActivePage = (page: number) => {
    setActivePage(page)
  }

  const handleChangeFinishedPage = (page: number) => {
    setFinishedPage(page)
  }

  const handleClickProject = (id: string) => {
    router.push(`/projects/${id}`)
  }
  

  return (
    <main className="main mb-[200px] mt-[140px] ">
      <div className="mx-auto w-4/5 mb-[140px]">
        <h1 className=" flex justify-center text-3xl font-extrabold px-5">
          Проекти
        </h1>
      </div>
      <div className=" w-4/5 mx-auto mb-[50px]">
        <h1 className=" text-2xl font-extrabold px-5">Тековни</h1>
      </div>
      <div className=" flex w-4/5 mx-auto">
         <div className="w-1/2 px-5">
         {activeProjects[0] ? <img
            className="filter grayscale h-full "
            src={activeProjects[0].image}
            alt={activeProjects[0].name}
            onClick={() => handleClickProject(activeProjects[0].id)}
          />: null}
        </div> 
        <div className="w-1/2">
        <div className="w-6/6 filter grayscale ">
        {activeProjects[1] ? <img className="object-fill" src={activeProjects[1].image} alt={activeProjects[1].name}
            onClick={() => handleClickProject(activeProjects[1].id)} /> : null}
        </div>
        <div className="w-5/5 flex justify-between mt-[5px]">
        <div className="w-1/2 mr-3 ">
        {activeProjects[2] ? <img 
            src={activeProjects[2].image}
            alt={activeProjects[2].name}
            onClick={() => handleClickProject(activeProjects[2].id)} /> : null}
        </div>
        <div className="w-1/2 mr-3">
        {activeProjects[3] ? <img 
            src={activeProjects[3].image}
            alt={activeProjects[3].name}
            onClick={() => handleClickProject(activeProjects[3].id)} /> : null}
        </div>
      </div>
        </div>
        
      </div>
      <div className="mx-auto w-4/5 mt-[60px] cursor-pointer pl-[22px] ">
      {Array.from(Array(Math.ceil(totalActiveProjects / 4)).keys()).map(i => (
          <span className="hover:underline pl-[5px]" key={i} onClick={() => handleChangeActivePage(i)}>{i}</span>
        ))}
      </div>
      
      <div className=" w-4/5 mx-auto mt-[140px] mb-[50px]">
        <h1 className=" text-2xl font-extrabold px-5">Завршни</h1>
      </div>

      <div className=" flex w-4/5 mx-auto">
        <div className="w-1/2 px-5">
        {finishedProjects[0] ? <img
            className="filter grayscale h-full "
            src={finishedProjects[0].image}
            alt={finishedProjects[0].name}
            onClick={() => handleClickProject(finishedProjects[0].id)}
          /> : null}
        </div>
        <div className="w-1/2">
        <div className="w-6/6 filter grayscale ">
        {finishedProjects[1] ? <img className="object-fill" 
            src={finishedProjects[1].image}
            alt={finishedProjects[1].name}
            onClick={() => handleClickProject(finishedProjects[1].id)} /> : null}
        </div>
        <div className="w-5/5 flex justify-between mt-[5px]">
        <div className="w-1/2 mr-3 ">
        {finishedProjects[2] ? <img src={finishedProjects[2].image}
            alt={finishedProjects[2].name}
            onClick={() => handleClickProject(finishedProjects[2].id)} /> : null}
        </div>
        <div className="w-1/2 mr-3">
        {finishedProjects[3] ? <img src={finishedProjects[3].image}
            alt={finishedProjects[3].name}
            onClick={() => handleClickProject(finishedProjects[4].id)} /> : null}
        </div>
      </div>
        </div>
      </div>
      <div className="mx-auto w-4/5 mt-[60px] cursor-pointer pl-[22px] ">
      {Array.from(Array(Math.ceil(totalFinishedProjects / 4)).keys()).map(i => (
          <span className="hover:underline pl-[5px]" key={i} onClick={() => handleChangeFinishedPage(i)}>{i}</span>
        ))}
      </div>
      
    </main>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const res = await fetch("https://cloud-tortoiseshell-myth.glitch.me/projects");
  const data = await res.json();

  return {
    props: { data },
  };
};
