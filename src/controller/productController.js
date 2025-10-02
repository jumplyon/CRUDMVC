import express from "express"
import { createProducts, getProducts, updateProducts, deleteProducts } from "../service/productService.js"

const router = express.Router()

router.post("/", createProducts)

router.get("/", getProducts)

router.put("/", updateProducts)

router.delete("/", deleteProducts)


export default router