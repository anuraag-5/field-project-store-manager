"use client";

import z from "zod";
import toast from "./Toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addStoreSchema } from "lib/types";
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
import { useRouter } from "next/navigation";
import { neueFont } from "app/fonts/fonts";
import { addStore } from "lib/store";

const CreateStore = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof addStoreSchema>>({
    resolver: zodResolver(addStoreSchema),
    defaultValues: {
      name: "",
      city: "",
      state: "",
      area: "",
      gstin: "",
    },
  });

  async function onSubmit(values: z.infer<typeof addStoreSchema>) {
    const token = localStorage.getItem("jwt");
    if (!token) {
      toast({
        title: `You are not logged in`,
        description: "Please login first",
      });
      return router.replace("/user/signin");
    }

    const name = values.name;
    const email = values.email;
    const contact = values.contact;
    const area = values.area;
    const city = values.city;
    const state = values.state;
    const gstin = values.gstin;

    const res = await addStore(
      name,
      email,
      contact,
      area,
      city,
      state,
      gstin,
      token
    );

    if (res.success) {
      toast({ title: "✅ Store added", description: "" });
      router.replace(`/your_stores`);
      return;
    }

    toast({ title: res.message, description: "" });
    return;
  }

  return (
    <section className="bg-[#4E5A5D] min-h-screen flex flex-col items-center gap-10 ">
      <div className="text-4xl text-white mt-9">Add Store</div>
      <div className="w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full flex flex-col items-center"
          >
            <div className="flex w-full justify-center gap-8 mt-8">
              <div className="w-[40%] flex flex-col gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-[#ffffff] shad-form-item w-full min-w-[200px] max-w-[700px]">
                        <FormLabel className="shad-form-label">Name</FormLabel>
                        <FormControl>
                          <Input
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-[#ffffff] shad-form-item w-full min-w-[200px] max-w-[700px]">
                        <FormLabel className="shad-form-label">
                          Store Email
                        </FormLabel>
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
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-[#ffffff] shad-form-item w-full min-w-[200px] max-w-[700px]">
                        <FormLabel className="shad-form-label">
                          Contact
                        </FormLabel>
                        <FormControl>
                          <Input
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
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-[#ffffff] shad-form-item w-full min-w-[200px] max-w-[700px]">
                        <FormLabel className="shad-form-label">Area</FormLabel>
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
              <div className="w-[40%] flex flex-col gap-8">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-[#ffffff] shad-form-item w-full min-w-[200px] max-w-[700px]">
                        <FormLabel className="shad-form-label">City</FormLabel>
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
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-[#ffffff] shad-form-item w-full min-w-[200px] max-w-[700px]">
                        <FormLabel className="shad-form-label">State</FormLabel>
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
                  name="gstin"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-[#ffffff] shad-form-item w-full min-w-[200px] max-w-[700px]">
                        <FormLabel className="shad-form-label">Gstin</FormLabel>
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
            </div>
            <div className="w-full max-w-[700px] flex justify-center mt-15">
              <Button
                type="submit"
                className={
                  neueFont.className + " form-submit-button cursor-pointer"
                }
              >
                Add
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div></div>
    </section>
  );
};

export default CreateStore;
