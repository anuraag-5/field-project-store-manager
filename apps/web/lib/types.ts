import z from "zod";

export const formSchemaSignIn = z.object({
    email: z.email(),
    password: z.string()
})

export const formSchemaSignUp = z.object({
    email: z.email(),
    password: z.string().max(16, { error: "Password length should be maximum of 16"}).min(8, { error: "Password length should be minimum of 8"}),
    name:  z.string().max(50),
    contact: z.string().max(10),
    address: z.string()
})

export const addStoreSchema = z.object({
    name: z.string(),
    email: z.email(),
    contact: z.string(),
    city: z.string(),
    state: z.string(),
    area: z.string(),
    gstin: z.string()
})

export const addProductSchema = z.object({
    name: z.string(),
    brand: z.string(),
    price: z.string(),
    quantity: z.string()
})

export const purchaseSchema = z.object({
    customerName: z.string(),
    contact: z.string(),
    address: z.string(),
    quantity: z.string(),
    productName: z.string(),
    productBrandName: z.string()
})