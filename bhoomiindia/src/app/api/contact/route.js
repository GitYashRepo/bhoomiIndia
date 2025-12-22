import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import contact from "@/models/Contact";


export async function POST(req){
  try {
    await dbConnect();
    const body = await req.json();
    await contact.create(body);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function GET(){
  await dbConnect();
  const contacts = await contact.find().sort({ createdAt: -1 });
  return NextResponse.json(contacts);
}
