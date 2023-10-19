import mongoose from "mongoose";

const watchCardSchema = mongoose.Schema(
  {
    watchMark: {
      type: String,
      required: true,
    },
    watchName: {
      type: String,
      required: true,
    },
    watchImage: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: Number,
    },
    newPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Watch = mongoose.model("Watch",watchCardSchema);
export default Watch;
