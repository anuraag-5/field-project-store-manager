"use client";

import { getRandomColor } from "lib/helper";
import { MouseEvent, useEffect, useState } from "react";

const StoreCard = ({ name, city, state, address, onClick, id }: { name: string, city: string, state: string, address: string, id: string, onClick: (e: MouseEvent<HTMLButtonElement>) => Promise<void> }) => {
  const [ color, setColor ] = useState("pink-600");
  useEffect(() => {
    const color = getRandomColor();
    setColor(color!)
  }, [])
  return (
    <button className='p-5 pt-10 h-[500px] w-[400px] bg-[#C6DFE4] rounded-3xl flex flex-col justify-evenly items-center cursor-pointer' onClick={onClick} value={id}>
        <div className="flex flex-col justify-center items-center gap-4 mb-20">
            <div className={`w-[100px] h-[100px] rounded-full ${color}`}></div>
            <div className="text-black text-[30px]">{ name }</div>
        </div>
        <div className="flex-1 rounded-3xl bg-[#334B4F] w-full p-7 flex flex-col justify-between">
            <div className="break-words">{ address }</div>
            <div className="flex gap-2">
                <div>{ city },</div>
                <div>{ state }</div>
            </div>
        </div>
    </button>
  )
}

export default StoreCard;