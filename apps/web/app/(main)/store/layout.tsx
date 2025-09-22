"use client";

import LeftNavbar from "components/LeftNavbar";
import toast from "components/Toast";
import { useEmployeeStore } from "lib/employeeStore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const StoreLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ storeId: string }>;
}) => {
  const { setEmployeeAndStore, getEmployee, getStore } = useEmployeeStore();
  const router = useRouter();

  useEffect(() => {
    const get_employee = async () => {
      const token = localStorage.getItem("jwt");

      if (!token) {
        return null;
      }

      const employee = await getEmployee(token);
      if (!employee.success) {
        return null;
      }
      return employee;
    };

    get_employee().then(async (employee) => {
      if (!employee) {
        return router.replace("/user/signin");
      }
      const { storeId } = await params;
      const store = await getStore(employee.id, storeId);
      if (!store.success) {
        toast({
          title: "You have no stores, please first add your store",
          description: "",
        });
        return router.replace("/createStore");
      }

      setEmployeeAndStore(employee, store);
    });
  }, [router, getEmployee, getStore, params, setEmployeeAndStore]);
  return (
    <section className="flex bg-[#4B4B3E] min-h-screen min-w-screen">
      <LeftNavbar />
      <div className="flex-1 md:my-1.5 bg-[#212627] md:rounded-tl-2xl md:rounded-bl-2xl">
        {children}
      </div>
    </section>
  );
};

export default StoreLayout;
