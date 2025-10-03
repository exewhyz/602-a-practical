import express from "express";
import {
  fetchProducts,
  fetchProductById,
  createProduct,
  updateProductById,
  deleteProductById,
} from "./controllers/product.controller.js";
import connectDb from "./db/index.js";

// Connect to MongoDB
connectDb();

const app = express();
app.use(express.json());

app.get("/products", fetchProducts);
app.get("/products/:id", fetchProductById);
app.post("/products", createProduct);
app.patch("/products/:id", updateProductById);
app.delete("/products/:id", deleteProductById);

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
