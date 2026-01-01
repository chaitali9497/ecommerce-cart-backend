import express from "express";
import protect from "../middleware/authMiddleware.js";
import { addToCart, updateCart, deleteCart,getCart } from "../controllers/cart.Controller.js";

const router = express.Router();

router.post("/", protect, addToCart);
router.get("/", protect, getCart); 
router.put("/:id", protect, updateCart);
router.delete("/:id", protect, deleteCart);

export default router;
