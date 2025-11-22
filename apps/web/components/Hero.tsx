"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Image from "next/image";
import { neueFont } from "app/fonts/fonts";
import { useRef } from "react";
import BrandLogos from "./BrandLogos";
import Pricing from "./Pricing";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Hero = ({ handleClick }: { handleClick: () => void}) => {
  const blinkingRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
      if(!blinkingRef.current) {
        return
    }

    gsap.fromTo(blinkingRef.current, {
        opacity: 0,
        scale: 1
    }, {
        opacity: 0.6,
        duration: 1.6,
        scale: 1.9,
        yoyo: true,
        repeat: -1
    })

  }, { dependencies: [] })
  return (
    <div className=''>
        <div className="flex min-w-screen min-h-screen gap-10 p-10 overflow-x-hidden">
            <div className="flex flex-col gap-15 min-h-full pt-8">
                <div className="flex bg-[#243538] py-[3.5] px-3 w-fit text-[10px] text-white font-semibold rounded-full gap-3 items-center justify-center">
                    <div className="relative">
                      <div className="bg-[#41BED4] w-[10px] h-[10px] z-10 rounded-full"></div>
                      <div className="absolute bg-[#41BED4] z-0 top-0 bottom-0 left-0 right-0 rounded-full" ref={blinkingRef}></div>
                    </div>
                    <div className="pt-[1.8]">Built with html, JS</div>
                </div>
                <div className="">
                  <div className="font-bold text-[44px] bg-gradient-to-r from-white to-[#99CED6] bg-clip-text text-transparent">Scale Your Business</div>
                  <div className="font-bold text-[44px] bg-gradient-to-r from-white to-[#99CED6] bg-clip-text text-transparent">the right way</div> 
                </div>
                <div className={neueFont.className + " text-[#989898]"}>
                  <div>We offer solution for businesses to scale their</div> 
                  <div>business without worrying about the</div> 
                  <div>maintenance of software</div>
                </div>
                <div className="text-[22px] font-bold py-4 px-8 rounded-full bg-gradient-to-r from-[#4EE3FD] to-[#2F8797] w-fit">
                    <div className="bg-gradient-to-r from-[#1B1B1B] to-[#3B3939] bg-clip-text text-transparent cursor-pointer" onClick={handleClick}>Get Started</div>
                </div>
            </div>
            <div className="relative flex-1">
            <Image
            src="/images/hero_image.png"
            alt="example"
            fill
            className="object-cover rounded-xl"
            />
            </div>
        </div>
        <BrandLogos />
        <Pricing />
    </div>
  )
}

export default Hero