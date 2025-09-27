"use client";

import {
  getAllProducts,
  getProductWithProductDetails,
  Product,
} from "lib/store";
import Image from "next/image";
import { useEffect, useState } from "react";

const Dropdown = () => {
  const [selectedProduct, setSelectedProduct] = useState("Select");
  const [products, setProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((q) => !q);
  };

  const handleProductClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const product = e.currentTarget.value;
    setSelectedProduct(product);

    const storeId = localStorage.getItem("storeId");
    const productDetails = await getProductWithProductDetails(
      product,
      storeId!
    );

    if (productDetails.success) {
      // @ts-ignore
      setQuantity(productDetails.product.quantity);
    }

    setClicked(false);
  };

  useEffect(() => {
    const storeId = localStorage.getItem("storeId");
    const getProducts = async () => await getAllProducts(storeId!);
    getProducts().then((p) => setProducts(p.products));
  }, []);

  return (
    <div className="flex flex-col pt-6 pb-4 pl-10 gap-4">
      <div className="flex items-center gap-3">
        <div className="text-[26px] bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Products:
        </div>
        <div className="text-[#50E5FF] flex gap-5 ">
          <div className="text-[20px]">{selectedProduct}</div>
          <Image
            src={clicked ? "/images/Up-arrow.svg" : "/images/Down-arrow.svg"}
            alt=""
            width={15}
            height={15}
            className="cursor-pointer"
            onClick={handleClick}
          />
        </div>
        {clicked ? (
          <div className="absolute w-fit flex flex-col bg-[#50E5FF] p-5 rounded-2xl mt-2 gap-3 text-black">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={handleProductClick}
                value={p.name}
                className="cursor-pointer w-fit"
              >
                {p.name}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <div>
        <div className="bg-[#3D4445] w-fit py-5 px-20 rounded-3xl flex flex-col items-center justify-center font-semibold gap-2">
          <Image src="/images/customers.svg" alt="" width={50} height={50} />
          <div>In Stock</div>
          <div className="text-[#00D4FF] text-3xl">{quantity}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
