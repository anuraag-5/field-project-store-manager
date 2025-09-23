"use client";

import z from "zod";
import toast from "./Toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { purchaseSchema } from "lib/types";
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
import { customerPurchase } from "lib/store";
import { useEmployeeStore } from "lib/employeeStore";

const CustomerPurchase = () => {
  const { store } = useEmployeeStore();
  const form = useForm<z.infer<typeof purchaseSchema>>({
    resolver: zodResolver(purchaseSchema),
    defaultValues: {
      customerName: "",
      productBrandName: "",
      productName: "",
      quantity: "",
      address: "",
      contact: ""
    },
  });
  async function onSubmit(values: z.infer<typeof purchaseSchema>) {
    const customerName = values.customerName;
    const productBrandName = values.productBrandName;
    const productName= values.productName;
    const contact = values.contact;
    const address = values.address;
    const quantity = Number(values.quantity);

    const res = await customerPurchase(customerName, contact, address, productBrandName, productName, quantity, store?.id!);

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
        Customer and Product
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-center w-fit">
            <div className="flex gap-6">
              <div className="flex flex-col gap-10">
                <FormField
                  control={form.control}
                  name="customerName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-[#A5ABAD] flex h-[75px] flex-col justify-center border border-gray-300 px-6 rounded-full w-full min-w-[400px] max-w-[700px]">
                        <FormLabel className="shad-form-label">Customer Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="abc"
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
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-[#A5ABAD] flex h-[75px] flex-col justify-center border border-gray-300 px-6 rounded-full w-full min-w-[400px] max-w-[700px]">
                        <FormLabel className="shad-form-label">Contact</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
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
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-[#A5ABAD] flex h-[75px] flex-col justify-center border border-gray-300 px-6 rounded-full w-full min-w-[400px] max-w-[700px]">
                        <FormLabel className="shad-form-label">Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
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
                  name="productBrandName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-[#A5ABAD] flex h-[75px] flex-col justify-center border border-gray-300 px-6 rounded-full w-full min-w-[400px] max-w-[700px]">
                        <FormLabel className="shad-form-label">Product Brand</FormLabel>
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
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-[#A5ABAD] flex h-[75px] flex-col justify-center border border-gray-300 px-6 rounded-full w-full min-w-[400px] max-w-[700px]">
                        <FormLabel className="shad-form-label">Product Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="pen"
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
                Sale
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default CustomerPurchase;