"use client";

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
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <button onClick={handleClick} className="p-10 bg-blue-500 rounded-full cursor-pointer"> Get started </button>
    </div>
  );
}

export default Page;