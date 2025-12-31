import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    image: { type: String },
    heading: { type: String },
    description: { type: String },

    // ✅ NEW FIELD
    categories: {
      type: [String],
      enum: ["Die Casting Tools", "Tools And Accessories"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
