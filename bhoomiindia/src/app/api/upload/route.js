import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import mongoose from "mongoose";

export const runtime = "nodejs";

export async function POST(req) {
  await dbConnect();

  const formData = await req.formData();
  const file = formData.get("image");

  if (!file) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const bucket = new mongoose.mongo.GridFSBucket(
    mongoose.connection.db,
    { bucketName: "uploads" }
  );

  const filename = `${Date.now()}-${file.name}`;

  await new Promise((resolve, reject) => {
    const uploadStream = bucket.openUploadStream(filename, {
      contentType: file.type, // VERY IMPORTANT
    });

    uploadStream.end(buffer);
    uploadStream.on("finish", resolve);
    uploadStream.on("error", reject);
  });

  return NextResponse.json({ filename });
}
