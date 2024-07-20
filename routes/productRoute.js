import { Router } from "express";
import {
    create,
    deleteById,
    getAll,
    getById,
} from "../controllers/productController.js";

const router = new Router();

router.post("/", create);
router.get("/", getAll);
router.get('/:id', getById); 
router.delete('/:id', deleteById); 


export default router;
