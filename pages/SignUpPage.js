import { ChevronLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import Inputs from "../components/Inputs";
import Nav from "../components/Nav";

const SignUpPage = () => {
  return <div>
    <div>
    <Nav/>
    <Link href='/'>
    <ChevronLeftIcon className="w-[45px] h-[45px] absolute left-[90px] bg-gray  bg-opacity-10 rounded-full cursor-pointer "/>
    </Link>

    </div>
    <main className="flex flex-col">
        <h1 className="text-center font-Ko text-[60px] font-normal leading-[77.4px] mb-12 text-primary ">CREATE ACCOUNT</h1>
        <form className="flex flex-col justify-center items-center">
         <Inputs type="text" className="Inputs" placeholder="Name (surname first)"/>
         <Inputs type="email" className="Inputs" placeholder="Email Address"/>
         <Inputs type="password" className="Inputs" placeholder="PASSWORD"/>
         <Inputs type="password" className="Inputs" placeholder="CONFIRM PASSWORD"/>
        </form>
        {/* Solve centering items problem  */}
        <div className="flex  items-center pl-[480px] pr-[430px]">
        <button className="w-[34px] h-[34px] border-4 border-primary border-solid rounded-full mr-[9px] "/>
        <h3 className="text-xl font-Ko font-normal leading-[25.8px] text-primary">I accept the Terms & Conditions and Privacy and Cookie Notice.</h3>
        </div>
    <div className="flex flex-row items-center justify-center">
         <button className=" w-60 h-16 font-Ko border-solid rounded-[40px] text-primary
            border-primary border-4 text-xl mt-6 mb-[22px]  hover:shadow-sm hover:border-white hover:text-MyWhite hover:bg-primary ">
                CREATE ACCOUNT
            </button>
  </div>
    <p className="text-center text-xl font-Ko font-normal leading-[26px] text-primary mb-6 ">ALREADY HAVE AN ACCOUNT? <Link href="/LoginPage">LOGIN</Link></p>
    </main>
    
  </div>;
};

export default SignUpPage;
