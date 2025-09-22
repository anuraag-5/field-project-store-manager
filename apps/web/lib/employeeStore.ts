import axios from "axios";
import { create } from "zustand";

type Employee = {
  name: string;
  email: string;
  id: string;
  isOwner: boolean;
};

type Store = {
  id: string;
  email: string;
  name: string;
}

type EmployeeStoreStore = {
  employee: Employee | null;
  store: Store | null;
  setEmployee: (employee: Employee) => void;
  getEmployee: (jwt: string) => Promise<{
    id: string;
    name: string;
    email: string;
    isOwner: boolean;
    success: boolean;
  }>;
  setStore: (store: Store) => void;
  getStore: (employeeId: string, storeId: string) => Promise<{
    id: string,
    email: string,
    name: string,
    success: boolean
  }>
  setEmployeeAndStore: (employee: Employee, store: Store) => void;
  clearEmployee: () => void;
  clearStore: () => void;
};

const getActualEmployee = async (jwt: string) => {
  const res = await axios.get("http://localhost:3001/user/get_user", {
    headers: {
      jwt,
    },
  });

  const data = (await res.data) as {
    id: string;
    name: string;
    email: string;
    isOwner: boolean;
    success: boolean;
  };

  return data;
};

const getActualStore = async (employeeId: string, store_id: string) => {
  const res = await axios.get("http://localhost:3001/store/get_store", {
    headers: {
      store_id,
      owner_id: employeeId,
    },
  });

  const data = (await res.data) as {
    id: string;
    name: string;
    email: string;
    success: boolean;
  };

  return data;
};

export const useEmployeeStore = create<EmployeeStoreStore>((set) => ({
  employee: null,
  store: null,
  setEmployee: (employee) => set({ employee }),
  getEmployee: async (jwt) => await getActualEmployee(jwt),
  setStore: (store) => set({store}),
  getStore: async (employeeId, storeId) => await getActualStore(employeeId, storeId),
  setEmployeeAndStore: (employee, store) => set({ employee, store}),
  clearEmployee: () => set({ employee: null }),
  clearStore: () => set({store: null})
}));