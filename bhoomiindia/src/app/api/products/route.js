import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";

export async function POST(req) {
  try {
    console.log("🔵 POST /api/products called");

    await dbConnect();
    console.log("🟢 MongoDB connected");

    const body = await req.json();
    console.log("📦 Request Body:", body);

    const product = await Product.create(body);
    console.log("✅ Product Created:", product._id);

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("❌ Product CREATE ERROR:");
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
    const productName = searchParams.get("productName");

    // 🔹 If name exists → fetch ONE
    if (productName) {
      const product = await Product.findOne({ productName }).lean();
      return NextResponse.json(product, {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      });
    }

    // 🔹 Else → fetch ALL
    const products = await Product.find().lean();

    return NextResponse.json(products, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(null, { status: 500 });
  }
}
