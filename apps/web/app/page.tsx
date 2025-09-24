"use client";

import Hero from "components/Hero";
import Navbar from "components/Navbar";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const handleClick = () => {
    const token = localStorage.getItem("jwt");

    if(!token)
      return router.push("/user/signin")

    return router.push("/your_stores");
  }
  return (
    <div className="min-h-screen min-w-screen bg-[linear-gradient(to_bottom,_#2D8594_0%25,_#1F5A64_9%25,_#133137_22%25,_#0B1E21_47%25,_#0C2529_100%25)] p-14">
      <Navbar />
      <Hero handleClick={handleClick}/>
    </div>
  );
}

export default Page;