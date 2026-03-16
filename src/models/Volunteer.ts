import mongoose from "mongoose";

const VolunteerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email",
      ],
    },
    role: {
      type: String,
      required: [true, "Please select a volunteer role"],
      enum: ["Join Campaign", "Volunteer", "Share Ideas"],
    },
    timestamp: {
      type: Date, 
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Volunteer ||
  mongoose.model("Volunteer", VolunteerSchema);
