import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";

export const runtime = "nodejs";

export async function GET(req, context) {
  await connectDB();

  // 🔥 FIX: params must be awaited
  const { filename } = await context.params;
  const decodedFilename = decodeURIComponent(filename);

  const bucket = new mongoose.mongo.GridFSBucket(
    mongoose.connection.db,
    { bucketName: "uploads" }
  );

  const file = await mongoose.connection.db
    .collection("uploads.files")
    .findOne({ filename: decodedFilename });

  if (!file) {
    return new Response("File not found", { status: 404 });
  }

  const nodeStream = bucket.openDownloadStreamByName(decodedFilename);

  const webStream = new ReadableStream({
    start(controller) {
      nodeStream.on("data", (chunk) => controller.enqueue(chunk));
      nodeStream.on("end", () => controller.close());
      nodeStream.on("error", (err) => controller.error(err));
    },
  });

  return new Response(webStream, {
    headers: {
      "Content-Type": file.contentType || "image/jpeg",
      "Content-Length": file.length.toString(),
      "Cache-Control": "public, max-age=31536000",
    },
  });
}
