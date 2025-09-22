"use client";
import { useRouter } from "next/navigation";
import { getUsersStores, Store } from "lib/store";
import { useEffect, useState } from "react";
import toast from "components/Toast";

const YourStores = () => {
  const router = useRouter();
  const [stores, setStores] = useState<Store[]>([]);
  //Get the user from localStorage, get user's stores, if no store is added route the user to /createStore.
  useEffect(() => {
    const getStores = async () => {
      const token = localStorage.getItem("jwt");
      if(!token) {
        toast({ title: "You are not signed in", description: "" });
        return router.replace("/user/signin");
      }

      const stores = await getUsersStores(token);
      if(!stores.success) {
        toast({ title: "You have not addded any store, please add one", description: "" });
        return router.replace("/createStore");
      } 

      setStores(stores.stores)
    }

    getStores();
  });
  return (
    <div>
      {
        stores.map((store) => (<div key={store.id}>{store.name}</div>))
      }
    </div>
  )
}

export default YourStores;