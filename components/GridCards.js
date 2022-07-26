import React from "react";
import CardData from "../Data/CardData";
import Image from "next/image";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const GridCards = () => {

    const dispatch = useDispatch()
    const handleAddToCart = (shoes) =>{
      dispatch(addToCart(shoes))
    }

  return <div>
          <div className="grid grid-cols-3 overflow-y-scroll h-screen scrollbar-hide  ">
                {CardData?.map((shoes) => (  
                <div className="  px-3 pb-5 mx-4 " key={shoes.id}>
                    <div className=" w-80">
                        <Image   src={shoes.img}  objectFit='contain' width={400} height={400}/>
                        <h3 className="text-2xl ">{shoes.shoeBrand}</h3>
                        <h4 className="text-xl">{shoes.shoeName}</h4>
                        <div className="flex justify-between">
                            <h3 className="my-6 text-3xl">$ {shoes.price}</h3>
                            <PlusCircleIcon className="w-10 pl-2 animate-pulse cursor-pointer" onClick={() => handleAddToCart(shoes)} />
                        </div>
                </div>
            </div>
            ))
            }
        </div>
  </div>;
};

export default GridCards;
