import axios from "axios";

export interface Store {
  id: string;
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  owner_id: string;
}

export const addStore = async (
  name: string,
  email: string,
  contact: string,
  area: string,
  city: string,
  state: string,
  gstin: string,
  token: string
) => {
  try {
    const res = await axios.post("http://localhost:3001/store/register", {
      name,
      email,
      contact,
      address: area,
      state,
      city,
      gstin,
      token,
    });

    if (res.status !== 200) {
      return {
        success: false,
        message: "Axios error",
      };
    }

    return {
      success: true,
      message: "Store Added",
    };
  } catch (_) {
    return {
      success: false,
      message: "Inter server error",
    };
  }
};

export const getUsersStores = async (token: string) => {
  
  try {
    const res = await fetch("http://localhost:3001/store/get_all_stores", {
      method: "Get",
      headers: {
        token,
      },
    });

    if (!res.ok) {
      return {
        success: false,
        stores: [],
      };
    }

    const stores = (await res.json()) as { success: boolean; message: Store[] };
    if (!stores.success) {
      return {
        success: false,
        stores: [],
      };
    }

    return {
      success: true,
      stores: stores.message,
    };
  } catch (_) {
    return {
      success: false,
      stores: [],
    };
  }
};
