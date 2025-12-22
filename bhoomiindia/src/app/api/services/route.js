import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Service from "@/models/Service";

export async function POST(req) {
  try {
    console.log("🔵 POST /api/services called");

    await dbConnect();
    console.log("🟢 MongoDB connected");

    const body = await req.json();
    console.log("📦 Request Body:", body);

    const service = await Service.create(body);
    console.log("✅ Service Created:", service._id);

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.error("❌ SERVICE CREATE ERROR:");
    console.error(error);

    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const services = await Service.find().sort({ createdAt: -1 });
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
