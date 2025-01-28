import { Request, Response } from "express";
import Product from "../../models/shoppingModel/productModel";
import multer from "multer";

// multer configuration

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const name = `${Date.now()}-${file.originalname}`;
    cb(null, name);
  },
});
export const uploader = multer({ storage });

// Get all products
export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error });
  }
};

// Add a new product
export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, image, price, rating, category, specifications } = req.body;

    const newProduct = new Product({
      name,
      image,
      price,
      rating,
      category,
      specifications,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: "Failed to create product", error });
  }
};

// Get a single product by ID
export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const productid = req.params.id;
  try {
    const product = await Product.findById({ _id: productid });

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product", error });
  }
};

// update product


export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const productid = req.params.id;
  try {
    const updatedData = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      productid,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedProduct) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: "Failed to update product", error });
  }
};

// Delete product

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const productid = req.params.id;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productid);

    if (!deletedProduct) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product", error });
  }
};
