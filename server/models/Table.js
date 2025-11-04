// const mongoose = require('mongoose');
// const tableSchema = new mongoose.Schema({
//   number: { type: Number, required: true },
//   qrSlug: { type: String, required: true, unique: true },
//   activeSessionId: String
// });

// module.exports = mongoose.model('Table', tableSchema);
const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema(
  {
    // Table number or name (like 1, 2, VIP-1)
    number: {
      type: Number,
      required: true,
      unique: true,
    },

    // Unique slug used in QR link (like "table-1")
    qrSlug: {
      type: String,
      required: true,
      unique: true,
    },

    // To track active order/session if any
    activeSessionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      default: null,
    },

    // To mark availability
    status: {
      type: String,
      enum: ["Available", "Occupied", "Reserved"],
      default: "Available",
    },

    // Optional field to assign staff
    assignedStaff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true } // auto adds createdAt, updatedAt
);

module.exports = mongoose.model('Table', tableSchema);
