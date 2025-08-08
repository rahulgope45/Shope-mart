import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: Array, required: true },
    offerPrice: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: [String], required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// ✅ FIXED model check
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
