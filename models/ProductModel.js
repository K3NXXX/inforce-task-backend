import mongoose from "mongoose";

const ProductModel = new mongoose.Schema(
    {
        imageUrl: {
            type: String,
        },
        count: {
            type: Number,
        },
        name: {
            type: String,
        },
        width: {
            type: Number,
        },
        height: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    },
    { timestamps: true }
);

export default mongoose.model("Product", ProductModel);
