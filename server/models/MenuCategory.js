// //  const mongoose = require('mongoose');
// // const menuCategorySchema = new mongoose.Schema({
// //   name: String,
// //   displayOrder: Number,
// //   active: { type: Boolean, default: true }
// // });
// // module.exports = mongoose.model('MenuCategory', menuCategorySchema);
// const mongoose = require("mongoose");

// const menuCategorySchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: String,
//   displayOrder: { type: Number, default: 0 },
//   active: { type: Boolean, default: true },
// }, { timestamps: true });

// module.exports = mongoose.model("MenuCategory", menuCategorySchema);
// server/models/MenuCategory.js
// const mongoose = require("mongoose");

// const menuCategorySchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     description: { type: String },
//     displayOrder: { type: Number, default: 0 },
//     active: { type: Boolean, default: true },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.models.MenuCategory || mongoose.model("MenuCategory", menuCategorySchema);
// const mongoose = require("mongoose");

// const menuCategorySchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Category name is required"],
//       trim: true,
//     },
//     description: {
//       type: String,
//       trim: true,
//     },
//     displayOrder: {
//       type: Number,
//       default: 0,
//     },
//     active: {
//       type: Boolean,
//       default: true,
//     },

//     // 🖼️ Category image (Multer upload)
//     image: {
//       type: String,
//       default: "",
//       get: (img) => (img ? img : "/uploads/default-category.jpg"),
//     },

//     // 🧩 Optional legacy field (auto-fill into `image`)
//     imageUrl: {
//       type: String,
//       set: function (v) {
//         if (!this.image && v) this.image = v;
//         return v;
//       },
//     },
//   },
//   {
//     timestamps: true,
//     toJSON: { getters: true },
//     toObject: { getters: true },
//   }
// );

// // ⚡ Index for faster search and sorting
// menuCategorySchema.index({ name: 1, active: 1 });

// // ✅ Safe export to prevent OverwriteModelError
// module.exports =
//   mongoose.models.MenuCategory ||
//   mongoose.model("MenuCategory", menuCategorySchema);
const mongoose = require("mongoose");

const menuCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    displayOrder: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: true,
    },

    // 🖼️ Category image (Multer upload)
    image: {
      type: String,
      default: "",
      get: (img) => {
        if (!img) return "/uploads/default-category.jpg";
        // Agar multer file sirf "abc.jpg" return kare to /uploads prefix add kare
        return img.startsWith("/uploads/") ? img : `/uploads/${img}`;
      },
    },

    // 🧩 Optional legacy field (auto-fill into `image`)
    imageUrl: {
      type: String,
      set: function (v) {
        if (!this.image && v) this.image = v;
        return v;
      },
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

// ⚡ Index for faster search and sorting
menuCategorySchema.index({ name: 1, active: 1 });

// ✅ Safe export to prevent OverwriteModelError
module.exports =
  mongoose.models.MenuCategory ||
  mongoose.model("MenuCategory", menuCategorySchema);
