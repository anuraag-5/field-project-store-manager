"use client";
import { useRouter } from "next/navigation";
import { getUsersStores, Store } from "lib/store";
import { MouseEvent, useEffect, useState } from "react";
import toast from "components/Toast";
import { useEmployeeStore } from "lib/employeeStore";

const YourStores = () => {
  const router = useRouter();
  const { employee, setEmployee, setStore, getEmployee, getStore } = useEmployeeStore();
  const [stores, setStores] = useState<Store[]>([]);

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const id = (e.target as HTMLButtonElement).value;
    if(!employee?.id) {
      return;
    }
    const store = await getStore(employee.id, id);
    setStore(store);
    localStorage.setItem("storeId", id);
    return router.push(`/store/dashboard/${id}`);
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
          toast({ title: "No user found", description: "" })
          return router.prefetch("/user/signin");
        }
        setEmployee(employee);
      };
  
      get_employee()
    });


  }, [router, getEmployee, setEmployee]);
  return (
    <div>
      {stores.map((store) => (
        <div key={store.id}>
          <button className="cursor-pointer" value={store.id} onClick={handleClick}>
            {store.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default YourStores;
