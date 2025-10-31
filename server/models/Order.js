// // //  const mongoose = require('mongoose');
// // // const orderSchema = new mongoose.Schema({
// // //   tableId: { type: mongoose.Schema.Types.ObjectId, ref: 'Table' },
// // //   items: [{ menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }, qty: Number, note: String }],
// // //   status: { type: String, enum: ['placed','preparing','ready','served','canceled'], default: 'placed' },
// // //   totals: Number
// // // },{ timestamps: true });

// // // module.exports = mongoose.model('Order', orderSchema);
// // // const mongoose = require('mongoose');

// // // const orderSchema = new mongoose.Schema(
// // //   {
// // //     // ✅ Instead of linking by ObjectId, we’ll track table using its QR slug
// // //     tableSlug: { type: String, required: true },

// // //     // ✅ Items ordered
// // //     items: [
// // //       {
// // //         menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
// // //         qty: { type: Number, required: true },
// // //         price: { type: Number, required: true },
// // //         note: String, // optional note like "less spicy"
// // //       },
// // //     ],

// // //     // ✅ Order status for staff/admin panel tracking
// // //     status: {
// // //       type: String,
// // //       enum: ['placed', 'preparing', 'ready', 'served', 'canceled'],
// // //       default: 'placed',
// // //     },

// // //     // ✅ Optional total amount field
// // //     totals: { type: Number, default: 0 },
// // //   },
// // //   { timestamps: true }
// // // );

// // // module.exports = mongoose.model('Order', orderSchema);



// // const mongoose = require("mongoose");

// // const orderSchema = new mongoose.Schema(
// //   {
// //     // ✅ Reference to Table — optional (for staff/admin link)
// //     tableId: {
// //       type: mongoose.Schema.Types.ObjectId,
// //       ref: "Table",
// //     },

// //     // ✅ Table Slug (used for QR-based orders)
// //     tableSlug: {
// //       type: String,
// //       required: true,
// //     },

// //     // ✅ Ordered Items
// //     items: [
// //       {
// //         menuItemId: {
// //           type: mongoose.Schema.Types.ObjectId,
// //           ref: "MenuItem",
// //           required: true,
// //         },
// //         name: { type: String }, // optional for quick lookup
// //         qty: { type: Number, required: true },
// //         price: { type: Number, required: true },
// //         note: { type: String }, // example: "no onions"
// //       },
// //     ],

// //     // ✅ Total price for entire order
// //     totalPrice: {
// //       type: Number,
// //       default: 0,
// //     },

// //     // ✅ Order Status
// //     status: {
// //       type: String,
// //       enum: ["placed", "preparing", "ready", "served", "canceled"],
// //       default: "placed",
// //     },
// //   },
// //   { timestamps: true }
// // );

// // module.exports = mongoose.model("Order", orderSchema);
// const mongoose = require("mongoose");

// const OrderSchema = new mongoose.Schema({
//   tableId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Table",
//     required: true,
//   },
//   tableSlug: {
//     type: String,
//     required: true,
//   },
//   items: [
//     {
//       menuItemId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "MenuItem",
//         required: true,
//       },
//       name: String,
//       qty: { type: Number, default: 1 },
//       price: { type: Number, required: true },
//     },
//   ],
//   totalPrice: {
//     type: Number,
//     required: true,
//     default: 0,
//   },
//   status: {
//     type: String,
//     enum: ["placed", "preparing", "served", "cancelled"],
//     default: "placed",
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // 🧠 Auto-calculate totalPrice before saving
// OrderSchema.pre("save", function (next) {
//   this.totalPrice = this.items.reduce((sum, item) => {
//     const qty = Number(item.qty) || 1;
//     const price = Number(item.price) || 0;
//     return sum + qty * price;
//   }, 0);
//   next();
// });

// module.exports = mongoose.model("Order", OrderSchema);
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    // ✅ Reference to Table
    tableId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
    },

    // ✅ Table Slug (used for QR-based orders)
    tableSlug: {
      type: String,
      required: true,
    },

    // ✅ Ordered Items
    items: [
      {
        menuItemId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "MenuItem",
          required: true,
        },
        name: { type: String },
        qty: { type: Number, required: true, default: 1 },
        price: { type: Number, required: true, default: 0 },
        note: { type: String },
      },
    ],

    // ✅ Total Price — will be auto-calculated
    totalPrice: {
      type: Number,
      default: 0,
    },

    // ✅ Order Status
    status: {
      type: String,
      enum: ["placed", "preparing", "served", "cancelled"],
      default: "placed",
    },
  },
  { timestamps: true }
);

// 🧠 Automatically calculate totalPrice before saving
orderSchema.pre("save", function (next) {
  this.totalPrice = this.items.reduce((sum, item) => {
    const qty = Number(item.qty) || 1;
    const price = Number(item.price) || 0;
    return sum + qty * price;
  }, 0);
  next();
});

module.exports = mongoose.model("Order", orderSchema);
