import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    image: { type: String},
    category: { type: String},
    heading: { type: String},
    description: { type: String},
  },
  { timestamps: true }
);

export default mongoose.models.Gallery || mongoose.model("Gallery", GallerySchema);
