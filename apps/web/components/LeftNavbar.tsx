"use client";

import Image from "next/image";
import { popppinFont } from "app/fonts/fonts";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useEmployeeStore } from "lib/employeeStore";
import toast from "./Toast";
import { getRandomColor } from "lib/helper";

const LeftNavbar = () => {
  const [ color, setColor ] = useState("");
  const { employee, store, clearEmployee, clearStore } = useEmployeeStore();
  const router = useRouter();
  const currentPath = usePathname();
  const path = currentPath.includes("dashboard") ? "dashboard" : currentPath.includes("your_stores") ? "your_stores" : currentPath.includes("purchase") ? "purchase" : "inventory" ;
  const [currentTab, setCurrentTab] = useState(path);

  const handleTabChange = async (tab: string) => {
    setCurrentTab(tab);
    if(tab === "your_stores")
    router.push(`/your_stores`);
    else
    router.push(`/store/${tab}`);
  };

  const handleLogout = async () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("storeId");
    clearEmployee();
    clearStore();
    router.replace("/user/signin");
  };

  useEffect(() => {
    const color = getRandomColor();
    setColor(color!);
    const storeId = localStorage.getItem("storeId");
    if(!storeId) {
      toast({ title: "First select a store", description: "" });
      return router.replace("/your_stores");
    }
  }, [router])

  return (
    <div className="hidden md:flex flex-col min-h-screen bg-[#212627] md:rounded-br-2xl md:rounded-tr-2xl mr-1.5 text-white px-2 py-6">
      <div className="flex justify-between items-center mb-16 px-4">
        <div
          className={
            popppinFont.className + " text-[22px] font-bold"
          }
        >
          Innoware
        </div>
        <div>
          <Image
            src="/images/menu-close.svg"
            alt="menu-close"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex-1">
        <div
          className={
            currentTab === "dashboard"
              ? "flex justify-between items-center bg-[#50E5FF] rounded-full py-3 px-4 mb-3 cursor-pointer text-black gap-10"
              : "flex justify-between items-center rounded-full py-3 px-4 mb-3 cursor-pointer text-white gap-10"
          }
          onClick={() => handleTabChange("dashboard")}
        >
          <div className="text-[14px] xl:text-[16px] font-semibold">
            Dashboard
          </div>
          <Image
            src={`/images/${
              currentTab === "dashboard" ? "dashboard.svg" : "dashboard-white.svg"
            }`}
            alt="Db"
            width={25}
            height={25}
          />
        </div>
        <div
          className={
            currentTab === "purchase"
              ? "flex justify-between items-center bg-[#50E5FF] rounded-full py-3 px-4 mb-3 cursor-pointer text-black"
              : "flex justify-between items-center rounded-full py-3 px-4 mb-3 cursor-pointer text-white"
          }
          onClick={() => handleTabChange("purchase")}
        >
          <div className="text-[14px] xl:text-[16px] font-semibold">
            Purchase
          </div>
          <Image
            src={`/images/${
              currentTab === "purchase"
                ? "purchase-icon-black.svg"
                : "purchase-icon-white.svg"
            }`}
            alt="Pr"
            width={25}
            height={25}
          />
        </div>
        <div
          className={
            currentTab === "inventory"
              ? "flex justify-between items-center bg-[#50E5FF] rounded-full py-3 px-4 mb-3 cursor-pointer text-black"
              : "flex justify-between items-center rounded-full py-3 px-4 mb-3 cursor-pointer text-white"
          }
          onClick={() => handleTabChange("inventory")}
        >
          <div className="text-[14px] xl:text-[16px] font-semibold">
            Inventory
          </div>
          <Image
            src={`/images/${
              currentTab === "inventory"
                ? "inventory-icon-black.svg"
                : "inventory-icon-white.svg"
            }`}
            alt="Pr"
            width={25}
            height={25}
          />
        </div>
        <div
          className={
            currentTab === "your_stores"
              ? "flex justify-between items-center bg-[#50E5FF] rounded-full py-3 px-4 mb-3 cursor-pointer text-black"
              : "flex justify-between items-center rounded-full py-3 px-4 mb-3 cursor-pointer text-white"
          }
          onClick={() => handleTabChange("your_stores")}
        >
          <div className="text-[14px] xl:text-[16px] font-semibold">
           Your Stores
          </div>
          <Image
            src={`/images/${
              currentTab === "your_stores"
                ? "createStore-icon-black.png"
                : "createStore-icon-white.png"
            }`}
            alt="Pr"
            width={25}
            height={25}
          />
        </div>
      </div>
      <div className="text-[11px] mb-5">
        <div className="flex gap-2 justify-center items-center">
          <div className={`w-[50px] h-[50px] rounded-full ` + color }></div>
          <div className="text-white">
            <div className="text-lg">{ employee?.name }</div>
            <div className="text-gray-300">{ employee?.email }</div>
          </div>
        </div>
        <div className="flex gap-5 p-2 bg-[#1976D2] rounded-full justify-center items-center cursor-pointer mt-5" onClick={handleLogout}>
          <Image 
          src="/images/logout-black.svg"
          alt=""
          width={20}
          height={20}
          />
          <div className="text-lg">SignOut</div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
