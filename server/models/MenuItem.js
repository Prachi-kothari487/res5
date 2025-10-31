// // const mongoose = require('mongoose');

// // const menuItemSchema = new mongoose.Schema({
// //   name: String,
// //   description: String,
// //   price: Number,
// //   categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuCategory' },
// //   imageUrl: String,
// //   availability: { type: Boolean, default: true },
// //   tags: [String],
// //   tableSlug: { type: String, default: "default-table" } // ✅ new field
// // });

// // menuItemSchema.index({ categoryId: 1, name: 1 });
// // module.exports = mongoose.models.MenuItem || mongoose.model('MenuItem', menuItemSchema);

// const mongoose = require('mongoose');

// const menuItemSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: String,
//   price: { type: Number, required: true },
//   categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuCategory' },
//   imageUrl: String,
//   availability: { type: Boolean, default: true },
//   tags: [String],

//   // ✅ Default tableSlug fallback (for QR-based system)
//   tableSlug: { type: String, default: "default-table" },
// });

// // Improve query performance
// menuItemSchema.index({ categoryId: 1, name: 1 });

// module.exports = mongoose.models.MenuItem || mongoose.model('MenuItem', menuItemSchema);
// server/models/MenuItem.js
// const mongoose = require("mongoose");

// const menuItemSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     description: { type: String },
//     price: { type: Number, required: true },
//     categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuCategory" },
//     image: { type: String }, // frontend expects `image`
//     // legacy field kept for compatibility
//     imageUrl: { type: String },
//     availability: { type: Boolean, default: true },
//     tags: [String],
//     tableSlug: { type: String, default: "default-table" },
//   },
//   { timestamps: true }
// );

// // keep index to speed up queries
// menuItemSchema.index({ categoryId: 1, name: 1 });

// module.exports = mongoose.models.MenuItem || mongoose.model("MenuItem", menuItemSchema);
const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuCategory", required: true },

    // ✅ Main image field
    image: { type: String, default: "" }, // stores URL like "/uploads/xyz.jpg"

    // 🧩 Optional legacy support for old data (can be removed later)
    imageUrl: { type: String },

    availability: { type: Boolean, default: true },
    tags: [String],
    tableSlug: { type: String, default: "default-table" },
  },
  { timestamps: true }
);

// ⚡ Index to optimize category + name lookups
menuItemSchema.index({ categoryId: 1, name: 1 });

// ✅ Export model safely
module.exports = mongoose.models.MenuItem || mongoose.model("MenuItem", menuItemSchema);
