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
// const mongoose = require("mongoose");

// const menuItemSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     description: { type: String },
//     price: { type: Number, required: true },
//     categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuCategory", required: true },

//     // ✅ Main image field
//     image: { type: String, default: "" }, // stores URL like "/uploads/xyz.jpg"

//     // 🧩 Optional legacy support for old data (can be removed later)
//     imageUrl: { type: String },

//     availability: { type: Boolean, default: true },
//     tags: [String],
//     tableSlug: { type: String, default: "default-table" },
//   },
//   { timestamps: true }
// );

// // ⚡ Index to optimize category + name lookups
// menuItemSchema.index({ categoryId: 1, name: 1 });

// // ✅ Export model safely
// module.exports = mongoose.models.MenuItem || mongoose.model("MenuItem", menuItemSchema);
// const mongoose = require("mongoose");

// const menuItemSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Menu item name is required"],
//       trim: true,
//     },
//     description: {
//       type: String,
//       trim: true,
//     },
//     price: {
//       type: Number,
//       required: [true, "Price is required"],
//       min: [0, "Price cannot be negative"],
//     },
//     categoryId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "MenuCategory",
//       required: [true, "Category ID is required"],
//     },

//     // ✅ Main image field (for new uploads)
//     image: {
//       type: String,
//       default: "",
//       get: (img) => (img ? img : "/uploads/default-placeholder.jpg"),
//     },

//     // 🧩 Legacy support (auto-fills into image if available)
//     imageUrl: {
//       type: String,
//       set: function (v) {
//         if (!this.image && v) this.image = v;
//         return v;
//       },
//     },

//     availability: {
//       type: Boolean,
//       default: true,
//     },

//     tags: {
//       type: [String],
//       default: [],
//     },

//     // 🪑 Optional field for associating with a table (used in orders)
//     tableSlug: {
//       type: String,
//       default: "default-table",
//     },
//   },
//   {
//     timestamps: true,
//     toJSON: { getters: true },
//     toObject: { getters: true },
//   }
// );

// // ⚡ Index to optimize category + name search
// menuItemSchema.index({ categoryId: 1, name: 1 });

// // ✅ Export safely (prevents OverwriteModelError in hot reload)
// module.exports =
//   mongoose.models.MenuItem || mongoose.model("MenuItem", menuItemSchema);
const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Menu item name is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MenuCategory",
      required: [true, "Category ID is required"],
    },

    // ✅ Main image field (for multer uploads)
    image: {
      type: String,
      default: "",
      get: (img) => {
        if (!img) return "/uploads/default-placeholder.jpg";
        // Agar multer file sirf filename return kare to /uploads prefix add kare
        return img.startsWith("/uploads/") ? img : `/uploads/${img}`;
      },
    },

    // 🧩 Legacy support (auto-fills into image if available)
    imageUrl: {
      type: String,
      set: function (v) {
        if (!this.image && v) this.image = v;
        return v;
      },
    },

    availability: {
      type: Boolean,
      default: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    // 🪑 Optional field for associating with a table (used in orders)
    tableSlug: {
      type: String,
      default: "default-table",
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

// ⚡ Index to optimize category + name search
menuItemSchema.index({ categoryId: 1, name: 1 });

// ✅ Export safely (prevents OverwriteModelError in hot reload)
module.exports =
  mongoose.models.MenuItem || mongoose.model("MenuItem", menuItemSchema);
