import { ChevronLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import Inputs from "../components/Inputs";
import Nav from "../components/Nav";

const LoginPage = () => {
  return <div>
        <div>
    <Nav/>
    <ChevronLeftIcon className="w-[45px] h-[45px] absolute left-[90px] bg-gray  bg-opacity-10 rounded-full cursor-pointer "/>
    </div>
    <main className="flex flex-col justify-center items-center">
        <h1 className="text-center font-Ko text-[60px] font-normal leading-[77.4px] mb-12 text-primary ">LOGIN</h1>
        <form className="flex flex-col justify-center items-center">
         <Inputs className="Inputs" type="email" placeholder="Email" />
         <Inputs className="Inputs" type="password" placeholder="PASSWORD" />
        </form>
        {/* Solve centering items problem  */}
        <div className="flex justify-between  items-center w-[644px]">
            <div className="flex items-center">
        <button className="w-[34px] h-[34px] border-4 border-primary border-solid rounded-full mr-[9px] "/>
        <h3 className="text-xl font-Ko font-normal leading-[25.8px] text-primary">REMEMBER ME.</h3>
        </div>
        <h3 className="text-xl font-Ko font-normal text-primary">FORGOT PASSWORD</h3>
        </div>
  <div className="flex flex-row items-center justify-center">
         <button className=" w-60 h-16 font-Ko border-solid rounded-[40px] text-primary
            border-primary border-4 text-xl mt-6 mb-[22px]  hover:shadow-sm hover:border-white hover:text-MyWhite hover:bg-primary ">
                LOGIN
            </button>
  </div>
    <p className="text-center text-xl font-Ko font-normal leading-[26px] text-primary mb-6 ">DON'T HAVE AN ACCOUNT? <Link href="/SignUpPage">CREATE ACCOUNT.</Link></p>
    </main>
    
  </div>;
};

export default LoginPage;
