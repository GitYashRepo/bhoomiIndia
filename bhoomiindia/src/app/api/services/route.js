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


export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");

    // 🔹 If name exists → fetch ONE
    if (name) {
      const service = await Service.findOne({ name }).lean();
      return NextResponse.json(service, {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      });
    }

    // 🔹 Else → fetch ALL
    const services = await Service.find().lean();

    return NextResponse.json(services, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(null, { status: 500 });
  }
}
