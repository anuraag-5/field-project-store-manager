"use client";

import QuickOverview from "components/QuickOverview";
import { useEmployeeStore } from "lib/employeeStore";

const Dashboard = ({
    params,
  }: {
    params: { storeId: string }
  }) => {
  const { storeId } = params;
  const { employee, store } = useEmployeeStore();
  return (
    <div className="pl-10 pt-10 flex flex-col min-h-full relative overflow-x-hidden">
        <div className="pb-4">
          <div className="text-3xl text-white">Dashboard</div>
          <div className="text-white text-[14px] pt-2">{ store?.name }</div>
        </div>
        <div className="flex-1 border-2 border-[#50E5FF] relative right-[-2] rounded-tl-2xl rounded-bl-2xl my-5">
          <QuickOverview />
        </div>
    </div>
  )
}
export const dynamic = 'force-dynamic';
export default Dashboard;