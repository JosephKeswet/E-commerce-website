import React from "react";
import Nav from '../components/Nav'
import Search from "../components/Search";
import Categories from '../components/Categories'
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { ChevronRightIcon } from '@heroicons/react/solid'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { PlusCircleIcon } from '@heroicons/react/solid'
import CardData from "../Data/CardData";
import Card from "../components/Card";
import Image from "next/image";

const CategoriesPage = () => {
  return <div>
    <Nav/>
    <div >
        <ChevronLeftIcon className="w-[45px] h-[45px] absolute left-[90px] bg-gray  bg-opacity-10 rounded-full "/>
        <div className="mb-[56.5px]">
            <Search/>
        </div>
    </div>
        
    <div className="absolute left-[100px] font-Ko text-primary ">
        <h1 className="text-6xl leading-77px">CATEGORIES</h1>
        <div className="flex">
            <ul>
                <li className="w-[275px] cursor-pointer ">BRAND</li>
                <li className="w-[275px] cursor-pointer">COLOR </li>
                <li className="w-[275px] cursor-pointer">PRICE </li>
                <li className="w-[275px] cursor-pointer">SIZE </li>
            </ul>
            <div>
                <ChevronDownIcon className='w-5  pb-1 cursor-pointer'/>
                <ChevronDownIcon className='w-5  pb-1 cursor-pointer'/>
                <ChevronDownIcon className='w-5  pb-1 cursor-pointer'/>
                <ChevronDownIcon className='w-5  pb-1 cursor-pointer'/>
            </div>
            <div className="grid grid-cols-3 overflow-y-scroll h-screen scrollbar-hide  ">
                {CardData?.map((shoes) => (  
                <div className="  px-3 pb-5 mx-4 " key={shoes.id}>
                    <div className=" w-80">
                        <Image   src={shoes.img}  objectFit='contain' width={400} height={400}/>
                        <h3 className="text-2xl ">JORDAN</h3>
                        <h4 className="text-xl">Air Jordan 1 Retro High “University Blue” sneakers</h4>
                        <div className="flex justify-between">
                            <h3 className="my-6 text-3xl">$ 357</h3>
                            <PlusCircleIcon className="w-10 pl-2 animate-pulse cursor-pointer"/>
                        </div>
                </div>
            </div>
            ))
            }
        </div>
    </div>
    </div>

  </div>;
};

export default CategoriesPage;
