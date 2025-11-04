const express = require("express");
const router = express.Router();
const Staff = require("../models/Staff");

// ✅ GET all staff
router.get("/", async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json({ success: true, staff });
  } catch (err) {
    console.error("Error fetching staff:", err);
    res.status(500).json({ success: false, message: "Failed to fetch staff" });
  }
});

// ✅ ADD new staff
router.post("/", async (req, res) => {
  try {
    const { name, role, phone, email } = req.body;
    if (!name || !role || !phone || !email)
      return res.status(400).json({ success: false, message: "All fields are required" });

    const newStaff = await Staff.create({ name, role, phone, email });
    res.status(201).json({ success: true, message: "Staff added successfully", staff: newStaff });
  } catch (err) {
    console.error("Error adding staff:", err);
    res.status(500).json({ success: false, message: "Failed to add staff" });
  }
});

// ✅ DELETE staff by ID
router.delete("/:id", async (req, res) => {
  try {
    const staff = await Staff.findByIdAndDelete(req.params.id);
    if (!staff)
      return res.status(404).json({ success: false, message: "Staff not found" });

    res.json({ success: true, message: "Staff deleted successfully" });
  } catch (err) {
    console.error("Error deleting staff:", err);
    res.status(500).json({ success: false, message: "Failed to delete staff" });
  }
});

module.exports = router;
