// // // const mongoose = require('mongoose');
// // // const userSchema = new mongoose.Schema({
// // //   name: String,
// // //   email: { type: String, unique: true },
// // //   passwordHash: String,
// // //   role: { type: String, enum: ['customer','staff','admin'], default: 'customer' }
// // // }, { timestamps: true });

// // // module.exports = mongoose.model('User', userSchema);
// // const mongoose = require("mongoose");

// // const userSchema = new mongoose.Schema(
// //   {
// //     name: {
// //       type: String,
// //       required: true,
// //       trim: true,
// //     },
// //     email: {
// //       type: String,
// //       unique: true,
// //       required: true,
// //       lowercase: true,
// //       trim: true,
// //     },
// //     passwordHash: {
// //       type: String,
// //       required: true,
// //     },
// //     role: {
// //       type: String,
// //       enum: ["customer", "staff", "admin"],
// //       default: "customer",
// //     },
// //   },
// //   { timestamps: true }
// // );

// // // Optional: Ensure unique email index
// // userSchema.index({ email: 1 }, { unique: true });

// // module.exports = mongoose.model("User", userSchema);
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true, trim: true },
//     email: { type: String, unique: true, required: true, lowercase: true, trim: true },
//     passwordHash: { type: String, required: true },
//     role: { type: String, enum: ["customer", "staff", "admin"], default: "customer" },
//   },
//   { timestamps: true }
// );

// // Ensure unique email index
// userSchema.index({ email: 1 }, { unique: true });

// module.exports = mongoose.model("User", userSchema);
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  role: { type: String, enum: ['customer','staff','admin'], default: 'customer' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
