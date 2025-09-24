"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const BrandLogos = () => {
  const brandsRef = useRef<HTMLDivElement | null>(null);
  const brandsRef2 = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (!brandsRef.current || !brandsRef2.current) {
        return;
    }

    gsap.to(brandsRef.current, {
        xPercent: -100,
        duration: 25,
        repeat: -1,
        ease: "none"
    })

    gsap.to(brandsRef2.current, {
        xPercent: -100,
        duration: 25,
        repeat: -1,
        ease: "none"
    })

  }, { dependencies: [] })
  return (
    <div className="flex mt-5">
      <div className="flex gap-74 p-10 min-w-screen" ref={brandsRef}>
        <Image 
        src={"/images/airbnb.png"}
        alt=""
        width={100}
        height={100}
        />
        <Image 
        src={"/images/classmate-tp.svg"}
        alt=""
        width={120}
        height={120}
        />
        <Image 
        src={"/images/notebook-tp.svg"}
        alt=""
        width={100}
        height={100}
        />
        <Image 
        src={"/images/fountain-pen-tp.svg"}
        alt=""
        width={100}
        height={100}
        />
      </div>
      <div className="flex gap-74 p-10 min-w-screen" ref={brandsRef2}>
        <Image 
        src={"/images/airbnb.png"}
        alt=""
        width={100}
        height={100}
        />
        <Image 
        src={"/images/classmate-tp.svg"}
        alt=""
        width={120}
        height={120}
        />
        <Image 
        src={"/images/notebook-tp.svg"}
        alt=""
        width={100}
        height={100}
        />
        <Image 
        src={"/images/fountain-pen-tp.svg"}
        alt=""
        width={100}
        height={100}
        />
      </div>
    </div>
    
  )
}

export default BrandLogos