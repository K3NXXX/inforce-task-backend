import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import productRoute from "./routes/productRoute.js";

const app = express();
dotenv.config();

//constants
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL

//database
const mongooseConnect = async () => {
    try {
        mongoose
            .connect(
                MONGODB_URL
            )
            .then(() => console.log("MONGODB OK"));
    } catch (error) {
        console.log(error);
    }
};
mongooseConnect();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/products", productRoute);

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
});
