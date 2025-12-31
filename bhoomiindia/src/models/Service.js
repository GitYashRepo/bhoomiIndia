import mongoose from "mongoose";

const ProductRowSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    use: { type: String},
    solidContent: { type: String},
    graphite: { type: String},
  },
  { _id: false }
);

const ServiceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subheading: { type: String, required: true },
    category: { type: String },
    image: { type: String },
    features: [{ type: String }],
    products: [ProductRowSchema],
  },
  { timestamps: true }
);

export default mongoose.models.Service || mongoose.model("Service", ServiceSchema);
