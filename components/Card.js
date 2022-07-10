import React, { useEffect, useState } from "react";
import Image from 'next/image'
// import shoe from '../images/Rectangle 6.png'
import { PlusCircleIcon } from '@heroicons/react/solid'

const Card = ({product}) => {
  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   fetch('https://cat-fact.herokuapp.com/facts')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //     })
  // }, [])
  // console.log(data);

 
  return <div className="flex overflow-scroll overflow-y-hidden my-24 mx-28 scrollbar-hide font-Ko text-primary">
  
 
      {product?.map((shoes) => (  
        <div className="flex items-end  px-3 pb-5 mx-4 ">
          <div className=" w-80">
      <Image   src={shoes.img}  objectFit='contain' width={400} height={400}/>
      <h3 className="text-2xl ">JORDAN</h3>
    <h4 className="text-xl">Air Jordan 1 Retro High “University Blue” sneakers</h4>
    <div className="flex justify-between">
    <h3 className="my-6 text-3xl">$ 357</h3>
    <PlusCircleIcon className="w-10 pl-2"/>
    </div>
    </div>
   
      </div>

      ))
  }
  

  
    {/* <div>
      {data?.map(fact => (
        <ul>
          <li>
            {fact.text}
          </li>
        </ul>
      ))}
    </div> */}
  </div>;
};


export default Card;