"use client";

import z from "zod";
import toast from "./Toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchemaSignUp } from "lib/types";
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
import { signUpUser } from "lib/auths";

const SignUp = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchemaSignUp>>({
    resolver: zodResolver(formSchemaSignUp),
    defaultValues: {
      email: "",
      password: "",
      contact: "",
      address: "",
      name: ""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchemaSignUp>) {
    const email = values.email;
    const password = values.password;
    const name = values.name;
    const contact = values.contact;
    const address = values.address

    const res = await signUpUser(email, password, name, contact, address);

    if (res.success) {
      toast({ title: `✅ Account created`, description: "" });
      localStorage.setItem("jwt", res.message);
      router.replace("/store/createStore");
      return;
    }

    toast({ title: res.message, description: "" });
    return;
  }

  return (
    <div className="xl:max-w-[45vw] min-h-screen flex flex-col justify-center px-4 md:px-12">
      <div className={neueFont.className + " text-[54px] text-[#1976D2] mb-15"}>
        Sign Up
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="bg-[#A5ABAD] shad-form-item w-full min-w-[200px] max-w-[700px]">
                  <FormLabel className="shad-form-label">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="abc@xyz.com"
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
                <div className="bg-[#A5ABAD] shad-form-item w-full min-w-[200px] max-w-[700px]">
                  <FormLabel className="shad-form-label">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="abc@xyz.com"
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="bg-[#A5ABAD] shad-form-item w-full min-w-[200px] max-w-[700px]">
                  <FormLabel className="shad-form-label">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="@@@@"
                      {...field}
                      className="shad-no-focus shad-input"
                      type="password"
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
                <div className="bg-[#A5ABAD] shad-form-item w-full min-w-[200px] max-w-[700px]">
                  <FormLabel className="shad-form-label">Contact</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="abc@xyz.com"
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
                <div className="bg-[#A5ABAD] shad-form-item w-full min-w-[200px] max-w-[700px]">
                  <FormLabel className="shad-form-label">Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="abc@xyz.com"
                      {...field}
                      className="shad-no-focus shad-input"
                    />
                  </FormControl>
                </div>
                <FormMessage className="shad-form-message" />
              </FormItem>
            )}
          />
          <div className="w-full max-w-[700px] flex justify-center mt-15">
            <Button
              type="submit"
              className={
                neueFont.className + " form-submit-button cursor-pointer"
              }
            >
              Sign Up
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;