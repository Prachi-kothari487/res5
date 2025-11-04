// // // const express = require("express");
// // // const multer = require("multer");
// // // const path = require("path");

// // // const router = express.Router();

// // // // 🧠 Configure multer storage
// // // const storage = multer.diskStorage({
// // //   destination: (req, file, cb) => {
// // //     cb(null, "uploads/"); // Folder to save images
// // //   },
// // //   filename: (req, file, cb) => {
// // //     cb(null, Date.now() + path.extname(file.originalname)); // unique filename
// // //   },
// // // });

// // // const upload = multer({ storage });

// // // // 📤 Upload route
// // // router.post("/", upload.single("image"), (req, res) => {
// // //   if (!req.file) return res.status(400).json({ error: "No image uploaded" });
// // //   const imageUrl = `/uploads/${req.file.filename}`;
// // //   res.json({ imageUrl });
// // // });

// // // module.exports = router;
// // const express = require("express");
// // const multer = require("multer");
// // const path = require("path");
// // const fs = require("fs");

// // const router = express.Router();

// // // ✅ Ensure upload folder exists
// // const uploadDir = path.join(__dirname, "../../uploads");
// // if (!fs.existsSync(uploadDir)) {
// //   fs.mkdirSync(uploadDir);
// // }

// // // ✅ Configure storage
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, uploadDir);
// //   },
// //   filename: (req, file, cb) => {
// //     const uniqueName =
// //       Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
// //     cb(null, uniqueName);
// //   },
// // });

// // const upload = multer({ storage });

// // // ✅ Upload endpoint
// // router.post("/", upload.single("image"), (req, res) => {
// //   if (!req.file) {
// //     return res.status(400).json({ error: "No file uploaded" });
// //   }

// //   const imageUrl = `/uploads/${req.file.filename}`;
// //   res.json({ success: true, imageUrl });
// // });

// // module.exports = router;
// // const express = require("express");
// // const multer = require("multer");
// // const path = require("path");
// // const fs = require("fs");

// // const router = express.Router();

// // // ✅ Ensure 'uploads' folder exists (create if not)
// // const uploadDir = path.join(__dirname, "../../uploads");
// // if (!fs.existsSync(uploadDir)) {
// //   fs.mkdirSync(uploadDir, { recursive: true });
// //   console.log("📁 Created uploads folder at:", uploadDir);
// // }

// // // ✅ Configure multer storage
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, uploadDir);
// //   },
// //   filename: (req, file, cb) => {
// //     const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(
// //       file.originalname
// //     )}`;
// //     cb(null, uniqueName);
// //   },
// // });

// // // ✅ File filter to allow only images
// // const fileFilter = (req, file, cb) => {
// //   const allowed = /jpeg|jpg|png|webp|gif/;
// //   const ext = path.extname(file.originalname).toLowerCase();
// //   if (allowed.test(ext) && allowed.test(file.mimetype)) {
// //     cb(null, true);
// //   } else {
// //     cb(new Error("Only image files (jpg, png, webp, gif) are allowed!"));
// //   }
// // };

// // // ✅ Initialize multer upload
// // const upload = multer({ storage, fileFilter });

// // // ✅ Upload endpoint
// // router.post("/", upload.single("image"), (req, res) => {
// //   try {
// //     if (!req.file) {
// //       return res.status(400).json({ success: false, message: "No file uploaded" });
// //     }

// //     const imageUrl = `/uploads/${req.file.filename}`;
// //     res.status(200).json({
// //       success: true,
// //       message: "Image uploaded successfully!",
// //       imageUrl,
// //     });
// //   } catch (error) {
// //     console.error("❌ Upload error:", error);
// //     res.status(500).json({ success: false, message: "Error uploading image" });
// //   }
// // });

// // module.exports = router;
// // const express = require("express");
// // const multer = require("multer");
// // const path = require("path");
// // const fs = require("fs");

// // const router = express.Router();

// // // ✅ Ensure 'uploads' folder exists
// // const uploadDir = path.join(__dirname, "../../uploads");
// // if (!fs.existsSync(uploadDir)) {
// //   fs.mkdirSync(uploadDir, { recursive: true });
// //   console.log("📁 Created uploads folder at:", uploadDir);
// // }

// // // ✅ Multer storage configuration
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, uploadDir);
// //   },
// //   filename: (req, file, cb) => {
// //     const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(
// //       file.originalname
// //     )}`;
// //     cb(null, uniqueName);
// //   },
// // });

// // // ✅ File filter (allow only images)
// // const fileFilter = (req, file, cb) => {
// //   const allowedExt = /jpeg|jpg|png|webp|gif/;
// //   const ext = path.extname(file.originalname).toLowerCase();
// //   const mime = file.mimetype.toLowerCase();

// //   if (allowedExt.test(ext) && allowedExt.test(mime)) {
// //     cb(null, true);
// //   } else {
// //     cb(new Error("❌ Only image files (jpg, jpeg, png, webp, gif) are allowed!"));
// //   }
// // };

// // // ✅ Initialize multer
// // const upload = multer({
// //   storage,
// //   fileFilter,
// //   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
// // });

// // // ✅ POST: Upload single image
// // router.post("/", upload.single("image"), (req, res) => {
// //   try {
// //     if (!req.file) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "No file uploaded!",
// //       });
// //     }

// //     const imageUrl = `/uploads/${req.file.filename}`;

// //     res.status(200).json({
// //       success: true,
// //       message: "🖼️ Image uploaded successfully!",
// //       imageUrl,
// //     });
// //   } catch (error) {
// //     console.error("❌ Upload error:", error.message);
// //     res.status(500).json({
// //       success: false,
// //       message: "Error uploading image!",
// //       error: error.message,
// //     });
// //   }
// // });

// // // ✅ Global error handler for Multer
// // router.use((err, req, res, next) => {
// //   if (err instanceof multer.MulterError) {
// //     // Multer-specific errors
// //     return res.status(400).json({ success: false, message: err.message });
// //   } else if (err) {
// //     // Other errors
// //     return res.status(400).json({ success: false, message: err.message });
// //   }
// //   next();
// // });

// // module.exports = router;
// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// const router = express.Router();

// // ✅ Ensure 'uploads' folder exists
// const uploadDir = path.join(__dirname, "../../uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
//   console.log("📁 Created uploads folder at:", uploadDir);
// }

// // ✅ Multer storage configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(
//       file.originalname
//     )}`;
//     cb(null, uniqueName);
//   },
// });

// // ✅ File filter (allow only images)
// const fileFilter = (req, file, cb) => {
//   const allowedExt = /jpeg|jpg|png|webp|gif/;
//   const ext = path.extname(file.originalname).toLowerCase();
//   const mime = file.mimetype.toLowerCase();

//   if (allowedExt.test(ext) && allowedExt.test(mime)) {
//     cb(null, true);
//   } else {
//     cb(new Error("❌ Only image files (jpg, jpeg, png, webp, gif) are allowed!"));
//   }
// };

// // ✅ Initialize multer
// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
// });

// // ✅ POST: Upload single image
// router.post("/", upload.single("image"), (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "No file uploaded!",
//       });
//     }

//     const imageUrl = `/uploads/${req.file.filename}`;

//     res.status(200).json({
//       success: true,
//       message: "🖼️ Image uploaded successfully!",
//       imageUrl,
//     });
//   } catch (error) {
//     console.error("❌ Upload error:", error.message);
//     res.status(500).json({
//       success: false,
//       message: "Error uploading image!",
//       error: error.message,
//     });
//   }
// });

// // ✅ Global error handler for Multer
// router.use((err, req, res, next) => {
//   if (err instanceof multer.MulterError) {
//     // Multer-specific errors
//     return res.status(400).json({ success: false, message: err.message });
//   } else if (err) {
//     // Other errors
//     return res.status(400).json({ success: false, message: err.message });
//   }
//   next();
// });

// module.exports = router;
// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// const router = express.Router();

// // ✅ Ensure uploads folder exists
// const uploadDir = path.join(__dirname, "../uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // ✅ Configure multer storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = Date.now() + "-" + file.originalname;
//     cb(null, uniqueName);
//   },
// });

// const upload = multer({ storage });

// // ✅ POST /api/upload
// router.post("/", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: "No file uploaded" });
//   }

//   const imageUrl = /uploads/${req.file.filename};
//   console.log("📸 Uploaded file saved at:", imageUrl);

//   res.json({ success: true, imageUrl });
// });

// module.exports = router;
const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// ✅ Ensure uploads folder exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// ✅ Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// ✅ POST /api/upload
router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  // ✅ Fixed: use backticks to create URL string
  const imageUrl = `/uploads/${req.file.filename}`;
  console.log("📸 Uploaded file saved at:", imageUrl);

  res.json({ success: true, imageUrl });
});

module.exports = router;
