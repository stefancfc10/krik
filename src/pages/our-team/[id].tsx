import { OurTeam, ShopTypes, VolunteersTypes } from "@/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";


interface Props {
  person: OurTeam;
}

const PersonPage: NextPage<Props> = ({ person }) => {
  
  return (
    <div className="flex mx-auto  mt-[150px] mb-[150px] w-4/5">
    <div className="w-1/2 px-5">
      <img
      className="rounded-2xl"
        src= {person.image}
        alt=""
      />
    </div>
    <div className="w-1/2">
      <h4 className="font-bold text-2xl pt-[120px] pb-2 text-left">
       {person.name}
      </h4>
      <p>
        {person.description}
       
      </p>
    </div>
  </div>
  );
};

export default PersonPage;


export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://cloud-tortoiseshell-myth.glitch.me/our-team");
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
      `https://cloud-tortoiseshell-myth.glitch.me/our-team/${params.id}`
    );
    const data: ShopTypes = await response.json();

    return {
      props: {
        person: data,
      },
    };
  }
  return {
    props: {
      person: {},
    },
  };
};
