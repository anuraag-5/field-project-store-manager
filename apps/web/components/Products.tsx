"use client";

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { getAllProducts, Product } from "lib/store";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const storeId = localStorage.getItem("storeId");
    const getProducts = async () => await getAllProducts(storeId!);
    getProducts().then((p) => setProducts(p.products));
  }, [])
  return (
    <div className="pt-6 pb-4 pl-10">
      <div className="rounded-2xl flex items-center gap-12">
        <div className="text-[26px] inline-block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Products
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[300px] border-none">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {/* <SelectItem value="light">Light</SelectItem> */}
              {
                products.map((p) => (
                    <SelectItem key={p.id} value={p.name} >{p.name}</SelectItem>
                ))
              }
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="bg-[#3D4445] w-fit py-5 px-20 rounded-3xl flex flex-col items-center justify-center font-semibold gap-2">
          {/* <Image 
            src="/images/customers.svg"
            alt=''
            width={50}
            height={50}
            />
            <div>Total Customers</div>
            <div className='text-[#00D4FF] text-3xl'>2</div> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
