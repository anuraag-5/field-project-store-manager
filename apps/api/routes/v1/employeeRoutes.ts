import prisma from "store/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Router } from "express";

const employeeRouter = Router();

employeeRouter.post("/signup", async (req, res) => {
    const data = req.body;
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const contact = data.contact;
    const address = data.address;
    const isOwner = data.isOwner as boolean;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
    
        await prisma.employees.create({
            data: {
                name,
                email,
                password: hashedPassword,
                contact,
                isOwner,
                address
            }
        });

        return res.status(200).json({
            success: true,
            message: "Account created"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
})

employeeRouter.post("/signin", async (req, res) => {
    const data = req.body;
    const email = data.email;
    const password = data.password;

    try {    
        const user = await prisma.employees.findFirst({
            where: {
                email
            }
        })

        if(!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })            
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword) {
            return res.status(401).json({
                success: false,
                message: "Invald credentials."
            })
        }

        const token = jwt.sign(user.id, process.env.JWT_SECRET || "");

        return res.status(200).json({
            success: true,
            message: token
        });
    } catch (error) {
        return res.status(501).json({
            success: false,
            message: "Internal Server Error"
        });
    }
})

employeeRouter.get("/get_user", async (req, res) => {
    const something = req.headers;
    const token = something.jwt as string;

    try {
        const userId = jwt.verify(token, process.env.JWT_SECRET || "") as string;
        const employee = await prisma.employees.findFirst({
            where: {
                id: userId
            }
        })

        if(!employee) {
            return res.status(404).json({
                id: "",
                name: "",
                email: "",
                isOwner: false,
                success: false
            });
        }

        return res.status(200).json({
            id: employee.id,
            name: employee.name,
            email: employee.email,
            isOwner: employee.isOwner,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            id: "",
            name: "",
            email: "",
            isOwner: false,
            success: false
        });
    }
})

export default employeeRouter;