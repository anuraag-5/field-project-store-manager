import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const popppinFont = Poppins({
    weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
    subsets: ["latin"]
})

export const neueFont = localFont({
    src: "/NeueMachina-Regular.otf",
})