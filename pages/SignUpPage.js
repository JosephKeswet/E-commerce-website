import { ChevronLeftIcon } from "@heroicons/react/solid";
import React from "react";
import Nav from "../components/Nav";

const SignUpPage = () => {
  return <div>
    <div>
    <Nav/>
    <ChevronLeftIcon className="w-[45px] h-[45px] absolute left-[90px] bg-gray  bg-opacity-10 rounded-full cursor-pointer "/>
    </div>
    <main>
        <h1 className="text-center font-Ko text-[60px] font-normal leading-[77.4px] mb-12 text-primary ">CREATE ACCOUNT</h1>
        <form className="flex flex-col justify-center items-center">
         <input className="Inputs " type="text" placeholder="Name (surname first)" />
         <input className="Inputs" type="email" placeholder="Email Address" />
         <input className="Inputs" type="password" placeholder="PASSWORD" />
         <input className="Inputs" type="password" placeholder="CONFIRM PASSWORD"/>
        </form>
        {/* Solve centering items problem  */}
        <div className="flex  items-center pl-[480px] pr-[430px]">
        <button className="w-[34px] h-[34px] border-4 border-primary border-solid rounded-full mr-[9px] "/>
        <h3 className="text-xl font-Ko font-normal leading-[25.8px] text-primary">I accept the Terms & Conditions and Privacy and Cookie Notice.</h3>
        </div>
    </main>
  </div>;
};

export default SignUpPage;
