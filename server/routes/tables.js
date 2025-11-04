// const express = require('express');
// const router = express.Router();
// const Table = require('../models/Table');

// // GET all tables
// router.get('/', async (req,res)=>{
//   const tables = await Table.find();
//   res.json(tables);
// });

// // GET table by qrSlug
// router.get('/:slug', async (req,res)=>{
//   const table = await Table.findOne({qrSlug:req.params.slug});
//   if(!table) return res.status(404).json({error:'Table not found'});
//   res.json(table);
// });

// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const QRCode = require('qrcode');
// const Table = require('../models/Table');

// // ✅ GET all tables
// router.get('/', async (req, res) => {
//   try {
//     const tables = await Table.find();
//     res.json(tables);
//   } catch (err) {
//     console.error('Error fetching tables:', err);
//     res.status(500).json({ error: 'Failed to fetch tables' });
//   }
// });

// // ✅ GET table by qrSlug
// router.get('/:slug', async (req, res) => {
//   try {
//     const table = await Table.findOne({ qrSlug: req.params.slug });
//     if (!table) return res.status(404).json({ error: 'Table not found' });
//     res.json(table);
//   } catch (err) {
//     console.error('Error fetching table by slug:', err);
//     res.status(500).json({ error: 'Failed to fetch table' });
//   }
// });

// // ✅ Generate QR code for a specific table (auto-create if missing)
// router.post('/generate-qr', async (req, res) => {
//   try {
//     const { number } = req.body;

//     if (!number)
//       return res.status(400).json({ error: 'Table number is required' });

//     const qrSlug = `table-${number}`;

//     // Check if table already exists
//     let table = await Table.findOne({ qrSlug });
//     if (!table) {
//       table = await Table.create({ number, qrSlug });
//     }

//     // ✅ Frontend URL for this table’s menu
//     const qrUrl = `http://localhost:5173/menu/${qrSlug}`; // change domain when deployed

//     // ✅ Generate base64 QR image
//     const qrImage = await QRCode.toDataURL(qrUrl);

//     res.json({
//       success: true,
//       message: 'QR code generated successfully',
//       qrUrl,
//       qrImage,
//       table,
//     });
//   } catch (error) {
//     console.error('Error generating QR code:', error);
//     res.status(500).json({ error: 'Failed to generate QR code' });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const QRCode = require("qrcode");
const Table = require("../models/Table");

// ✅ GET all tables
router.get("/", async (req, res) => {
  try {
    const tables = await Table.find().populate("assignedStaff", "name email"); // shows assigned staff details
    res.status(200).json({
      success: true,
      count: tables.length,
      tables,
    });
  } catch (err) {
    console.error("❌ Error fetching tables:", err);
    res.status(500).json({ success: false, message: "Failed to fetch tables" });
  }
});

// ✅ GET table by slug
router.get("/:slug", async (req, res) => {
  try {
    const table = await Table.findOne({ qrSlug: req.params.slug }).populate("assignedStaff", "name email");
    if (!table) return res.status(404).json({ success: false, message: "Table not found" });

    res.status(200).json({ success: true, table });
  } catch (err) {
    console.error("❌ Error fetching table by slug:", err);
    res.status(500).json({ success: false, message: "Failed to fetch table" });
  }
});

// ✅ ADD new table manually (for admin)
router.post("/", async (req, res) => {
  try {
    const { number, status, assignedStaff } = req.body;
    if (!number) return res.status(400).json({ success: false, message: "Table number is required" });

    const qrSlug = `table-${number}`;

    const existing = await Table.findOne({ qrSlug });
    if (existing)
      return res.status(400).json({ success: false, message: "Table already exists" });

    const table = await Table.create({ number, qrSlug, status, assignedStaff });

    res.status(201).json({ success: true, message: "Table created", table });
  } catch (error) {
    console.error("❌ Error creating table:", error);
    res.status(500).json({ success: false, message: "Failed to create table" });
  }
});

// ✅ UPDATE table (status, staff, etc.)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Table.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Table not found" });

    res.status(200).json({ success: true, message: "Table updated", table: updated });
  } catch (error) {
    console.error("❌ Error updating table:", error);
    res.status(500).json({ success: false, message: "Failed to update table" });
  }
});

// ✅ DELETE table
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Table.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Table not found" });

    res.status(200).json({ success: true, message: "Table deleted" });
  } catch (error) {
    console.error("❌ Error deleting table:", error);
    res.status(500).json({ success: false, message: "Failed to delete table" });
  }
});

// ✅ Generate or retrieve QR code for a specific table
router.post("/generate-qr", async (req, res) => {
  try {
    const { number } = req.body;

    if (!number)
      return res.status(400).json({ success: false, message: "Table number is required" });

    const qrSlug = `table-${number}`;

    // Check if table exists or create new
    let table = await Table.findOne({ qrSlug });
    if (!table) {
      table = await Table.create({ number, qrSlug });
    }

    // ✅ Frontend link (change when deploying)
    const qrUrl = `http://localhost:5173/menu/${qrSlug}`;

    // ✅ Generate base64 QR image
    const qrImage = await QRCode.toDataURL(qrUrl);

    res.status(200).json({
      success: true,
      message: "QR code generated successfully",
      qrUrl,
      qrImage,
      table,
    });
  } catch (error) {
    console.error("❌ Error generating QR code:", error);
    res.status(500).json({ success: false, message: "Failed to generate QR code" });
  }
});

module.exports = router;
