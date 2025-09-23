"use client";

import z from "zod";
import toast from "./Toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addProductSchema } from "lib/types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { neueFont } from "app/fonts/fonts";
import { addProduct } from "lib/store";
import { useEmployeeStore } from "lib/employeeStore";

const AddInventory = () => {
  const { store } = useEmployeeStore();
  const form = useForm<z.infer<typeof addProductSchema>>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      name: "",
      brand: ""
    },
  });
  async function onSubmit(values: z.infer<typeof addProductSchema>) {
    const name = values.name;
    const brand = values.brand;
    const price = Number(values.price);
    const quantity = Number(values.quantity);

    const res = await addProduct(name, brand, price, quantity, store?.id!);

    if (res.success) {
      toast({ title: "✅ " + res.message, description: "" });
      return;
    }

    toast({ title: res.message, description: "" });
    return;
  }
  return (
    <div className="rounded-2xl pl-10">
      <div className="text-[26px] pt-6 pb-4 mb-8 inline-block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Add Products
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-center w-fit">
            <div className="flex gap-6">
              <div className="flex flex-col gap-10">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-[#A5ABAD] flex h-[75px] flex-col justify-center border border-gray-300 px-6 rounded-full w-full min-w-[400px] max-w-[700px]">
                        <FormLabel className="shad-form-label">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="xyz"
                            {...field}
                            className="shad-no-focus shad-input"
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="shad-form-message" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="brand"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-[#A5ABAD] flex h-[75px] flex-col justify-center border border-gray-300 px-6 rounded-full w-full min-w-[400px] max-w-[700px]">
                        <FormLabel className="shad-form-label">Brand</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="cello"
                            {...field}
                            className="shad-no-focus shad-input"
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="shad-form-message" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-10">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-[#A5ABAD] flex h-[75px] flex-col justify-center border border-gray-300 px-6 rounded-full w-full min-w-[400px] max-w-[700px]">
                        <FormLabel className="shad-form-label">Price</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="100"
                            {...field}
                            className="shad-no-focus shad-input"
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="shad-form-message" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-[#A5ABAD] flex h-[75px] flex-col justify-center border border-gray-300 px-6 rounded-full w-full min-w-[400px] max-w-[700px]">
                        <FormLabel className="shad-form-label">
                          Quantity
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="500"
                            {...field}
                            className="shad-no-focus shad-input"
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="shad-form-message" />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <div className="w-full max-w-[700px] flex flex-col items-center mt-15">
              <Button
                type="submit"
                className={
                  neueFont.className +
                  " bg-[#1976D2] h-[52px] rounded-full leading-[20px] text-[20px] hover:bg-[#dedecd] text-white px-20 cursor-pointer max-w-[300px] mb-5"
                }
              >
                Add
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddInventory;
