import mongoose from "mongoose"

const meetingSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  meetingCode: {
    type: String,
    required: true,
  
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Meeting = mongoose.model("Meeting", meetingSchema)

export default Meeting
