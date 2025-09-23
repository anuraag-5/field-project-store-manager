"use client";

import z from "zod";
import toast from "./Toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchemaSignIn } from "lib/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
import { signInUser } from "lib/auths";

const Signin = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchemaSignIn>>({
    resolver: zodResolver(formSchemaSignIn),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchemaSignIn>) {
    const email = values.email;
    const password = values.password;

    const res = await signInUser(email, password);

    if (res.success) {
      toast({ title: `✅ Logged In`, description: "" });
      localStorage.setItem("jwt", res.message);
      router.replace("/your_stores");
      return;
    }

    toast({ title: res.message, description: "" });
    return;
  }

  return (
    <div className="xl:max-w-[45vw] min-h-screen flex flex-col justify-center px-4 md:px-12">
      <div className={neueFont.className + " text-[54px] text-[#1976D2] mb-15"}>
        Sign In
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="bg-[#ffffff] shad-form-item w-full min-w-[200px] max-w-[700px]">
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
                <div className="bg-[#ffffff] shad-form-item w-full min-w-[200px] max-w-[700px]">
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
          <div className="w-full max-w-[700px] flex flex-col items-center mt-15">
            <Button
              type="submit"
              className={
                neueFont.className + " form-submit-button cursor-pointer max-w-[300px] mb-5"
              }
            >
              Sign In
            </Button>
            <div className="text-white">
              New user ? <Link href="/user/signup" className="text-[#1976D2]"> Sign Up </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Signin;
