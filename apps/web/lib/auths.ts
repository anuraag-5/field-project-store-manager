import axios from "axios";

export const signUpUser = async (email: string, password: string, name: string, contact: string, address: string) => {
    try {
        const res = await axios.post("http://localhost:3001/user/signup", {
            email,
            password,
            name,
            contact,
            address,
            isOwner: true
        })

        if(res.status !== 200) {
            return {
                message: "Invalid credentials",
                success: false
            }
        }

        const data = await res.data as { message: string, success: boolean };
        console.log(data);
        return data;
    } catch (_) {
        return {
            message: "Internal server error",
            success: false
        }
    }
}

export const signInUser = async (email: string, password: string) => {
    try {
        const res = await axios.post("http://localhost:3001/user/signin", {
            email,
            password
        });

        if(res.status !== 200) {
            return {
                message: "Invalid credentials",
                success: false
            }
        }

        const data = await res.data as { message: string, success: boolean };
        return data;
    } catch (_) {
        return {
            message: "Internal server error",
            success: false
        };
    }
}