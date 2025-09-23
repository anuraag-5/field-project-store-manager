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

export const getTotalCustomers = async (storeId: string) => {
  try {
    const res = await axios.get("http://localhost:3001/store/total_customers", {
      headers: {
        storeId
      }
    })
    if(res.status !== 200) {
      return {
        success: false,
        count: 0
      }
    }

    const data = await res.data as { success: boolean, count: number }
    return {
      success: true,
      count: data.count
    }
  } catch (_) {
    return {
      success: false,
      count: 0
    }
  }
}

export const getTodaysSales = async (storeId: string) => {
  try {
    const res = await axios.get("http://localhost:3001/store/todays_sales", {
      headers: {
        storeId
      }
    })
    if(res.status !== 200) {
      return {
        success: false,
        count: 0
      }
    }

    const data = await res.data as { success: boolean, count: number }
    return {
      success: true,
      count: data.count
    }
  } catch (_) {
    return {
      success: false,
      count: 0
    }
  }
}

export const addProduct = async (name: string, brand: string, price: number, quantity: number, storeId: string) => {
  try {
    const res = await axios.post("http://localhost:3001/store/add_product", {
      name,
      brand,
      price,
      quantity
    }, {
      headers: {
        storeId
      }
    })

    if(res.status !== 200){
      return {
        success: false,
        message: "Some error occured"
      }
    }
    return {
      success: true,
      message: "Product added"
    }
  } catch (_) {
    return {
      success: false,
      message: "Some error occured"
    }
  }
}