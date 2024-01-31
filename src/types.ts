 export interface VolunteersTypes {
    id: string;
    name: string;
    place: string;
    img: string;
    age:string;
    description: string;
 }

 export interface ShopTypes {
   id:string;
   category:string;
   image:string;
   images:string[];
   product_info:ProductInfoTypes;
   price:string; 
 }

 export interface ProductInfoTypes {
  description: string;
  material: string;
 }

 export interface OurTeam { 
    id: string
    name: string
    image: string
    title: string
    description: string
  
}

export interface Project {
  id: string
  name: string
  image:string
  start: string
  end: string | null
}