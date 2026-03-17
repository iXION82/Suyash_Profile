import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Volunteer from "@/models/Volunteer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, role } = body;

    if (!email || !role) {
      return NextResponse.json(
        { message: "Email and Role are required" },
        { status: 400 }
      );
    }

    await connectDB();

    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return NextResponse.json(
        { message: "This email has already joined the campaign!" },
        { status: 409 }
      );
    }

    const newVolunteer = await Volunteer.create({
      email,
      role,
    });

    return NextResponse.json(
      { message: "Thank you for showing interest!", data: newVolunteer },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("🚀 Volunteer Volunteer API Error Details:", error);
    
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "This email has already joined the campaign!" },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { 
        message: error.message || "Failed to process request", 
        error: error.stack 
      },
      { status: 500 }
    );
  }
}
