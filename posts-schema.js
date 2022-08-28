import mongoose from "mongoose"
const { Schema } = mongoose
export const PostSchema = new Schema({
  text: { type: String },
  title: { type: String },
})
