import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import ContactMessage from "@/models/ContactMessage";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await connectDB();

    const newMessage = await ContactMessage.create({
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json(
      { message: "Message sent successfully!", data: newMessage },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("🚀 Contact API Error Details:", error);
    return NextResponse.json(
      { 
        message: error.message || "Failed to send message", 
        error: error.stack 
      },
      { status: 500 }
    );
  }
}
