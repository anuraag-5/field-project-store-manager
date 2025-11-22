"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Lenis from "lenis";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹499/mo",
      desc: "Perfect for small grocery or kirana stores starting digital.",
      features: [
        "Basic inventory tracking",
        "Purchase & sales logging",
        "Single store support",
        "Email support",
      ],
    },
    {
      name: "Business",
      price: "₹999/mo",
      desc: "For active retail businesses needing automation.",
      features: [
        "Advanced inventory management",
        "Low-stock alerts",
        "Supplier management",
        "Multi-user access",
        "WhatsApp notifications",
      ],
    },
    {
      name: "Enterprise",
      price: "₹1,999/mo",
      desc: "For expanding multi-branch retail shops.",
      features: [
        "Multi-store analytics",
        "Real-time dashboard",
        "Staff roles & permissions",
        "Priority support",
        "API access",
      ],
    },
  ];
  const blinkingRef = useRef<HTMLDivElement | null>(null);
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const golbalref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    gsap.fromTo(
      blinkingRef.current,
      {
        opacity: 0,
        scale: 1,
      },
      {
        opacity: 0.6,
        duration: 1.6,
        scale: 1.9,
        yoyo: true,
        repeat: -1,
      }
    );

    const width = ref1.current?.offsetWidth;
    if (!width || !golbalref.current) return;

    gsap.set(ref1.current, {
      x: width * 2 + 7.5,
      opacity: 0.7,
    });
    gsap.set(ref2.current, {
      x: width * 2 + 15,
      opacity: 0.4,
    });
    gsap.set(ref3.current, {
      x: width * 2 + 25,
      opacity: 0.1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: golbalref.current,
        pin: true,
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
      },
    });

    tl.to(ref1.current, {
      x: 0,
      opacity: 1,
      duration: 2,
    });
    tl.to(ref2.current, {
      x: 0,
      opacity: 1,
      duration: 2,
    });
    tl.to(ref3.current, {
      x: 0,
      opacity: 1,
      duration: 2,
    });
    tl.to(
      ref1.current,
      {
        x: -450,
        opacity: 0,
        duration: 1,
      },
      2.6
    );
    tl.to(
      ref2.current,
      {
        x: -450,
        opacity: 0,
        duration: 1,
      },
      4.6
    );
    /* No need to  animate last Testimonial, let is stay in box do not leave*/
    // tl.to(ref3.current, {
    //   x: -450,
    //   opacity: 0,
    //   duration: 1

    // }, 6.3)
  }, {});

  return (
    <>
      <div
        className="min-h-screen max-w-screen flex flex-col gap-6 justify-center items-center overflow-x-hidden"
        ref={golbalref}
      >
        <div className="flex bg-[#243538] py-[3.5] px-3 w-fit text-[10px] text-white font-semibold rounded-full gap-3 items-center justify-center">
          <div className="relative">
            <div className="bg-[#41BED4] w-[10px] h-[10px] z-10 rounded-full"></div>
            <div
              className="absolute bg-[#41BED4] z-0 top-0 bottom-0 left-0 right-0 rounded-full"
              ref={blinkingRef}
            ></div>
          </div>
          <div className="pt-[1.8]">Pricing</div>
        </div>
        <div className="relative h-[450px] w-[380px]">
          <div
            className="absolute h-full w-full bg-[#B7CBCF] rounded-3xl border-[1px] border-white flex flex-col p-6 gap-5"
            ref={ref1}
          >
            <div className="flex justify-between">
              <div className="text-[13px] text-[#006ad4] bg-gray-300 px-4 rounded-[6px] flex justify-center items-center">
                Basic
              </div>
              <div className="text-[11px] bg-[#1976D2] px-3 rounded-lg flex justify-center items-center">
                Popular
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="text-[30px] text-[#006ad4]">₹399</div>
                <div className="text-gray-500">/mnth</div>
              </div>
              <div className="text-[12px] text-gray-600">
                Per Employee, billed per month
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-1 justify-evenly items-center pt-5">
              <hr className="border-gray-200 w-full" />
              <ul className="flex flex-col gap-4 text-[#002d5b] text-[14px] mt-5 w-full">
                <li>Basic inventory tracking</li>
                <li>Purchase & sales logging</li>
                <li>Single store support</li>
                <li>Email support</li>
              </ul>
              <button className="bg-[#1976D2] py-2 px-8 max-w-[200px] rounded-4xl mt-5">
                Buy
              </button>
            </div>
          </div>
          <div
            className="absolute h-full w-full bg-[#B7CBCF] rounded-3xl border-[1px] border-white flex flex-col p-6 gap-5"
            ref={ref2}
          >
            <div className="flex justify-between">
              <div className="text-[13px] text-[#006ad4] bg-gray-300 px-4 rounded-[6px] flex justify-center items-center">
                Business
              </div>
              <div className="text-[11px] bg-[#1976D2] px-3 rounded-lg flex justify-center items-center">
                Popular
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="text-[30px] text-[#006ad4]">₹999</div>
                <div className="text-gray-500">/mnth</div>
              </div>
              <div className="text-[12px] text-gray-600">
                Per Employee, billed per month
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-1 justify-evenly items-center pt-5">
              <hr className="border-gray-200 w-full" />
              <ul className="flex flex-col gap-4 text-[#002d5b] text-[14px] mt-5 w-full">
              <li>Advanced inventory management</li>
                <li>Low-stock alerts</li>
                <li>Supplier management</li>
                <li>Multi-user access</li>
                <li>WhatsApp notifications</li>
              </ul>
              <button className="bg-[#1976D2] py-2 px-8 max-w-[200px] rounded-4xl mt-5">
                Buy
              </button>
            </div>
          </div>
          <div
            className="absolute h-full w-full bg-[#B7CBCF] rounded-3xl border-[1px] border-white flex flex-col p-6 gap-5"
            ref={ref3}
          >
            <div className="flex justify-between">
              <div className="text-[13px] text-[#006ad4] bg-gray-300 px-4 rounded-[6px] flex justify-center items-center">
                Basic
              </div>
              <div className="text-[11px] bg-[#1976D2] px-3 rounded-lg flex justify-center items-center">
                Popular
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="text-[30px] text-[#006ad4]">₹1,999</div>
                <div className="text-gray-500">/mnth</div>
              </div>
              <div className="text-[12px] text-gray-600">
                Per Employee, billed per month
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-1 justify-evenly items-center pt-5">
              <hr className="border-gray-200 w-full" />
              <ul className="flex flex-col gap-4 text-[#002d5b] text-[14px] mt-5 w-full">
                <li>Multi-store analytics</li>
                <li>Real-time dashboard</li>
                <li>Staff roles & permissions</li>
                <li>Priority support</li>
                <li>Api Access</li>
              </ul>
              <button className="bg-[#1976D2] py-2 px-8 max-w-[200px] rounded-4xl mt-5">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;

// import { Check } from "lucide-react";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// export default function PricingSection() {

//   return (
//     <section className="py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           Simple & Transparent Pricing
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {plans.map((plan) => (
//             <Card
//               key={plan.name}
//               className="rounded-2xl shadow-lg border-0"
//               style={{ backgroundColor: "#B7CBCF" }}
//             >
//               <CardHeader>
//                 <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
//                 <p className="text-lg opacity-90">{plan.desc}</p>
//               </CardHeader>

//               <CardContent>
//                 <p className="text-3xl font-bold mb-4">{plan.price}</p>

//                 <ul className="space-y-2">
//                   {plan.features.map((f) => (
//                     <li key={f} className="flex items-center gap-2">
//                       <Check className="w-5 h-5" />
//                       <span>{f}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>

//               <CardFooter>
//                 <Button className="w-full text-lg py-6">Choose Plan</Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
