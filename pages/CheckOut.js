import { ChevronLeftIcon } from "@heroicons/react/solid";
import React from "react";
import Inputs from "../components/Inputs";
import Nav from "../components/Nav";
import Search from "../components/Search";

const CheckOut = () => {
  return <div>
    
    <Nav/>
    <div>
    <ChevronLeftIcon className="w-[45px] h-[45px] absolute left-[90px] bg-gray  bg-opacity-10 rounded-full cursor-pointer "/>
    <Search/>
    </div>

    <div className="flex justify-center items-center pt-[29px] ">
        <div>
            <div className="flex items-center">
        <button className="w-[15px] h-[15px] bg-primary rounded-full cursor-pointer"/>
        <hr className="border-1 border-dashed w-[330px] border-primary" />
        </div>
        <h1 className="LoaderText">1 DELIVERY</h1>
        </div>
        <div>
            <div className="flex items-center">
        <button className="w-[15px] h-[15px] bg-MyWhite rounded-full border-[3px] border-primary border-solid cursor-pointer "/>
        <hr className="border-1 border-dashed w-[330px] border-primary" />
        </div>
        <h1 className="LoaderText text-ash">2.PAYMENT</h1>
        </div>
        <div>
        <button className="w-[15px] h-[15px] bg-MyWhite rounded-full border-[3px] border-primary border-solid cursor-pointer"/>
        <h1 className="LoaderText text-ash">3.REVIEW</h1>
        </div>
    </div>
<main className="flex mx-[100px] items-start mb-5">
    <section className="mt-[54px]">
    <Inputs className="Inputs" type="text" placeholder="NAME" />
    <Inputs className="Inputs" type="text" placeholder="COUNTRY/REGION" />
    <Inputs className="Inputs" type="text" placeholder="ADDRESS" />
    <Inputs className="Inputs" type="text" placeholder="CITY" />
    <Inputs className="Inputs" type="text" placeholder="STATE" />
    <Inputs className="Inputs" type="text" placeholder="POSTAL OR ZIP CODE" />
    <Inputs className="Inputs" type="tel" placeholder="PHONE" />
   <div className="flex  items-center">
    <button className="w-[34px] h-[34px] border-4 border-primary border-solid rounded-full mr-[9px] "/>
    <p className="font-Ko text-xl font-normal leading-[26px] text-primary">Use as billing address</p>
    </div>
    </section>
    <section className="ml-[359px] mt-[74px]">
        <h1 className="text-2xl font-Ko font-normal text-primary underline">SUMMARY</h1>
        <div className="flex mt-[31px]">
        <h3 className="pr-[161px] font-Ko font-normal text-xl leading-[26px] text-primary">TOTAL</h3>
        <h3 className="text-xl font-Ko font-normal text-primary leading-[26px]">USD $ 1,675</h3>
        </div>
        <button className=" W-[280px] h-16 font-Ko border-solid rounded-[40px] text-primary
            border-primary border-4 px-[62px]  text-xl mt-[37px]   hover:shadow-sm hover:border-white hover:text-MyWhite hover:bg-primary ">
                SAVE AND CONTINUE
            </button>
    </section>
    </main>
  </div>;
};

export default CheckOut;
