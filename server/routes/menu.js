// // // // // const express = require("express");
// // // // // const jwt = require("jsonwebtoken");
// // // // // const MenuItem = require("../models/MenuItem");

// // // // // const router = express.Router();

// // // // // // ===========================
// // // // // // ✅ GET ALL MENU ITEMS (with tableSlug filter)
// // // // // // ===========================
// // // // // router.get("/items", async (req, res) => {
// // // // //   try {
// // // // //     const token = req.headers.authorization?.split(" ")[1];
// // // // //     let role = "guest";

// // // // //     // 🧩 Log request info
// // // // //     console.log("📩 Received Query:", req.query);

// // // // //     // ✅ Decode JWT (if available)
// // // // //     if (token) {
// // // // //       try {
// // // // //         const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // // // //         role = decoded.role;
// // // // //       } catch {
// // // // //         console.log("⚠️ Invalid or expired token — treating as guest");
// // // // //       }
// // // // //     }

// // // // //     // ✅ Get tableSlug from query (both 'table' and 'tableSlug' accepted)
// // // // //     const tableSlug = req.query.tableSlug || req.query.table || "default-table";
// // // // //     console.log("🪑 Final TableSlug Used:", tableSlug);

// // // // //     // ✅ Query filter
// // // // //     let items;
// // // // //     if (role === "staff" || role === "admin") {
// // // // //       items = await MenuItem.find({ tableSlug });
// // // // //     } else {
// // // // //       items = await MenuItem.find({ tableSlug, availability: true });
// // // // //     }

// // // // //     if (!items || items.length === 0) {
// // // // //       console.log("⚠️ No items found for table:", tableSlug);
// // // // //       return res.status(200).json({ message: "No menu items found", items: [] });
// // // // //     }

// // // // //     console.log("✅ Items found:", items.length);
// // // // //     res.status(200).json(items);
// // // // //   } catch (err) {
// // // // //     console.error("❌ Menu fetch error:", err);
// // // // //     res.status(500).json({ error: "Server error" });
// // // // //   }
// // // // // });

// // // // // // ===========================
// // // // // // ✅ GET ALL UNIQUE CATEGORIES
// // // // // // ===========================
// // // // // router.get("/categories", async (req, res) => {
// // // // //   try {
// // // // //     const categories = await MenuItem.distinct("categoryId");
// // // // //     res.json(categories);
// // // // //   } catch (err) {
// // // // //     console.error("❌ Category fetch error:", err);
// // // // //     res.status(500).json({ error: "Server error" });
// // // // //   }
// // // // // });

// // // // // module.exports = router;
// // // // const express = require("express");
// // // // const jwt = require("jsonwebtoken");
// // // // const MenuItem = require("../models/MenuItem");

// // // // const router = express.Router();

// // // // // =====================================
// // // // // ✅ GET MENU ITEMS (filtered by tableSlug)
// // // // // =====================================
// // // // router.get("/items", async (req, res) => {
// // // //   try {
// // // //     const token = req.headers.authorization?.split(" ")[1];
// // // //     let role = "guest";

// // // //     // ✅ Decode JWT (if available)
// // // //     if (token) {
// // // //       try {
// // // //         const decoded = jwt.verify(token, process.env.JWT_SECRET);
// // // //         role = decoded.role;
// // // //       } catch (error) {
// // // //         console.log("⚠️ Invalid or expired token — treating as guest");
// // // //       }
// // // //     }

// // // //     // ✅ Get tableSlug from query (used when QR scanned)
// // // //     const tableSlug = req.query.tableSlug || "default-table";
// // // //     console.log("🪑 Requesting menu for table:", tableSlug);

// // // //     // ✅ Filter by tableSlug
// // // //     let filter = { tableSlug };
// // // //     if (role !== "staff" && role !== "admin") {
// // // //       filter.availability = true; // guests see only available items
// // // //     }

// // // //     // ✅ Fetch items
// // // //     const items = await MenuItem.find(filter).populate("categoryId", "name");

// // // //     if (!items.length) {
// // // //       console.log("⚠️ No menu items found for:", tableSlug);
// // // //       return res.status(200).json({ message: "No items available", items: [] });
// // // //     }

// // // //     console.log(`✅ Found ${items.length} items for ${tableSlug}`);
// // // //     return res.status(200).json({ items });
// // // //   } catch (err) {
// // // //     console.error("❌ Error fetching menu items:", err);
// // // //     res.status(500).json({ error: "Server error while fetching menu" });
// // // //   }
// // // // });

// // // // // =====================================
// // // // // ✅ GET UNIQUE CATEGORIES (optional use)
// // // // // =====================================
// // // // router.get("/categories", async (req, res) => {
// // // //   try {
// // // //     const categories = await MenuItem.distinct("categoryId");
// // // //     res.status(200).json({ categories });
// // // //   } catch (err) {
// // // //     console.error("❌ Error fetching categories:", err);
// // // //     res.status(500).json({ error: "Server error while fetching categories" });
// // // //   }
// // // // });

// // // // module.exports = router;
// // // // server/routes/menuRoutes.js
// // // // const express = require("express");
// // // // const router = express.Router();
// // // // const MenuItem = require("../models/MenuItem");
// // // // const Table = require("../models/Table");

// // // // // ✅ Fetch menu items for a tableSlug
// // // // router.get("/items", async (req, res) => {
// // // //   try {
// // // //     const { tableSlug } = req.query;
// // // //     console.log("📩 Received tableSlug:", tableSlug);

// // // //     if (!tableSlug) {
// // // //       return res.status(400).json({ error: "tableSlug is required" });
// // // //     }

// // // //     // ✅ Verify the table exists
// // // //     const table = await Table.findOne({ qrSlug: tableSlug });
// // // //     if (!table) {
// // // //       return res.status(404).json({ error: "Table not found" });
// // // //     }

// // // //     // ✅ Fetch all active menu items
// // // //     const items = await MenuItem.find({ active: true }).populate("categoryId", "name");

// // // //     if (!items.length) {
// // // //       console.log("⚠️ No menu items found");
// // // //       return res.status(200).json({ message: "No menu items found", items: [] });
// // // //     }

// // // //     console.log(`✅ Found ${items.length} items for ${tableSlug}`);
// // // //     return res.status(200).json(items);
// // // //   } catch (err) {
// // // //     console.error("❌ Error fetching menu items:", err);
// // // //     res.status(500).json({ error: "Internal Server Error" });
// // // //   }
// // // // });

// // // // module.exports = router;


// // // // const express = require("express");
// // // // const router = express.Router();
// // // // const MenuItem = require("../models/MenuItem");
// // // // const Table = require("../models/Table");
// // // // const MenuCategory = require("../models/MenuCategory");

// // // // // ✅ Fetch menu items (verify tableSlug only)
// // // // router.get("/items", async (req, res) => {
// // // //   try {
// // // //     const { tableSlug } = req.query;
// // // //     console.log("📩 Received tableSlug:", tableSlug);

// // // //     if (!tableSlug) {
// // // //       return res.status(400).json({ error: "tableSlug is required" });
// // // //     }

// // // //     // ✅ Verify the table exists (for valid QR scan)
// // // //     const table = await Table.findOne({ qrSlug: tableSlug });
// // // //     if (!table) {
// // // //       return res.status(404).json({ error: "Table not found" });
// // // //     }

// // // //     // ✅ Fetch all available menu items (no tableSlug filter)
// // // //     const items = await MenuItem.find({ availability: true })
// // // //       .populate("categoryId", "name");

// // // //     if (!items.length) {
// // // //       console.log("⚠️ No menu items found");
// // // //       return res.status(200).json({ message: "No menu items found", items: [] });
// // // //     }

// // // //     console.log(`✅ Found ${items.length} menu items for table: ${tableSlug}`);
// // // //     return res.status(200).json(items);

// // // //   } catch (err) {
// // // //     console.error("❌ Error fetching menu items:", err.message);
// // // //     console.error(err.stack);
// // // //     res.status(500).json({ error: "Internal Server Error" });
// // // //   }
// // // // });

// // // // module.exports = router;





// // // // const express = require("express");
// // // // const router = express.Router();
// // // // const MenuItem = require("../models/MenuItem");
// // // // const Table = require("../models/Table");

// // // // // ✅ Fetch menu items - verify tableSlug, but show all menu items
// // // // router.get("/items", async (req, res) => {
// // // //   try {
// // // //     const { tableSlug } = req.query;
// // // //     console.log("📩 Received tableSlug:", tableSlug);

// // // //     // ✅ TableSlug must exist
// // // //     if (!tableSlug) {
// // // //       return res.status(400).json({ error: "tableSlug is required" });
// // // //     }

// // // //     // ✅ Verify table exists
// // // //     const table = await Table.findOne({ qrSlug: tableSlug });
// // // //     if (!table) {
// // // //       return res.status(404).json({ error: "Invalid QR or table not found" });
// // // //     }

// // // //     // ✅ Fetch all menu items (regardless of table)
// // // //     const items = await MenuItem.find({ availability: true }).populate(
// // // //       "categoryId",
// // // //       "name"
// // // //     );

// // // //     if (!items.length) {
// // // //       console.log("⚠️ No menu items found");
// // // //       return res.status(200).json({ message: "No menu items found", items: [] });
// // // //     }

// // // //     console.log(`✅ Found ${items.length} items for valid tableSlug: ${tableSlug}`);
// // // //     return res.status(200).json(items);
// // // //   } catch (err) {
// // // //     console.error("❌ Error fetching menu items:", err.message);
// // // //     res.status(500).json({ error: "Internal Server Error" });
// // // //   }
// // // // });

// // // // module.exports = router;



// // // const express = require("express");
// // // const router = express.Router();
// // // const MenuItem = require("../models/MenuItem");
// // // const Table = require("../models/Table");

// // // // ✅ Fetch menu items - verify tableSlug, but show all menu items
// // // router.get("/items", async (req, res) => {
// // //   try {
// // //     const { tableSlug } = req.query;
// // //     console.log("📩 Received tableSlug:", tableSlug);

// // //     // ✅ Validate slug
// // //     if (!tableSlug) {
// // //       return res.status(400).json({ error: "tableSlug is required" });
// // //     }

// // //     // ✅ Normalize slug (convert 'table-1' → 'table1')
// // //     const normalizedSlug = tableSlug.replace("-", "");
// // //     console.log("🔧 Normalized Slug:", normalizedSlug);

// // //     // ✅ Check table exists
// // //     const table = await Table.findOne({ qrSlug: normalizedSlug });
// // //     if (!table) {
// // //       return res.status(404).json({ error: "Invalid QR or table not found" });
// // //     }

// // //     // ✅ Fetch all menu items
// // //     const items = await MenuItem.find({ availability: true }).populate(
// // //       "categoryId",
// // //       "name"
// // //     );

// // //     if (!items.length) {
// // //       console.log("⚠️ No menu items are found");
// // //       return res.status(200).json({ message: "No menu items found", items: [] });
// // //     }

// // //     console.log(`✅ Found ${items.length} items for valid tableSlug: ${normalizedSlug}`);
// // //     return res.status(200).json(items);
// // //   } catch (err) {
// // //     console.error("❌ Error fetching menu items:", err.message);
// // //     res.status(500).json({ error: "Internal Server Error" });
// // //   }
// // // });

// // // module.exports = router;
// // // server/routes/menu.js
// // const express = require("express");
// // const router = express.Router();
// // const MenuItem = require("../models/MenuItem");
// // const MenuCategory = require("../models/MenuCategory");
// // const Table = require("../models/Table");

// // // GET /api/menu/categories
// // router.get("/categories", async (req, res) => {
// //   try {
// //     const categories = await MenuCategory.find({ active: true }).sort({ displayOrder: 1 });
// //     return res.status(200).json({ success: true, count: categories.length, categories });
// //   } catch (err) {
// //     console.error("❌ Error fetching categories:", err.message);
// //     return res.status(500).json({ success: false, message: "Internal Server Error" });
// //   }
// // });

// // // GET /api/menu/items
// // // Optional query param: tableSlug (if provided, validate). If not provided, returns items (useful for dev).
// // router.get("/items", async (req, res) => {
// //   try {
// //     const { tableSlug } = req.query;
// //     console.log("📩 /api/menu/items called with tableSlug:", tableSlug);

// //     // If tableSlug is provided -> validate it
// //     if (tableSlug) {
// //       const normalizedSlug = tableSlug.replace(/-/g, "");
// //       const table = await Table.findOne({ qrSlug: normalizedSlug });
// //       if (!table) {
// //         return res.status(404).json({ success: false, message: "Invalid QR or table not found" });
// //       }
// //     }

// //     // Fetch menu items available
// //     const items = await MenuItem.find({ availability: true }).populate("categoryId", "name");

// //     if (!items || items.length === 0) {
// //       return res.status(200).json({ success: true, count: 0, items: [] });
// //     }

// //     // Normalize item shape for frontend (ensure `image` prop exists)
// //     const normalizedItems = items.map((it) => {
// //       const plain = it.toObject ? it.toObject() : it;
// //       return {
// //         ...plain,
// //         image: plain.image || plain.imageUrl || null,
// //         categoryId: plain.categoryId ? (plain.categoryId._id ? plain.categoryId._id.toString() : plain.categoryId) : null,
// //       };
// //     });

// //     return res.status(200).json({ success: true, count: normalizedItems.length, items: normalizedItems });
// //   } catch (err) {
// //     console.error("❌ Error fetching menu items:", err.message);
// //     return res.status(500).json({ success: false, message: "Internal Server Error" });
// //   }
// // });

// // module.exports = router;
// const express = require("express");
// const router = express.Router();
// const MenuItem = require("../models/MenuItem");
// const MenuCategory = require("../models/MenuCategory");
// const Table = require("../models/Table");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// // 📁 Ensure uploads folder exists
// const uploadDir = path.join(__dirname, "../../uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
//   console.log("📁 Created uploads folder:", uploadDir);
// }

// // ⚙️ Multer configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, uploadDir),
//   filename: (req, file, cb) => {
//     const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(
//       file.originalname
//     )}`;
//     cb(null, uniqueName);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowed = /jpeg|jpg|png|webp|gif/;
//   const ext = path.extname(file.originalname).toLowerCase();
//   if (allowed.test(ext) && allowed.test(file.mimetype)) cb(null, true);
//   else cb(new Error("Only image files are allowed!"));
// };

// const upload = multer({ storage, fileFilter });

// /* ---------------------------------------------------
//    📂 FETCH CATEGORIES
// --------------------------------------------------- */
// router.get("/categories", async (req, res) => {
//   try {
//     const categories = await MenuCategory.find({ active: true }).sort({ displayOrder: 1 });
//     return res.status(200).json({ success: true, count: categories.length, categories });
//   } catch (err) {
//     console.error("❌ Error fetching categories:", err.message);
//     return res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

// /* ---------------------------------------------------
//    🍔 FETCH MENU ITEMS
//    Optional query: tableSlug
// --------------------------------------------------- */
// router.get("/items", async (req, res) => {
//   try {
//     const { tableSlug } = req.query;
//     console.log("📩 /api/menu/items called with tableSlug:", tableSlug);

//     if (tableSlug) {
//       const normalizedSlug = tableSlug.replace(/-/g, "");
//       const table = await Table.findOne({ qrSlug: normalizedSlug });
//       if (!table) {
//         return res.status(404).json({ success: false, message: "Invalid QR or table not found" });
//       }
//     }

//     const items = await MenuItem.find({ availability: true }).populate("categoryId", "name");

//     const normalizedItems = items.map((it) => {
//       const plain = it.toObject ? it.toObject() : it;
//       return {
//         ...plain,
//         image: plain.image || plain.imageUrl || null,
//         categoryId: plain.categoryId?._id?.toString() || plain.categoryId || null,
//       };
//     });

//     return res.status(200).json({ success: true, count: normalizedItems.length, items: normalizedItems });
//   } catch (err) {
//     console.error("❌ Error fetching menu items:", err.message);
//     return res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

// /* ---------------------------------------------------
//    🆕 ADD NEW CATEGORY (with image upload)
// --------------------------------------------------- */
// router.post("/categories", upload.single("image"), async (req, res) => {
//   try {
//     const { name, description, displayOrder, active } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : "";

//     const newCategory = new MenuCategory({
//       name,
//       description,
//       displayOrder,
//       active,
//       image,
//     });

//     await newCategory.save();

//     return res.status(201).json({
//       success: true,
//       message: "Category created successfully!",
//       category: newCategory,
//     });
//   } catch (err) {
//     console.error("❌ Error creating category:", err.message);
//     return res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

// /* ---------------------------------------------------
//    🆕 ADD NEW MENU ITEM (with image upload)
// --------------------------------------------------- */
// router.post("/items", upload.single("image"), async (req, res) => {
//   try {
//     const { name, description, price, categoryId, availability, tags } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : "";

//     const newItem = new MenuItem({
//       name,
//       description,
//       price,
//       categoryId,
//       image,
//       availability: availability !== "false",
//       tags: tags ? tags.split(",").map((t) => t.trim()) : [],
//     });

//     await newItem.save();

//     return res.status(201).json({
//       success: true,
//       message: "Menu item added successfully!",
//       item: newItem,
//     });
//   } catch (err) {
//     console.error("❌ Error creating menu item:", err.message);
//     return res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

// module.exports = router;
// const express = require("express");
// const router = express.Router();
// const MenuItem = require("../models/MenuItem");
// const MenuCategory = require("../models/MenuCategory");
// const Table = require("../models/Table");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// // 📁 Ensure uploads folder exists
// const uploadDir = path.join(__dirname, "../../uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
//   console.log("📁 Created uploads folder:", uploadDir);
// }

// // ⚙️ Multer configuration
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => cb(null, uploadDir),
// //   filename: (req, file, cb) => {
// //     const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(
// //       file.originalname
// //     )}`;
// //     cb(null, uniqueName);
// //   },
// // });

// // const fileFilter = (req, file, cb) => {
// //   const allowed = /jpeg|jpg|png|webp|gif/;
// //   const ext = path.extname(file.originalname).toLowerCase();
// //   if (allowed.test(ext) && allowed.test(file.mimetype)) cb(null, true);
// //   else cb(new Error("Only image files are allowed!"));
// // };

// // const upload = multer({ storage, fileFilter });
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Folder to store uploaded images
//   },
//   filename: (req, file, cb) => {
//     const uniqueName =
//       Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
//     cb(null, uniqueName);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image/")) cb(null, true);
//   else cb(new Error("Only image files are allowed!"), false);
// };

// const upload = multer({ storage, fileFilter });
// /* ---------------------------------------------------
//    📂 FETCH CATEGORIES
// --------------------------------------------------- */
// router.get("/categories", async (req, res) => {
//   try {
//     const categories = await MenuCategory.find().sort({ displayOrder: 1 });
//     return res.status(200).json({ success: true, count: categories.length, categories });
//   } catch (err) {
//     console.error("❌ Error fetching categories:", err.message);
//     return res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

// /* ---------------------------------------------------
//    🍔 FETCH MENU ITEMS (optional: by tableSlug)
// --------------------------------------------------- */
// router.get("/items", async (req, res) => {
//   try {
//     const { tableSlug } = req.query;
//     console.log("📩 /api/menu/items called with tableSlug:", tableSlug);

//     if (tableSlug) {
//       const normalizedSlug = tableSlug.replace(/-/g, "");
//       const table = await Table.findOne({ qrSlug: normalizedSlug });
//       if (!table) {
//         return res.status(404).json({ success: false, message: "Invalid QR or table not found" });
//       }
//     }

//     const items = await MenuItem.find().populate("categoryId", "name");

//     const normalizedItems = items.map((it) => {
//       const plain = it.toObject ? it.toObject() : it;
//       return {
//         ...plain,
//         image: plain.image || plain.imageUrl || null,
//         categoryId: plain.categoryId?._id?.toString() || plain.categoryId || null,
//       };
//     });

//     return res.status(200).json({ success: true, count: normalizedItems.length, items: normalizedItems });
//   } catch (err) {
//     console.error("❌ Error fetching menu items:", err.message);
//     return res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

// /* ---------------------------------------------------
//    🆕 ADD NEW CATEGORY (with image upload)
// --------------------------------------------------- */
// router.post("/categories", upload.single("image"), async (req, res) => {
//   try {
//     const { name, description, displayOrder, active } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : "";

//     const newCategory = new MenuCategory({
//       name,
//       description,
//       displayOrder,
//       active,
//       image,
//     });

//     await newCategory.save();

//     return res.status(201).json({
//       success: true,
//       message: "Category created successfully!",
//       category: newCategory,
//     });
//   } catch (err) {
//     console.error("❌ Error creating category:", err.message);
//     return res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

// /* ---------------------------------------------------
//    🆕 ADD NEW MENU ITEM (with image upload)
// --------------------------------------------------- */
// // router.post("/items", upload.single("image"), async (req, res) => {
// //   try {
// //     const { name, description, price, categoryId, availability, tags } = req.body;
// //     const image = req.file ? `/uploads/${req.file.filename}` : "";

// //     const newItem = new MenuItem({
// //       name,
// //       description,
// //       price,
// //       categoryId,
// //       image,
// //       availability: availability !== "false",
// //       tags: tags ? tags.split(",").map((t) => t.trim()) : [],
// //     });

// //     await newItem.save();

// //     return res.status(201).json({
// //       success: true,
// //       message: "Menu item added successfully!",
// //       item: newItem,
// //     });
// //   } catch (err) {
// //     console.error("❌ Error creating menu item:", err.message);
// //     return res.status(500).json({ success: false, message: "Internal Server Error" });
// //   }
// // });
// router.post("/add-item", upload.single("image"), async (req, res) => {
//   try {
//     const { name, price, description, categoryId } = req.body;

//     if (!name || !price || !categoryId) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, price, and category are required fields.",
//       });
//     }

//     const newItem = new MenuItem({
//       name,
//       price,
//       description,
//       categoryId,
//       availability: true,
//       imageUrl: req.file ? /uploads/${req.file.filename} : null,
//     });

//     await newItem.save();
//     console.log("✅ New item added:", newItem.name);

//     return res.status(201).json({
//       success: true,
//       message: "Item added successfully!",
//       item: newItem,
//     });
//   } catch (err) {
//     console.error("❌ Error adding menu item:", err.message);
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error while adding item",
//     });
//   }
// });
// /* ---------------------------------------------------
//    ❌ DELETE CATEGORY + ITS ITEMS
// --------------------------------------------------- */
// router.delete("/categories/:id", async (req, res) => {
//   try {
//     const category = await MenuCategory.findByIdAndDelete(req.params.id);
//     if (!category) {
//       return res.status(404).json({ success: false, message: "Category not found" });
//     }

//     // Delete items under this category
//     await MenuItem.deleteMany({ categoryId: req.params.id });

//     return res.json({
//       success: true,
//       message: "Category and its items deleted successfully!",
//     });
//   } catch (err) {
//     console.error("❌ Error deleting category:", err.message);
//     return res.status(500).json({ success: false, message: "Failed to delete category" });
//   }
// });

// /* ---------------------------------------------------
//    ❌ DELETE SINGLE MENU ITEM
// --------------------------------------------------- */
// router.delete("/items/:id", async (req, res) => {
//   try {
//     const item = await MenuItem.findByIdAndDelete(req.params.id);
//     if (!item) {
//       return res.status(404).json({ success: false, message: "Menu item not found" });
//     }

//     return res.json({ success: true, message: "Menu item deleted successfully!" });
//   } catch (err) {
//     console.error("❌ Error deleting menu item:", err.message);
//     return res.status(500).json({ success: false, message: "Failed to delete menu item" });
//   }
// });

// module.exports = router;
// const express = require("express");
// const router = express.Router();
// const MenuItem = require("../models/MenuItem");
// const MenuCategory = require("../models/MenuCategory");
// const Table = require("../models/Table");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// // 📁 Ensure uploads folder exists
// const uploadDir = path.join(__dirname, "../../uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
//   console.log("📁 Created uploads folder:", uploadDir);
// }

// // ⚙️ Multer configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Folder to store uploaded images
//   },
//   filename: (req, file, cb) => {
//     const uniqueName =
//       Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
//     cb(null, uniqueName);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image/")) cb(null, true);
//   else cb(new Error("Only image files are allowed!"), false);
// };

// const upload = multer({ storage, fileFilter });

// /* ---------------------------------------------------
//    📂 FETCH CATEGORIES
// --------------------------------------------------- */
// router.get("/categories", async (req, res) => {
//   try {
//     const categories = await MenuCategory.find().sort({ displayOrder: 1 });
//     return res.status(200).json({ success: true, count: categories.length, categories });
//   } catch (err) {
//     console.error("❌ Error fetching categories:", err.message);
//     return res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

// /* ---------------------------------------------------
//    🍔 FETCH MENU ITEMS (optional: by tableSlug)
// --------------------------------------------------- */
// router.get("/items", async (req, res) => {
//   try {
//     const { tableSlug } = req.query;
//     console.log("📩 /api/menu/items called with tableSlug:", tableSlug);

//     if (tableSlug) {
//       const normalizedSlug = tableSlug.replace(/-/g, "");
//       const table = await Table.findOne({ qrSlug: normalizedSlug });
//       if (!table) {
//         return res.status(404).json({ success: false, message: "Invalid QR or table not found" });
//       }
//     }

//     const items = await MenuItem.find().populate("categoryId", "name");

//     const normalizedItems = items.map((it) => {
//       const plain = it.toObject ? it.toObject() : it;
//       return {
//         ...plain,
//         image: plain.image || plain.imageUrl || null,
//         categoryId: plain.categoryId?._id?.toString() || plain.categoryId || null,
//       };
//     });

//     return res.status(200).json({ success: true, count: normalizedItems.length, items: normalizedItems });
//   } catch (err) {
//     console.error("❌ Error fetching menu items:", err.message);
//     return res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

// /* ---------------------------------------------------
//    🆕 ADD NEW CATEGORY (with image upload)
// --------------------------------------------------- */
// router.post("/categories", upload.single("image"), async (req, res) => {
//   try {
//     const { name, description, displayOrder, active } = req.body;
//     const image = req.file ? `/uploads/${req.file.filename}` : "";

//     const newCategory = new MenuCategory({
//       name,
//       description,
//       displayOrder,
//       active,
//       image,
//     });

//     await newCategory.save();

//     return res.status(201).json({
//       success: true,
//       message: "Category created successfully!",
//       category: newCategory,
//     });
//   } catch (err) {
//     console.error("❌ Error creating category:", err.message);
//     return res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// });

// /* ---------------------------------------------------
//    🆕 ADD NEW MENU ITEM (with image upload)
// --------------------------------------------------- */
// router.post("/add-item", upload.single("image"), async (req, res) => {
//   try {
//     const { name, price, description, categoryId } = req.body;

//     if (!name || !price || !categoryId) {
//       return res.status(400).json({
//         success: false,
//         message: "Name, price, and category are required fields.",
//       });
//     }

//     const newItem = new MenuItem({
//       name,
//       price,
//       description,
//       categoryId,
//       availability: true,
//       // ✅ Fixed backticks here
//       imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
//     });

//     await newItem.save();
//     console.log("✅ New item added:", newItem.name);

//     return res.status(201).json({
//       success: true,
//       message: "Item added successfully!",
//       item: newItem,
//     });
//   } catch (err) {
//     console.error("❌ Error adding menu item:", err.message);
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error while adding item",
//     });
//   }
// });

// /* ---------------------------------------------------
//    ❌ DELETE CATEGORY + ITS ITEMS
// --------------------------------------------------- */
// router.delete("/categories/:id", async (req, res) => {
//   try {
//     const category = await MenuCategory.findByIdAndDelete(req.params.id);
//     if (!category) {
//       return res.status(404).json({ success: false, message: "Category not found" });
//     }

//     await MenuItem.deleteMany({ categoryId: req.params.id });

//     return res.json({
//       success: true,
//       message: "Category and its items deleted successfully!",
//     });
//   } catch (err) {
//     console.error("❌ Error deleting category:", err.message);
//     return res.status(500).json({ success: false, message: "Failed to delete category" });
//   }
// });

// /* ---------------------------------------------------
//    ❌ DELETE SINGLE MENU ITEM
// --------------------------------------------------- */
// router.delete("/items/:id", async (req, res) => {
//   try {
//     const item = await MenuItem.findByIdAndDelete(req.params.id);
//     if (!item) {
//       return res.status(404).json({ success: false, message: "Menu item not found" });
//     }

//     return res.json({ success: true, message: "Menu item deleted successfully!" });
//   } catch (err) {
//     console.error("❌ Error deleting menu item:", err.message);
//     return res.status(500).json({ success: false, message: "Failed to delete menu item" });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");
const MenuCategory = require("../models/MenuCategory");
const Table = require("../models/Table");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// 📁 Ensure uploads folder exists
const uploadDir = path.join(__dirname, "../../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("📁 Created uploads folder:", uploadDir);
}

// ⚙️ Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder to store uploaded images
  },
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) cb(null, true);
  else cb(new Error("Only image files are allowed!"), false);
};

const upload = multer({ storage, fileFilter });

/* ---------------------------------------------------
   📂 FETCH CATEGORIES
--------------------------------------------------- */
router.get("/categories", async (req, res) => {
  try {
    const categories = await MenuCategory.find().sort({ displayOrder: 1 });
    return res.status(200).json({ success: true, count: categories.length, categories });
  } catch (err) {
    console.error("❌ Error fetching categories:", err.message);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

/* ---------------------------------------------------
   🍔 FETCH MENU ITEMS (optional: by tableSlug)
--------------------------------------------------- */
router.get("/items", async (req, res) => {
  try {
    const { tableSlug } = req.query;
    console.log("📩 /api/menu/items called with tableSlug:", tableSlug);

    if (tableSlug) {
      const normalizedSlug = tableSlug.replace(/-/g, "");
      const table = await Table.findOne({ qrSlug: normalizedSlug });
      if (!table) {
        return res.status(404).json({ success: false, message: "Invalid QR or table not found" });
      }
    }

    const items = await MenuItem.find().populate("categoryId", "name");

    const normalizedItems = items.map((it) => {
      const plain = it.toObject ? it.toObject() : it;
      return {
        ...plain,
        image: plain.image || plain.imageUrl || null,
        categoryId: plain.categoryId?._id?.toString() || plain.categoryId || null,
      };
    });

    return res.status(200).json({ success: true, count: normalizedItems.length, items: normalizedItems });
  } catch (err) {
    console.error("❌ Error fetching menu items:", err.message);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

/* ---------------------------------------------------
   🆕 ADD NEW CATEGORY (with image upload)
--------------------------------------------------- */
router.post("/categories", upload.single("image"), async (req, res) => {
  try {
    const { name, description, displayOrder, active } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const newCategory = new MenuCategory({
      name,
      description,
      displayOrder,
      active,
      image,
    });

    await newCategory.save();

    return res.status(201).json({
      success: true,
      message: "Category created successfully!",
      category: newCategory,
    });
  } catch (err) {
    console.error("❌ Error creating category:", err.message);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

/* ---------------------------------------------------
   🆕 ADD NEW MENU ITEM (with image upload)
--------------------------------------------------- */
// 🩵 FIXED: changed '/add-item' → '/items'
router.post("/items", upload.single("image"), async (req, res) => {
  try {
    const { name, price, description, categoryId } = req.body;

    if (!name || !price || !categoryId) {
      return res.status(400).json({
        success: false,
        message: "Name, price, and category are required fields.",
      });
    }

    const newItem = new MenuItem({
      name,
      price,
      description,
      categoryId,
      availability: true,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
    });

    await newItem.save();
    console.log("✅ New item added:", newItem.name);

    return res.status(201).json({
      success: true,
      message: "Item added successfully!",
      item: newItem,
    });
  } catch (err) {
    console.error("❌ Error adding menu item:", err.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error while adding item",
    });
  }
});

/* ---------------------------------------------------
   ❌ DELETE CATEGORY + ITS ITEMS
--------------------------------------------------- */
router.delete("/categories/:id", async (req, res) => {
  try {
    const category = await MenuCategory.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    await MenuItem.deleteMany({ categoryId: req.params.id });

    return res.json({
      success: true,
      message: "Category and its items deleted successfully!",
    });
  } catch (err) {
    console.error("❌ Error deleting category:", err.message);
    return res.status(500).json({ success: false, message: "Failed to delete category" });
  }
});

/* ---------------------------------------------------
   ❌ DELETE SINGLE MENU ITEM
--------------------------------------------------- */
router.delete("/items/:id", async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Menu item not found" });
    }

    return res.json({ success: true, message: "Menu item deleted successfully!" });
  } catch (err) {
    console.error("❌ Error deleting menu item:", err.message);
    return res.status(500).json({ success: false, message: "Failed to delete menu item" });
  }
});

module.exports = router;
