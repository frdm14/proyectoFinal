const mongoose = require("mongoose")

const Schema = mongoose.Schema
const schema = new Schema(
    {
      title: {
        type: String,
        required: true,
        unique: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        
      },
      desc: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      
      reviews: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Reviews",
        },
      ],
  
      featured: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  );
  const Tour = mongoose.model("Tour", schema)
module.exports = {Tour}