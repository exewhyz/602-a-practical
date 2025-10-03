import productModel from "../models/product.model.js";

export const fetchProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    return res.status(200).json({
      message: "All products fetched",
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error fetching products: ${error.message}`,
    });
  }
};
export const fetchProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({
        message: `Product: ${productId} not found`,
      });
    }
    return res.status(200).json({
      message: "Product fetched",
      product : product,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error fetching product ${productId}: ${error.message}`,
    });
  }
};
export const createProduct = async (req, res) => {
  const { name, price, stock, color } = req.body;
  try {
    const newProduct = {
      name,
      price,
      stock,
      color,
    };
    const product = await productModel.create(newProduct);
    return res.status(201).json({
      message: "Product created",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error creating product: ${error.message}`,
    });
  }
};
export const updateProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({
        message: `Product: ${productId} not found`,
      });
    }
    return res.status(200).json({
      message: "Product updated",
      updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error updating product: ${error.message}`,
    });
  }
};

export const deleteProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await productModel.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({
        message: `Product: ${productId} not found`,
      });
    }
    return res.status(200).json({
      message: "Product deleted",
      deletedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: `Error deleting product: ${error.message}`,
    });
  }
};
