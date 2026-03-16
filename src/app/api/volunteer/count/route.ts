import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Volunteer from "@/models/Volunteer";

// Disable caching for this route to always get the latest count
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectDB();
    const count = await Volunteer.countDocuments();
    
    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch volunteer count:", error);
    return NextResponse.json({ count: 200 }, { status: 500 }); // Fallback to 200 on error
  }
}
