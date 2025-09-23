import prisma from "store/client";
import jwt from "jsonwebtoken";
import { Router } from "express";

const storeRouter = Router();

storeRouter.post("/register", async (req, res) => {
    const data = req.body;
    const name = data.name;
    const email = data.email;
    const address = data.address;
    const city = data.city;
    const state = data.state;
    const contact = data.contact;
    const gstin = data.gstin;
    const token = data.token;

    try {
        const owner_id = jwt.verify(token, process.env.JWT_SECRET || "") as string;
        const newStore = await prisma.stores.create({
            data: {
                name,
                email,
                city,
                state,
                address,
                contact,
                gstin,
                owner_id
            }
        })
        return res.status(200).json({
            success: true,
            message: newStore.id
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }

})

storeRouter.get("/get_store", async (req, res) => {
    try {
        const store = await prisma.stores.findFirst({
            where: {
                id: req.headers.store_id as string,
                owner_id: req.headers.owner_id as string
            }
        })

        if(!store) {
            return res.status(404).json({
                id: "",
                name: "",
                email: "",
                success: false,
            })
        }

        return res.status(200).json({
            id: store.id,
            name: store.name,
            email: store.email,
            success: true,
        })
    } catch (error) {
        return res.status(500).json({
            id: "",
            name: "",
            email: "",
            success: false,
        })
    }
})

storeRouter.get("/get_all_stores", async (req, res) => {
    try {
        const token = req.headers.token as string;
        const employeeId = jwt.verify(token, process.env.JWT_SECRET || "") as string;

        const stores = await prisma.stores.findMany({
            where: {
                owner_id: employeeId
            },
            select: {
                id: true,
                name: true,
                email: true,
                address: true,
                city: true,
                state: true,
                contact: true,
                owner_id: true
            }
        })

        if(stores.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User has no stores"
            })
        }

        return res.status(200).json({
            success: true,
            message: stores
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: "Internal server error"
        })
    }
})

storeRouter.get("/total_customers", async (req, res) => {
    const storeId = req.headers.storeId as string;
    try {
        const total_customers = await prisma.customer_stores.count({
            where: {
                store_id: storeId
            }
        })

        return res.status(200).json({
            success: true,
            count: total_customers
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            count: 0
        });
    }
})

storeRouter.get("/todays_sales", async (req, res) => {
    const storeId = req.headers.storeId as string;
    try {
        const totalTodaysSales = await prisma.product_sales.findMany({
            where: {
                store_id: storeId
            }
        })
         
        let sales = 0;
        totalTodaysSales.forEach((s) => { sales = sales + s.totalPrice})

        return res.status(200).json({
            success: true,
            count: sales
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            count: 0
        });
    }
})

storeRouter.post("/add_product", async (req, res) => {
    const storeId = req.headers.storeId as string;
    const data = req.body;
    const name = data.name;
    const brandModel = data.brand;
    const price = data.price;
    const quantity = data.quantity;

    try {
        await prisma.products.create({
            data: {
                name,
                brandModel,
                price,
                quantity
            }
        });

        return res.status(200).json({
            success: true,
            message: "Product created"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
})

export default storeRouter;