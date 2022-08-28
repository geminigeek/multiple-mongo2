// users schema
import mongoose from "mongoose"
const { Schema } = mongoose
export const UserSchema = new Schema({
  name: { type: String, required: true },
})
