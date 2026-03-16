import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Volunteer from "@/models/Volunteer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, role } = body;

    // Validate required fields
    if (!email || !role) {
      return NextResponse.json(
        { message: "Email and Role are required" },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Check if email already exists
    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return NextResponse.json(
        { message: "This email has already joined the campaign!" },
        { status: 409 }
      );
    }

    // Create new volunteer entry
    const newVolunteer = await Volunteer.create({
      email,
      role,
    });

    return NextResponse.json(
      { message: "Thank you for showing interest!", data: newVolunteer },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Volunteer API Error:", error);
    
    // Check for MongoDB duplicate key error (E11000)
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "This email has already joined the campaign!" },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { message: "Failed to process request", error: error.message },
      { status: 500 }
    );
  }
}
