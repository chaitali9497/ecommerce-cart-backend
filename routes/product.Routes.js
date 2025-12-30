import express from "express";
import { getProducts, getProductById, createProduct } from "../controllers/product.Controller.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/product", createProduct); 
export default router;
