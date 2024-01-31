import { OurTeam, Project, ShopTypes, VolunteersTypes } from "@/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";


interface Props {
  project: Project;
}

const ProjectPage: NextPage<Props> = ({ project }) => {
  
  return (
    <></>
  );
};

export default ProjectPage;


export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:5001/projects");
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
      `http://localhost:5001/projects/${params.id}`
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
