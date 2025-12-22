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
    // Heading section
    name: { type: String, required: true },          // Main heading
    subheading: { type: String, required: true },    // Sub heading text

    // Metadata
    category: { type: String },
    image: { type: String },

    // Key features (bullets)
    features: [{ type: String }],

    // Product table data
    products: [ProductRowSchema],
  },
  { timestamps: true }
);

export default mongoose.models.Service || mongoose.model("Service", ServiceSchema);
