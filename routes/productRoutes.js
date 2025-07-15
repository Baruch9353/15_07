import express from "express";
import { getProducts } from "../ctrl/productController.js";

const router = express.Router();

router.post('/', getProducts);

export default router;