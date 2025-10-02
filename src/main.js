import express from "express"
import dotenv from "dotenv"
import productController from "./controller/productController.js"

const app = express()
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT

app.use("/", productController)

app.listen(PORT, () =>{
    console.log(`Server running sucessfully on port ${PORT}`)
})
