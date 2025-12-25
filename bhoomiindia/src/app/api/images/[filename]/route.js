import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";

export const runtime = "nodejs";

export async function GET(req, { params }) {
  await connectDB();

  const { filename } = params;

  const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: "uploads",
  });

  try {
    const stream = bucket.openDownloadStreamByName(decodeURIComponent(filename));

    return new Response(stream, {
      headers: {
        "Content-Type": "image/jpeg", // change if PNG
      },
    });
  } catch (err) {
    return new Response("File not found", { status: 404 });
  }
}
