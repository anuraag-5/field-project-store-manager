import prisma from "store/client";
import { Router } from "express";

const storeRouter = Router();

storeRouter.get("/register", async (req, res) => {
    const data = req.body();
    const name = data.name;
    const email = data.email;
    const address = data.address;
    const contact = data.contact;
    const gstin = data.gstin;

    try {
        // await prisma.stores.create({
        //     data: {
        //         name,
        //         email,
        //         address,
        //         contact,
        //         gstin
        //     }
        // })
    } catch (error) {
        
    }

})

export default storeRouter;