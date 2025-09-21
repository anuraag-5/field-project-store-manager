import express from "express";
import employeeRouter from "./routes/v1/employeeRoutes";
import storeRouter from "./routes/v1/storeRoutes";

const app = express();
app.use(express.json());

app.use("/user", employeeRouter);
app.use("/store", storeRouter);

app.listen(3001, () => {
    console.log("Server started on port 3000");
})