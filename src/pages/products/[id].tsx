import { ShopTypes, VolunteersTypes } from "@/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";


interface ProductPageProps {
  product: ShopTypes;
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  
  return (
    <main className="main mb-[200px] mt-[140px] ">
      <div className="mx-auto w-4/5 flex border-2 border-black rounded-2xl ">
        <div className="w-2/5 pr-[15px]">
          {(product?.images ?? []).map(i => (
            <img
            key={i}
            className=" rounded-2xl"
            src={i}
            alt={i}
          />
          ))}
          
        </div>
        <div className="w-3/5">
          <div className="p-[45px]">
            <h4 className="font-bold text-xl pb-2 text-left">
              {product.category}
            </h4>
            <p>
             {product.product_info.description}
            </p>
            <p>
             {product.price}
            </p>
          </div>
        </div>
      </div>

     
    </main>
  );
};

export default ProductPage;



export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:5001/products");
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
      `http://localhost:5001/products/${params.id}`
    );
    const data: ShopTypes = await response.json();

    return {
      props: {
        product: data,
      },
    };
  }
  return {
    props: {
      product: {},
    },
  };
};
