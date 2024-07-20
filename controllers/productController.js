import ProductModel from "../models/ProductModel.js"

export const create = async (req, res) => {
    try {
        const { name, count, width, height, weight, imageUrl} = req.body;

        const newProduct = new ProductModel({
            name, count, width, height, weight, imageUrl
        });

        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Creating product was failed" });
    }
};

export const getAll = async (req, res) => {
    try {
        const products = await ProductModel.find();

        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Getting all products failed" });
    }
};

export const getById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await ProductModel.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Getting product by id failed" });
    }
};

export const deleteById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }

        const deletedProduct = await ProductModel.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Deleting product failed" });
    }
};








