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