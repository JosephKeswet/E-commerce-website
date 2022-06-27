import React from "react";
import Image from 'next/image'
import skate from '../images/Rectangle 19.png'

const MiddleSection = () => {
  return <div className=" flex pl-[100px] font-Ko text-primary">
    <div className=" w-6/12  h-[473px]">
        <h1 className="text-[170px] leading-[160px] whitespace-wrap font-normal">YOU OWN ALL THAT FREEDOM</h1>
    </div>
    <div className="relative w-[840px] h-[550px]">
    <Image
    src={skate}
    layout='fill'
    />
    </div>
  </div>;
};

export default MiddleSection;
