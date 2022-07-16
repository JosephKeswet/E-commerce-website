import { ChevronLeftIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import Search from "../components/Search";
import CardData from "../Data/CardData";
import YellowShoe from '../images/Rectangle 12.png'
import shoe1 from '../images/Rectangle 14.png'
import shoe2 from '../images/Rectangle 15.png'
import shoe3 from '../images/Rectangle 16.png'
import shoe4 from '../images/Rectangle 17.png'
import Reviewgirl from '../images/ReviewGirl.png'
import star from '../images/Star 1.png'

const CartItem = () => {
  const reviewNames = [
  {name:"CATHERINE ERSTOE"},
    {name:"JOSEPH MORGAN"},
    {name:"SADIE SINK"},
   {name: "MILLIE BOBBY BROWN"}
  ]


  const DetailSection = ()=>(
      <div className="w-[644px] mt-[79.5px] ml-6 ">
      <h1 className="text-[30px] font-normal font-Ko leading-[39px] text-primary">JORDAN</h1>
      <h3 className="text-xl font-Ko font-normal text-primary mt-6">AIR JORDAN 1 MID SNEAKERS</h3>
      <div className="flex items-center mt-6">
      <Image src={star} objectFit="contain" />
      <Image src={star} objectFit="contain" />
      <Image src={star} objectFit="contain" />
      <Image src={star} objectFit="contain" />
      <Image src={star} objectFit="contain" />
      <p className="text-xl font-normal ml-6 leading-[23px] font-serif text-primary">2,300 reviews</p>
      </div>
      <h1 className="mt-6 text-[50px] font-serif font-normal leading-[57px] text-primary">$ 182</h1>
      <h3 className="mt-6 mb-1 text-xl font-normal font-Ko text-primary leading-[26px]">
        SHOE SIZE 
        <span className="text-xl font-Ko font-normal text-ash pl-[10px]">US</span>
      </h3>
      <ul className="flex gap-x-6 mb-6 text-xl font-Ko font-normal leading-[25.8px] text-primary">
        <li>3.5</li>
        <li>4</li>
        <li>4.5</li>
        <li>5</li>
        <li>5.5</li>
        <li>6</li>
        <li>6.5</li>
        <li>7</li>
      </ul>
      <h1 className="text-xl text-primary leading-[25.8px] font-normal font-Ko ">15 ITEMS LEFT</h1>
      <button className='w-[644px] h-[15px] text-xl mb-[29px] bg-primary  rounded-[40px]
      border-solid border-2 border-black'
      />
      <div className="flex justify-center items-center w-[126px] h-[45px] border-4 border-primary rounded-[40px] mb-[24px]">
      <button className="text-[36px] leading-[46.4px] font-Ko font-normal text-primary pr-6 cursor-pointer">-</button>
          <h1 className="text-[24px] leading-[30.96px] font-Ko font-normal text-primary">2</h1>
      <button className="text-[36px] leading-[46.4px] font-Ko font-normal text-primary pl-6 cursor-pointer">+</button>
    </div>
    <h2 className="mb-[24px] text-xl text-primary leading-[25.8px] font-Ko font-normal">2 TO 5 DAYS DELIVERY TIME</h2>
    <button className='w-[223px] h-[70px] text-xl mr-6 bg-MyWhite py-4 rounded-[40px]
      border-solid border-4 border-primary leading-[26px] font-Ko font-normal text-primary'
      >
      ADD TO CART
      </button>
      <button className='w-[198px] h-[70px] text-xl bg-MyWhite text-primary rounded-[40px]
      border-solid border-4 border-primary leading-[26px] font-Ko font-normal '
      >
      BUY NOW
      </button>
      <p className="mt-6 text-[15px] leading-[17px] font-serif font-normal text-primary">All shoe are delivered through JLS Express courier service
        from our store at Califonia, USA to your doorstep. Exchange and return available on all shoes. Terms and conditions apply.
      </p>
    </div>
  )


    const ReviewSection = () => (
      <section className="pl-[100px] pb-9 bg-primary">
      <h1 className="text-[60px] text-MyWhite leading-[77px] font-Ko font-normal pt-[95px] pb-[36px]">REVIEWS</h1>
    {reviewNames.map((name)=>(
      <div className="w-[1312px] h-[250px] border rounded-[300px] bg-MyWhite relative mb-6 ">
      <div className="w-[275px] h-[224px] rounded-[267.933px] absolute left-[14px] top-[13px]">
        <Image src={Reviewgirl} objectFit="contain"/>
      </div>
  <div className="absolute left-[313px] top-9">
    <h1 className="text-2xl text-primary leading-[30.9px] font-Ko font-normal ">{name.name}</h1>
    <p className="text-xl text-primary leading-[22.72px] font-normal font-serif mt-[29px] w-[680px] h-[70px]">I recommend this shoe if your are looking for a combination of comfort and style.
    I can’t count how many compliments I have gotten on my shoe.</p>
    <p className="text-[15px] text-primary leading-[19.35px] font-normal font-Ko absolute left-0 top-[159px]">March 15th, 2022 </p>
  </div>
  <div className="absolute left-[1035px] top-[186px] ">
    <div className="flex items-center">
      <Image src={star} objectFit="contain" />
      <Image src={star} objectFit="contain" />
      <Image src={star} objectFit="contain" />
      <Image src={star} objectFit="contain" />
      <Image src={star} objectFit="contain" />
      </div>
  </div>
  </div>
    ))}     
  </section>
    )


  return <div>
        <Nav/>
        <div>
            <ChevronLeftIcon className="w-[45px] h-[45px] absolute left-[90px] bg-gray  bg-opacity-10 rounded-full cursor-pointer "/>
            <div className="mb-30.5px]">
              <Search/>
            </div>
        </div>
      <section className="flex mb-[61px] ">
        {/* Shoe section */}
        <div className="ml-[100px] mt-[79.5px]">
          <div className="w-[644px] h-[521px]">
          <Image src={YellowShoe} objectFit="contain"/>
          </div>
          <div className="flex mt-9">
            <div className="w-[136px]">
              <Image src={shoe1} objectFit="contain"/>
            </div>
            <div className="w-[136px]">
              <Image src={shoe2} objectFit="contain"/>
            </div>
            <div className="w-[136px]">
              <Image src={shoe3} objectFit="contain"/>
            </div>
            <div className="w-[136px]">
              <Image src={shoe4} objectFit="contain"/>
            </div>
          </div>

        </div>

      {/* Details section */}
    <DetailSection/>
  
    </section>
    <section>
      <h1 className="text-[60px] ml-[114px] mb-[48px] leading-[77px] font-normal text-primary font-Ko">RECOMMENDATIONS</h1>
      <div className="ml-[100px]">
      <Card product={CardData}/>
      </div>
    </section>
      <ReviewSection/>

  </div>;
};

export default CartItem;
