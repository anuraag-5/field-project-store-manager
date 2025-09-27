"use client";
import { useRouter } from "next/navigation";
import { getUsersStores, Store } from "lib/store";
import { MouseEvent, useEffect, useState } from "react";
import toast from "components/Toast";
import { useEmployeeStore } from "lib/employeeStore";
import StoreCard from "components/StoreCard";

const YourStores = () => {
  const router = useRouter();
  const { employee, setEmployee, setStore, getEmployee, getStore } =
    useEmployeeStore();
  const [stores, setStores] = useState<Store[]>([]);

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const id = (e.currentTarget as HTMLButtonElement).value;
    if (!employee?.id) {
      return;
    }
    const store = await getStore(employee.id, id);
    setStore(store);
    localStorage.setItem("storeId", id);
    return router.push(`/store/dashboard`);
  };

  useEffect(() => {
    const getStores = async () => {
      const token = localStorage.getItem("jwt");
      if (!token) {
        toast({ title: "First Sign In", description: "" });
        return router.replace("/user/signin");
      }

      const stores = await getUsersStores(token);
      if (!stores.success) {
        toast({
          title: "Add store first",
          description: "",
        });
        return router.replace("/create_store");
      }

      setStores(stores.stores);
    };

    getStores().then(() => {
      const get_employee = async () => {
        const token = localStorage.getItem("jwt");

        if (!token) {
          return null;
        }

        const employee = await getEmployee(token);
        if (!employee.success) {
          toast({ title: "No user found", description: "" });
          return router.prefetch("/user/signin");
        }
        setEmployee(employee);
      };

      get_employee();
    });
  }, [router, getEmployee, setEmployee]);
  return (
    <div className="bg-[#212627] min-h-screen p-10 flex flex-col justify-evenly items-center">
      <div className="pb-4 text-[34px] bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent inline-block">Your Stores</div>
      <div className="w-full">
        <div className="py-3 text-white">
          Select:{" "}
        </div>
        <div className="flex gap-10">
          {stores.map((store) => (
            <StoreCard key={store.id} name={store.name} city={store.city} state={store.state} address={store.address} id={store.id} onClick={handleClick}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourStores;
