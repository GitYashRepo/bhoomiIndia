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
    console.log("🔵 GET /api/services called");

    await dbConnect();
    console.log("🟢 MongoDB connected");

    const services = await Service.find();
    console.log("📦 Services fetched:", services.length);

    return NextResponse.json(services);
  } catch (error) {
    console.error("❌ GET /api/services FAILED");
    console.error(error); // ← THIS tells us the real problem

    return NextResponse.json([], { status: 500 });
  }
}
