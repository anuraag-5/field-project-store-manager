"use client";

import Products from "components/Products";
import QuickOverview from "components/QuickOverview";
import { useEmployeeStore } from "lib/employeeStore";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { store } = useEmployeeStore();
  const router = useRouter();
  return (
    <div className="pl-10 pt-10 flex flex-col min-h-full relative overflow-x-hidden">
        <div className="pb-4 flex justify-between items-center">
          <div>
            <div className="text-3xl inline-block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Dashboard</  div>
            <div className="text-gray-300 text-[14px] pt-2">
              <span className="text-gray-500">Store name: </span>
              { store?.name }
            </div>
          </div>
          <div className="text-[#50E5FF] text-[14px] mr-10 cursor-pointer" onClick={() => router.push("/create_store")}>Add Store</div>
        </div>
        <div className="flex-1 border-2 border-[#50E5FF] relative right-[-2] rounded-tl-2xl rounded-bl-2xl my-5">
          <QuickOverview />
          <Products />
        </div>
    </div>
  )
}
export const dynamic = 'force-dynamic';
export default Dashboard;