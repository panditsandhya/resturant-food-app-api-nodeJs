const mongoose = require("mongoose");

// Schema
const orderSchema = new mongoose.Schema(
  {
    foods: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Foods'
      }
    ],
    payments:{},
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
    },
    status: {
      type: String,
      enum: ['preparing', 'prepare','on the way', 'deliverd'],
      default: 'preparing'
    },

  },
  
  { timestamps: true });

module.exports = mongoose.model("Orders", orderSchema);
