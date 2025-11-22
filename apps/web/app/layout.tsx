import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { popppinFont } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus",
  description: "Manage Store Efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={popppinFont.className}>
        {children}
        <Toaster position="top-center"/>
      </body>
    </html>
  );
}
