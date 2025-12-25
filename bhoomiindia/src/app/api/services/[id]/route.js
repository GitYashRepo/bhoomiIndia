export const runtime = "nodejs";

import dbConnect from "@/lib/mongodb";
import Service from "@/models/Service";
import { NextResponse } from "next/server";

export async function PUT(req, context) {
  try {
    const { params } = context;
    const { id } = await params;   // ✅ IMPORTANT FIX

    await dbConnect();

    const body = await req.json();

    const updatedService = await Service.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true }
    );

    if (!updatedService) {
      return NextResponse.json(
        { error: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedService);
  } catch (error) {
    console.error("PUT SERVICE ERROR:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, context) {
  try {
    const { params } = context;
    const { id } = await params;   // ✅ SAME FIX

    await dbConnect();
    await Service.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
