// // // // // // const express = require('express'); 
// // // // // // const mongoose = require('mongoose');
// // // // // // const cors = require('cors');
// // // // // // require('dotenv').config();

// // // // // // const authRoutes = require('./routes/auth');
// // // // // // const menuRoutes = require('./routes/menu');
// // // // // // const tableRoutes = require('./routes/tables');
// // // // // // const orderRoutes = require('./routes/orders');
// // // // // // const cartRoutes= require('./routes/cartRoutes');

// // // // // // const app = express();
// // // // // // app.use(cors());
// // // // // // app.use(express.json());

// // // // // // app.use('/api/auth', authRoutes);
// // // // // // app.use('/api/menu', menuRoutes);
// // // // // // app.use('/api/cartRoutes',cartRoutes);
// // // // // // app.use('/api/tables', tableRoutes);
// // // // // // app.use('/api/orders', orderRoutes);

// // // // // // mongoose.connect(process.env.MONGO_URI)
// // // // // //   .then(() => console.log('MongoDB connected'))
// // // // // //   .catch(err => console.log(err));




// // // // // // app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
// // // // // // const express = require('express');
// // // // // // const mongoose = require('mongoose');
// // // // // // const cors = require('cors');
// // // // // // const path = require('path');
// // // // // // require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
// // // // // // const generateQRCodes = require('./utils/generateQRCodes');

// // // // // // // After DB connection success
// // // // // // generateQRCodes("http://localhost:5173"); 
// // // // // // // 🔁 you can replace with your deployed frontend URL later

// // // // // // const authRoutes = require('./routes/auth');
// // // // // // const menuRoutes = require('./routes/menu');
// // // // // // const tableRoutes = require('./routes/tables');
// // // // // // const orderRoutes = require('./routes/orders');
// // // // // // const cartRoutes = require('./routes/cartRoutes');

// // // // // // const app = express();

// // // // // // app.use(cors());
// // // // // // app.use(express.json());

// // // // // // // API Routes
// // // // // // app.use('/api/auth', authRoutes);
// // // // // // app.use('/api/menu', menuRoutes);
// // // // // // app.use('/api/cartRoutes', cartRoutes);
// // // // // // app.use('/api/tables', tableRoutes);
// // // // // // app.use('/api/orders', orderRoutes);

// // // // // // // Health check
// // // // // // app.get('/', (req, res) => res.send('Server is running'));

// // // // // // // MongoDB connection
// // // // // // mongoose.connect(process.env.MONGO_URI, {
// // // // // //   useNewUrlParser: true,
// // // // // //   useUnifiedTopology: true,
// // // // // // })
// // // // // // .then(() => console.log('MongoDB connected'))
// // // // // // .catch(err => console.error('MongoDB connection error:', err));

// // // // // // const PORT = process.env.PORT || 4000;
// // // // // // app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));



// // // // // // const express = require("express");
// // // // // // const mongoose = require("mongoose");
// // // // // // const dotenv = require("dotenv");
// // // // // // const generateQRCodes = require("./utils/generateQRCodes"); // ✅ adjust path if needed

// // // // // // dotenv.config();
// // // // // // const app = express();

// // // // // // const PORT = process.env.PORT || 4000;
// // // // // // const baseURL = process.env.BASE_URL || `http://localhost:${PORT}`;

// // // // // // // ✅ Connect to MongoDB first
// // // // // // mongoose
// // // // // //   .connect(process.env.MONGO_URI)
// // // // // //   .then(async () => {
// // // // // //     console.log("MongoDB connected");

// // // // // //     // ✅ Run QR code generation *after* connection established
// // // // // //     try {
// // // // // //       await generateQRCodes(baseURL);
// // // // // //       console.log("✅ QR codes generated successfully");
// // // // // //     } catch (err) {
// // // // // //       console.error("❌ Error generating QR codes:", err);
// // // // // //     }

// // // // // //     // ✅ Start server only after MongoDB + QR code step is ready
// // // // // //     app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
// // // // // //   })
// // // // // //   .catch((err) => console.error("MongoDB connection error:", err));



// // // // // // const express = require("express");
// // // // // // const mongoose = require("mongoose");
// // // // // // const dotenv = require("dotenv");
// // // // // // const cors = require("cors");
// // // // // // const generateQRCodes = require("./utils/generateQRCodes"); // ✅ adjust path if needed
// // // // // // require("./models/MenuCategory");

// // // // // // // ✅ Load .env variables
// // // // // // dotenv.config();

// // // // // // const app = express();
// // // // // // const PORT = process.env.PORT || 4000;
// // // // // // const baseURL = process.env.BASE_URL || `http://localhost:${PORT}`;

// // // // // // // ✅ Middlewares
// // // // // // app.use(express.json()); // parse JSON requests

// // // // // // // ✅ Allow CORS for React frontend (http://localhost:5173)
// // // // // // app.use(
// // // // // //   cors({
// // // // // //     origin: "http://localhost:5173", // frontend URL
// // // // // //     methods: ["GET", "POST", "PUT", "DELETE"],
// // // // // //     credentials: true,
// // // // // //   })
// // // // // // );

// // // // // // // ✅ Import routes
// // // // // // const authRoutes = require('./routes/auth');
// // // // // // const menuRoutes = require('./routes/menu');
// // // // // // const tableRoutes = require('./routes/tables');
// // // // // // const orderRoutes = require('./routes/orders');
// // // // // // const cartRoutes = require('./routes/cartRoutes');
// // // // // // // ✅ Use routes
// // // // // // app.use('/api/auth', authRoutes);
// // // // // // app.use('/api/menu', menuRoutes);
// // // // // // app.use('/api/cartRoutes', cartRoutes);
// // // // // // app.use('/api/tables', tableRoutes);
// // // // // // app.use('/api/orders', orderRoutes);
// // // // // // // ✅ Default route
// // // // // // app.get("/", (req, res) => {
// // // // // //   res.send("🍽️ Restaurant QR Backend is running successfully!");
// // // // // // });

// // // // // // // ✅ Connect MongoDB and start server
// // // // // // mongoose
// // // // // //   .connect(process.env.MONGO_URI)
// // // // // //   .then(async () => {
// // // // // //     console.log("MongoDB connected");

// // // // // //     // ✅ Generate QR codes only after successful DB connection
// // // // // //     try {
// // // // // //       await generateQRCodes(baseURL);
// // // // // //       console.log("✅ QR codes generated successfully");
// // // // // //     } catch (err) {
// // // // // //       console.error("❌ Error generating QR codes:", err);
// // // // // //     }

// // // // // //     // ✅ Start server
// // // // // //     app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
// // // // // //   })
// // // // // //   .catch((err) => console.error("MongoDB connection error:", err));





// // // // // // const express = require("express");
// // // // // // const mongoose = require("mongoose");
// // // // // // const dotenv = require("dotenv");
// // // // // // const path = require("path");
// // // // // // const cors = require("cors");
// // // // // // const generateQRCodes = require("./utils/generateQRCodes");
// // // // // // require("./models/MenuCategory");

// // // // // // // ✅ Load .env variables (with absolute path)
// // // // // // dotenv.config({ path: path.join(__dirname, "../.env") });

// // // // // // // ✅ Debug log to verify .env loaded
// // // // // // console.log("📦 Loaded MONGO_URI:", process.env.MONGO_URI ? "✅ Found" : "❌ Missing");

// // // // // // const app = express();
// // // // // // const PORT = process.env.PORT || 4000;
// // // // // // const baseURL = process.env.BASE_URL || `http://localhost:${PORT}`;

// // // // // // // ✅ Middlewares
// // // // // // app.use(express.json());

// // // // // // // ✅ Allow CORS for React frontend (http://localhost:5173)
// // // // // // app.use(
// // // // // //   cors({
// // // // // //     origin: "http://localhost:5173",
// // // // // //     methods: ["GET", "POST", "PUT", "DELETE"],
// // // // // //     credentials: true,
// // // // // //   })
// // // // // // );

// // // // // // // ✅ Import routes
// // // // // // const authRoutes = require("./routes/auth");
// // // // // // const menuRoutes = require("./routes/menu");
// // // // // // const tableRoutes = require("./routes/tables");
// // // // // // const orderRoutes = require("./routes/orders");
// // // // // // const cartRoutes = require("./routes/cartRoutes");

// // // // // // // ✅ Use routes
// // // // // // app.use("/api/auth", authRoutes);
// // // // // // app.use("/api/menu", menuRoutes);
// // // // // // app.use("/api/cartRoutes", cartRoutes);
// // // // // // app.use("/api/tables", tableRoutes);
// // // // // // app.use("/api/orders", orderRoutes);

// // // // // // // ✅ Default route
// // // // // // app.get("/", (req, res) => {
// // // // // //   res.send("🍽️ Restaurant QR Backend is running successfully!");
// // // // // // });

// // // // // // // ✅ Connect MongoDB and start server
// // // // // // mongoose
// // // // // //   .connect(process.env.MONGO_URI)
// // // // // //   .then(async () => {
// // // // // //     console.log("✅ MongoDB connected");

// // // // // //     // ✅ Generate QR codes after DB connection
// // // // // //     try {
// // // // // //       await generateQRCodes(baseURL);
// // // // // //       console.log("✅ QR codes generated successfully");
// // // // // //     } catch (err) {
// // // // // //       console.error("❌ Error generating QR codes:", err);
// // // // // //     }

// // // // // //     app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
// // // // // //   })
// // // // // //   .catch((err) => console.error("❌ MongoDB connection error:", err));




// // // // // const express = require("express");
// // // // // const mongoose = require("mongoose");
// // // // // const dotenv = require("dotenv");
// // // // // const path = require("path");
// // // // // const cors = require("cors");
// // // // // const generateQRCodes = require("./utils/generateQRCodes");
// // // // // require("./models/MenuCategory");

// // // // // // ✅ Load environment variables from root .env
// // // // // dotenv.config({ path: path.join(__dirname, "../.env") });

// // // // // // ✅ Debug log
// // // // // console.log("📦 MONGO_URI:", process.env.MONGO_URI ? "✅ Found" : "❌ Missing");

// // // // // const app = express();
// // // // // const PORT = process.env.PORT || 4000;
// // // // // const baseURL = process.env.BASE_URL || "http://192.168.7.165:5173";
// // // // // // const baseURL = process.env.BASE_URL || `http://localhost:${PORT}`;

// // // // // // ✅ Middleware setup
// // // // // app.use(express.json());
// // // // // // app.use(
// // // // // //   cors({
// // // // // //     // origin: "http://localhost:5173", // frontend (Vite) origin
// // // // // //     origin: ["http://10.226.36.188:5173"],
// // // // // //     methods: ["GET", "POST", "PUT", "DELETE"],
// // // // // //     credentials: true,
// // // // // //   })
// // // // // // );
// // // // // app.use(
// // // // //   cors({
// // // // //     origin: ["http://192.168.7.165:5173"], // frontend address
// // // // //     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
// // // // //     allowedHeaders: ["Content-Type", "Authorization"],
// // // // //   })
// // // // // );

// // // // // // ✅ Import routes
// // // // // const authRoutes = require("./routes/auth");
// // // // // const menuRoutes = require("./routes/menu");
// // // // // const tableRoutes = require("./routes/tables");
// // // // // const orderRoutes = require("./routes/orders");
// // // // // const cartRoutes = require("./routes/cartRoutes");

// // // // // // ✅ Register routes
// // // // // app.use("/api/auth", authRoutes);
// // // // // app.use("/api/menu", menuRoutes);
// // // // // app.use("/api/cart", cartRoutes);
// // // // // app.use("/api/tables", tableRoutes);
// // // // // app.use("/api/orders", orderRoutes);

// // // // // // ✅ Default route
// // // // // app.get("/", (req, res) => {
// // // // //   res.send("🍽️ Restaurant QR Backend is running successfully!");
// // // // // });

// // // // // app.get("/menu/:slug", (req, res) => {
// // // // //   const tableSlug = req.params.slug;
// // // // //   res.redirect(`http://192.168.7.165:5173/menu/${tableSlug}`);
// // // // // });
// // // // // // ✅ Connect MongoDB and start server
// // // // // mongoose
// // // // //   .connect(process.env.MONGO_URI)
// // // // //   .then(async () => {
// // // // //     console.log("✅ MongoDB connected successfully!");

// // // // //     try {
// // // // //       await generateQRCodes(baseURL);
// // // // //       console.log("✅ QR codes generated successfully");
// // // // //     } catch (err) {
// // // // //       console.error("❌ Error generating QR codes:", err.message);
// // // // //     }
// // // // //     app.listen(PORT, "0.0.0.0", () =>
// // // // //       console.log(`🚀 Server running and accessible at: http://0.0.0.0:${PORT}`)
// // // // //     );

// // // // //     // app.listen(PORT, () =>
// // // // //     //   console.log(`🚀 Server running on: http://localhost:${PORT}`)
// // // // //     // );
// // // // //   })
// // // // //   .catch((err) => console.error("❌ MongoDB connection error:", err.message));
// // // // // const express = require("express");
// // // // // const mongoose = require("mongoose");
// // // // // const dotenv = require("dotenv");
// // // // // const path = require("path");
// // // // // const cors = require("cors");
// // // // // const generateQRCodes = require("./utils/generateQRCodes");
// // // // // require("./models/MenuCategory");

// // // // // // ✅ Load environment variables from root .env
// // // // // dotenv.config({ path: path.join(__dirname, "../.env") });

// // // // // // ✅ Debug log
// // // // // console.log("📦 MONGO_URI:", process.env.MONGO_URI ? "✅ Found" : "❌ Missing");

// // // // // const app = express();
// // // // // const PORT = process.env.PORT || 4000;

// // // // // // 🧠 Auto-detect base URL (localhost + your local IP)
// // // // // const baseURL =
// // // // //   process.env.BASE_URL ||
// // // // //   `http://localhost:5173`; // 👈 fallback to localhost for frontend

// // // // // // ✅ Middleware setup
// // // // // app.use(express.json());

// // // // // // ✅ Allow both localhost & network IP for frontend access
// // // // // app.use(
// // // // //   cors({
// // // // //     origin: [
// // // // //       "http://localhost:5173", // for local dev
// // // // //       "http://192.168.7.165:5173", // for LAN/mobile testing
// // // // //     ],
// // // // //     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
// // // // //     allowedHeaders: ["Content-Type", "Authorization"],
// // // // //     credentials: true,
// // // // //   })
// // // // // );

// // // // // // ✅ Import routes
// // // // // const authRoutes = require("./routes/auth");
// // // // // const menuRoutes = require("./routes/menu");
// // // // // const tableRoutes = require("./routes/tables");
// // // // // const orderRoutes = require("./routes/orders");
// // // // // const cartRoutes = require("./routes/cartRoutes");

// // // // // // ✅ Register routes
// // // // // app.use("/api/auth", authRoutes);
// // // // // app.use("/api/menu", menuRoutes);
// // // // // app.use("/api/cart", cartRoutes);
// // // // // app.use("/api/tables", tableRoutes);
// // // // // app.use("/api/orders", orderRoutes);

// // // // // // ✅ Default route
// // // // // app.get("/", (req, res) => {
// // // // //   res.send("🍽️ Restaurant QR Backend is running successfully!");
// // // // // });

// // // // // // ✅ Redirect any menu QR link to frontend
// // // // // app.get("/menu/:slug", (req, res) => {
// // // // //   const tableSlug = req.params.slug;
// // // // //   res.redirect(`${baseURL}/menu/${tableSlug}`);
// // // // // });

// // // // // // ✅ Connect MongoDB and start server
// // // // // mongoose
// // // // //   .connect(process.env.MONGO_URI)
// // // // //   .then(async () => {
// // // // //     console.log("✅ MongoDB connected successfully!");

// // // // //     try {
// // // // //       await generateQRCodes(baseURL);
// // // // //       console.log("✅ QR codes generated successfully");
// // // // //     } catch (err) {
// // // // //       console.error("❌ Error generating QR codes:", err.message);
// // // // //     }

// // // // //     // 🟢 Listen on all network interfaces (LAN + localhost)
// // // // //     app.listen(PORT, "0.0.0.0", () => {
// // // // //       console.log(`🚀 Server running at: http://localhost:${PORT}`);
// // // // //       console.log(`🌐 Accessible on network: http://192.168.7.165:${PORT}`);
// // // // //     });
// // // // //   })
// // // // //   .catch((err) => console.error("❌ MongoDB connection error:", err.message));
// // // // const express = require("express");
// // // // const mongoose = require("mongoose");
// // // // const dotenv = require("dotenv");
// // // // const path = require("path");
// // // // const cors = require("cors");
// // // // const generateQRCodes = require("./utils/generateQRCodes");

// // // // // ✅ Load environment variables
// // // // dotenv.config({ path: path.join(__dirname, "../.env") });

// // // // // ✅ Debug log
// // // // console.log("📦 MONGO_URI:", process.env.MONGO_URI ? "✅ Found" : "❌ Missing");

// // // // const app = express();
// // // // const PORT = process.env.PORT || 4000;

// // // // // 🧠 Auto-detect frontend base URL
// // // // const baseURL = process.env.BASE_URL || "http://localhost:5173";

// // // // // ✅ Middleware
// // // // app.use(express.json());
// // // // app.use(
// // // //   cors({
// // // //     origin: [
// // // //       "http://localhost:5173", // for local dev
// // // //       "http://192.168.7.165:5173", // for LAN/mobile testing
// // // //     ],
// // // //     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
// // // //     allowedHeaders: ["Content-Type", "Authorization"],
// // // //     credentials: true,
// // // //   })
// // // // );

// // // // // ✅ Serve uploaded images (important for menu images)
// // // // app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// // // // // ✅ Import routes
// // // // const authRoutes = require("./routes/auth");
// // // // const menuRoutes = require("./routes/menu");
// // // // const tableRoutes = require("./routes/tables");
// // // // const orderRoutes = require("./routes/orders");
// // // // const cartRoutes = require("./routes/cartRoutes");
// // // // const uploadRoutes = require("./routes/upload"); // ✅ new route for image uploads

// // // // // ✅ Register routes
// // // // app.use("/api/auth", authRoutes);
// // // // app.use("/api/menu", menuRoutes);
// // // // app.use("/api/cart", cartRoutes);
// // // // app.use("/api/tables", tableRoutes);
// // // // app.use("/api/orders", orderRoutes);
// // // // app.use("/api/upload", uploadRoutes); // ✅ for file uploads

// // // // // ✅ Default route
// // // // app.get("/", (req, res) => {
// // // //   res.send("🍽️ Restaurant QR Backend is running successfully!");
// // // // });

// // // // // ✅ Redirect QR to frontend
// // // // app.get("/menu/:slug", (req, res) => {
// // // //   const tableSlug = req.params.slug;
// // // //   res.redirect(`${baseURL}/menu/${tableSlug}`);
// // // // });

// // // // // ✅ Connect to MongoDB and start server
// // // // mongoose
// // // //   .connect(process.env.MONGO_URI)
// // // //   .then(async () => {
// // // //     console.log("✅ MongoDB connected successfully!");

// // // //     try {
// // // //       await generateQRCodes(baseURL);
// // // //       console.log("✅ QR codes generated successfully");
// // // //     } catch (err) {
// // // //       console.error("❌ Error generating QR codes:", err.message);
// // // //     }

// // // //     // ✅ Start server
// // // //     app.listen(PORT, "0.0.0.0", () => {
// // // //       console.log(`🚀 Server running at: http://localhost:${PORT}`);
// // // //       console.log(`🌐 Accessible on network: http://192.168.7.165:${PORT}`);
// // // //     });
// // // //   })
// // // //   .catch((err) => console.error("❌ MongoDB connection error:", err.message));
// // // // const express = require("express");
// // // // const mongoose = require("mongoose");
// // // // const dotenv = require("dotenv");
// // // // const path = require("path");
// // // // const cors = require("cors");
// // // // const generateQRCodes = require("./utils/generateQRCodes");
// // // // const fs = require("fs");

// // // // // ✅ Load environment variables
// // // // dotenv.config({ path: path.join(__dirname, "../.env") });

// // // // const app = express();
// // // // const PORT = process.env.PORT || 4000;
// // // // const baseURL = process.env.BASE_URL || "http://localhost:5173";

// // // // // ✅ Validate important environment variables
// // // // if (!process.env.MONGO_URI) {
// // // //   console.error("❌ Missing MONGO_URI in .env file");
// // // //   process.exit(1);
// // // // }

// // // // // ✅ Ensure uploads folder exists
// // // // const uploadDir = path.join(__dirname, "../uploads");
// // // // if (!fs.existsSync(uploadDir)) {
// // // //   fs.mkdirSync(uploadDir, { recursive: true });
// // // //   console.log("📁 Created uploads folder:", uploadDir);
// // // // }

// // // // // ✅ Middlewares
// // // // app.use(express.json());
// // // // app.use(
// // // //   cors({
// // // //     origin: [
// // // //       "http://localhost:5173", // local dev
// // // //       "http://192.168.7.165:5173", // LAN/mobile test
// // // //     ],
// // // //     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
// // // //     allowedHeaders: ["Content-Type", "Authorization"],
// // // //     credentials: true,
// // // //   })
// // // // );

// // // // // ✅ Serve uploaded files (menu images, etc.)
// // // // app.use("/uploads", express.static(uploadDir));

// // // // // ✅ Import routes
// // // // const authRoutes = require("./routes/auth");
// // // // const menuRoutes = require("./routes/menu");
// // // // const tableRoutes = require("./routes/tables");
// // // // const orderRoutes = require("./routes/orders");
// // // // const cartRoutes = require("./routes/cartRoutes");
// // // // const uploadRoutes = require("./routes/upload"); // 🖼️ Multer image upload route

// // // // // ✅ Register routes
// // // // app.use("/api/auth", authRoutes);
// // // // app.use("/api/menu", menuRoutes);
// // // // app.use("/api/cart", cartRoutes);
// // // // app.use("/api/tables", tableRoutes);
// // // // app.use("/api/orders", orderRoutes);
// // // // app.use("/api/upload", uploadRoutes);

// // // // // ✅ Default route
// // // // app.get("/", (req, res) => {
// // // //   res.send("🍽️ Restaurant QR Backend is running successfully!");
// // // // });

// // // // // ✅ Redirect scanned QR to frontend menu
// // // // app.get("/menu/:slug", (req, res) => {
// // // //   const tableSlug = req.params.slug;
// // // //   return res.redirect(`${baseURL}/menu/${tableSlug}`);
// // // // });

// // // // // ✅ MongoDB Connection + Server Start
// // // // mongoose
// // // //   .connect(process.env.MONGO_URI)
// // // //   .then(async () => {
// // // //     console.log("✅ MongoDB connected successfully!");

// // // //     try {
// // // //       // 🧩 Optional: generate QR codes only if folder empty
// // // //       await generateQRCodes(baseURL);
// // // //       console.log("✅ QR codes generated successfully!");
// // // //     } catch (err) {
// // // //       console.warn("⚠️ QR code generation skipped:", err.message);
// // // //     }

// // // //     app.listen(PORT, "0.0.0.0", () => {
// // // //       console.log(`🚀 Server running at: http://localhost:${PORT}`);
// // // //       console.log(`🌐 Accessible on LAN: http://192.168.7.165:${PORT}`);
// // // //     });
// // // //   })
// // // //   .catch((err) => {
// // // //     console.error("❌ MongoDB connection failed:", err.message);
// // // //     process.exit(1);
// // // //   });
// // // const express = require("express");
// // // const mongoose = require("mongoose");
// // // const dotenv = require("dotenv");
// // // const path = require("path");
// // // const cors = require("cors");
// // // const fs = require("fs");
// // // const generateQRCodes = require("./utils/generateQRCodes");

// // // // ✅ Load environment variables
// // // dotenv.config({ path: path.join(__dirname, "../.env") });

// // // const app = express();
// // // const PORT = process.env.PORT || 4000;
// // // const baseURL = process.env.BASE_URL || "http://localhost:5173";

// // // // ✅ Check for Mongo URI
// // // if (!process.env.MONGO_URI) {
// // //   console.error("❌ Missing MONGO_URI in .env file");
// // //   process.exit(1);
// // // }

// // // // ✅ Ensure uploads directory exists
// // // const uploadDir = path.join(__dirname, "../uploads");
// // // if (!fs.existsSync(uploadDir)) {
// // //   fs.mkdirSync(uploadDir, { recursive: true });
// // //   console.log("📁 Created uploads folder:", uploadDir);
// // // }

// // // // ✅ Middlewares
// // // app.use(express.json());
// // // app.use(
// // //   cors({
// // //     origin: [
// // //       "http://localhost:5173", // local dev
// // //       "http://192.168.7.165:5173", // LAN testing
// // //     ],
// // //     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
// // //     allowedHeaders: ["Content-Type", "Authorization"],
// // //     credentials: true,
// // //   })
// // // );

// // // // ✅ Serve static uploads folder (for uploaded images)
// // // app.use("/uploads", express.static(uploadDir));

// // // // ✅ Import Routes
// // // const authRoutes = require("./routes/auth");
// // // const menuRoutes = require("./routes/menu");
// // // const tableRoutes = require("./routes/tables");
// // // const orderRoutes = require("./routes/orders");
// // // const cartRoutes = require("./routes/cartRoutes");
// // // const uploadRoutes = require("./routes/upload"); // Multer route

// // // // ✅ Use Routes
// // // app.use("/api/auth", authRoutes);
// // // app.use("/api/menu", menuRoutes);
// // // app.use("/api/tables", tableRoutes);
// // // app.use("/api/orders", orderRoutes);
// // // app.use("/api/cart", cartRoutes);
// // // app.use("/api/upload", uploadRoutes);

// // // // ✅ Default route
// // // app.get("/", (req, res) => {
// // //   res.send("🍽️ Restaurant QR Backend is running successfully!");
// // // });

// // // // ✅ Redirect scanned QR to frontend menu
// // // app.get("/menu/:slug", (req, res) => {
// // //   const tableSlug = req.params.slug;
// // //   res.redirect(`${baseURL}/menu/${tableSlug}`);
// // // });

// // // // ✅ MongoDB Connection and Server Start
// // // mongoose
// // //   .connect(process.env.MONGO_URI)
// // //   .then(async () => {
// // //     console.log("✅ MongoDB connected successfully!");

// // //     try {
// // //       await generateQRCodes(baseURL);
// // //       console.log("✅ QR codes generated successfully!");
// // //     } catch (err) {
// // //       console.warn("⚠️ QR code generation skipped:", err.message);
// // //     }

// // //     app.listen(PORT, "0.0.0.0", () => {
// // //       console.log(`🚀 Server running at: http://localhost:${PORT}`);
// // //       console.log(`🌐 Accessible on LAN: http://192.168.7.165:${PORT}`);
// // //     });
// // //   })
// // //   .catch((err) => {
// // //     console.error("❌ MongoDB connection failed:", err.message);
// // //     process.exit(1);
// // //   });
// // // const express = require("express");
// // // const mongoose = require("mongoose");
// // // const dotenv = require("dotenv");
// // // const path = require("path");
// // // const cors = require("cors");
// // // const fs = require("fs");
// // // const generateQRCodes = require("./utils/generateQRCodes");

// // // // ✅ Load environment variables
// // // dotenv.config({ path: path.join(__dirname, "../.env") });

// // // const app = express();
// // // const PORT = process.env.PORT || 4000;
// // // const baseURL = process.env.BASE_URL || "http://localhost:5173";

// // // // ✅ Check for Mongo URI
// // // if (!process.env.MONGO_URI) {
// // //   console.error("❌ Missing MONGO_URI in .env file");
// // //   process.exit(1);
// // // }

// // // // ✅ Ensure uploads directory exists
// // // const uploadDir = path.join(__dirname, "../uploads");
// // // if (!fs.existsSync(uploadDir)) {
// // //   fs.mkdirSync(uploadDir, { recursive: true });
// // //   console.log("📁 Created uploads folder:", uploadDir);
// // // }

// // // // ✅ Middlewares
// // // app.use(express.json());
// // // app.use(
// // //   cors({
// // //     origin: [
// // //       "http://localhost:5173", // Local dev
// // //       "http://192.168.7.165:5173", // LAN testing (mobile)
// // //     ],
// // //     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
// // //     allowedHeaders: ["Content-Type", "Authorization"],
// // //     credentials: true,
// // //   })
// // // );

// // // // ✅ Serve static uploads folder (for uploaded images)
// // // app.use("/uploads", express.static(uploadDir));

// // // // ✅ Import Routes
// // // const authRoutes = require("./routes/auth");
// // // const menuRoutes = require("./routes/menu");
// // // const tableRoutes = require("./routes/tables");
// // // const orderRoutes = require("./routes/orders");
// // // const cartRoutes = require("./routes/cartRoutes");
// // // const uploadRoutes = require("./routes/upload");
// // // const staffRoutes = require("./routes/staff"); // 👩‍🍳 New Staff route

// // // // ✅ Use Routes
// // // app.use(express.json());
// // // app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// // // app.use("/api/auth", authRoutes);
// // // app.use("/api/menu", menuRoutes);
// // // app.use("/api/tables", tableRoutes);
// // // app.use("/api/orders", orderRoutes);
// // // app.use("/api/cart", cartRoutes);
// // // // app.use("/api/upload", uploadRoutes);
// // // app.use("/api/staff", staffRoutes); // 👩‍🍳 Use staff route

// // // // ✅ Default route
// // // app.get("/", (req, res) => {
// // //   res.send("🍽️ Restaurant QR Backend is running successfully!");
// // // });

// // // // ✅ Redirect scanned QR to frontend menu
// // // app.get("/menu/:slug", (req, res) => {
// // //   const tableSlug = req.params.slug;
// // //   res.redirect(`${baseURL}/menu/${tableSlug}`);
// // // });

// // // // ✅ MongoDB Connection and Server Start
// // // mongoose
// // //   .connect(process.env.MONGO_URI)
// // //   .then(async () => {
// // //     console.log("✅ MongoDB connected successfully!");

// // //     try {
// // //       await generateQRCodes(baseURL);
// // //       console.log("✅ QR codes generated successfully!");
// // //     } catch (err) {
// // //       console.warn("⚠️ QR code generation skipped:", err.message);
// // //     }

// // //     app.listen(PORT, "0.0.0.0", () => {
// // //       console.log(`🚀 Server running at: http://localhost:${PORT}`);
// // //       console.log(`🌐 Accessible on LAN: http://192.168.7.165:${PORT}`);
// // //     });
// // //   })
// // //   .catch((err) => {
// // //     console.error("❌ MongoDB connection failed:", err.message);
// // //     process.exit(1);
// // //   });
// // const express = require("express");
// // const mongoose = require("mongoose");
// // const dotenv = require("dotenv");
// // const path = require("path");
// // const cors = require("cors");
// // const fs = require("fs");
// // const generateQRCodes = require("./utils/generateQRCodes");
// // require("dotenv").config({ path: "./.env" });

// // const app = express();

// // // ✅ Basic Config
// // const PORT = process.env.PORT || 4000;
// // const baseURL = process.env.BASE_URL || "http://192.168.29.218:5173";

// // // ✅ MongoDB Direct Connection (No .env needed)
// // const MONGO_URI =
// //   "mongodb+srv://vibhanshi09:Mcxv7fJtA9hxyXxD@cluster0.lzqcowx.mongodb.net/restaurant";

// // // ✅ Ensure uploads folder exists
// // const uploadDir = path.join(__dirname, "../uploads");
// // if (!fs.existsSync(uploadDir)) {
// //   fs.mkdirSync(uploadDir, { recursive: true });
// //   console.log("📁 Created uploads folder:", uploadDir);
// // }

// // // ✅ Middlewares
// // app.use(express.json());
// // app.use(
// //   cors({
// //     origin: [
// //       "http://localhost:5173",
// //       "http://192.168.29.218:5173",
// //     ],
// //     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
// //     allowedHeaders: ["Content-Type", "Authorization"],
// //     credentials: true,
// //   })
// // );

// // // ✅ Serve uploaded images
// // app.use("/uploads", express.static(uploadDir));

// // // ✅ Import Routes
// // const authRoutes = require("./routes/auth");
// // const menuRoutes = require("./routes/menu");
// // const tableRoutes = require("./routes/tables");
// // const orderRoutes = require("./routes/orders");
// // const cartRoutes = require("./routes/cartRoutes");
// // const staffRoutes = require("./routes/staff");

// // // ✅ Use Routes
// // app.use("/api/auth", authRoutes);
// // app.use("/api/menu", menuRoutes);
// // app.use("/api/tables", tableRoutes);
// // app.use("/api/orders", orderRoutes);
// // app.use("/api/cart", cartRoutes);
// // app.use("/api/staff", staffRoutes);
// // app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// // // ✅ Default route
// // app.get("/", (req, res) => {
// //   res.send("🍽️ Restaurant QR Backend is running successfully!");
// // });

// // // ✅ Redirect scanned QR to frontend
// // app.get("/menu/:slug", (req, res) => {
// //   const tableSlug = req.params.slug;
// //   res.redirect(`${baseURL}/menu/${tableSlug}`);
// // });

// // // ✅ Connect MongoDB and Start Server
// // mongoose
// //   .connect(MONGO_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(async () => {
// //     console.log("✅ MongoDB Connected Successfully!");

// //     try {
// //       await generateQRCodes(baseURL);
// //       console.log("✅ QR Codes Generated Successfully!");
// //     } catch (err) {
// //       console.warn("⚠️ QR Code Generation Skipped:", err.message);
// //     }

// //     app.listen(PORT, "0.0.0.0", () => {
// //       console.log(`🚀 Server running at: http://localhost:${PORT}`);
// //       console.log(`🌐 LAN Access: http://192.168.29.218:${PORT}`);
// //     });
// //   })
// //   .catch((err) => {
// //     console.error("❌ MongoDB Connection Error:", err.message);
// //     process.exit(1);
// //   });
// // const express = require("express");
// // const mongoose = require("mongoose");
// // const dotenv = require("dotenv");
// // const path = require("path");
// // const cors = require("cors");
// // const fs = require("fs");
// // const generateQRCodes = require("./utils/generateQRCodes");

// // dotenv.config(); // ✅ load .env before anything else

// // const app = express();

// // // ===============================
// // // ⚙️ Basic Config
// // // ===============================
// // const PORT = process.env.PORT || 4000;
// // const BASE_URL = process.env.BASE_URL || "http://192.168.29.218:5173";
// // const MONGO_URI =
// //   process.env.MONGO_URI ||
// //   "mongodb+srv://vibhanshi09:Mcxv7fJtA9hxyXxD@cluster0.lzqcowx.mongodb.net/restaurant";

// // // ✅ Ensure uploads folder exists
// // const uploadDir = path.join(__dirname, "uploads");
// // if (!fs.existsSync(uploadDir)) {
// //   fs.mkdirSync(uploadDir, { recursive: true });
// //   console.log("📁 Created uploads folder:", uploadDir);
// // }

// // // ===============================
// // // 🧩 Middleware
// // // ===============================
// // app.use(express.json());
// // app.use(
// //   cors({
// //     origin: ["http://localhost:5173", "http://192.168.29.218:5173"],
// //     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
// //     allowedHeaders: ["Content-Type", "Authorization"],
// //     credentials: true,
// //   })
// // );

// // // ✅ Serve uploaded images
// // app.use("/uploads", express.static(uploadDir));

// // // ===============================
// // // 📦 Routes Import
// // // ===============================
// // const authRoutes = require("./routes/auth");
// // const menuRoutes = require("./routes/menu");
// // const tableRoutes = require("./routes/tables");
// // const orderRoutes = require("./routes/orders");
// // const cartRoutes = require("./routes/cartRoutes");
// // const staffRoutes = require("./routes/staff");

// // // ===============================
// // // 🚏 Routes Mount
// // // ===============================
// // app.use("/api/auth", authRoutes);
// // app.use("/api/menu", menuRoutes);
// // app.use("/api/tables", tableRoutes);
// // app.use("/api/orders", orderRoutes);
// // app.use("/api/cart", cartRoutes);
// // app.use("/api/staff", staffRoutes);

// // // ===============================
// // // 🧠 Health Check Route
// // // ===============================
// // app.get("/", (req, res) => {
// //   res.send("🍽️ Restaurant QR Backend is running successfully!");
// // });

// // // ===============================
// // // 🧾 Token Test Route (for AdminPanel token check)
// // // ===============================
// // app.get("/api/protected-test", (req, res) => {
// //   res.json({ success: true, message: "Protected route reached ✅" });
// // });

// // // ===============================
// // // 🔗 Redirect QR Scan to Frontend
// // // ===============================
// // app.get("/menu/:slug", (req, res) => {
// //   const tableSlug = req.params.slug;
// //   res.redirect(`${BASE_URL}/menu/${tableSlug}`);
// // });

// // // ===============================
// // // 🔌 MongoDB Connection
// // // ===============================
// // mongoose
// //   .connect(MONGO_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(async () => {
// //     console.log("✅ MongoDB Connected Successfully!");

// //     try {
// //       await generateQRCodes(BASE_URL);
// //       console.log("✅ QR Codes Generated Successfully!");
// //     } catch (err) {
// //       console.warn("⚠️ QR Code Generation Skipped:", err.message);
// //     }

// //     app.listen(PORT, "0.0.0.0", () => {
// //       console.log(`🚀 Server running at: http://localhost:${PORT}`);
// //       console.log(`🌐 LAN Access: http://192.168.29.218:${PORT}`);
// //     });
// //   })
// //   .catch((err) => {
// //     console.error("❌ MongoDB Connection Error:", err.message);
// //     process.exit(1);
// //   });
// // server.js
// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const path = require("path");
// const cors = require("cors");
// const fs = require("fs");
// const generateQRCodes = require("./utils/generateQRCodes");

// // ✅ Load environment variables first
// dotenv.config();

// const app = express();

// // ===============================
// // ⚙️ Basic Config
// // ===============================
// const PORT = process.env.PORT || 4000;
// const BASE_URL = process.env.BASE_URL || "http://192.168.29.218:5173";
// const MONGO_URI = process.env.MONGO_URI;
// const JWT_SECRET = process.env.JWT_SECRET;

// // ✅ Check essential env values
// if (!MONGO_URI) {
//   console.error("❌ Missing MONGO_URI in .env");
//   process.exit(1);
// }
// if (!JWT_SECRET) {
//   console.error("❌ Missing JWT_SECRET in .env");
//   process.exit(1);
// }

// // ✅ Ensure uploads folder exists
// const uploadDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
//   console.log("📁 Created uploads folder:", uploadDir);
// }

// // ===============================
// // 🧩 Middleware
// // ===============================
// app.use(express.json());
// app.use(
//   cors({
//     origin: ["http://localhost:5173", "http://192.168.29.218:5173"],
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );

// // ✅ Serve uploaded images
// app.use("/uploads", express.static(uploadDir));

// // ===============================
// // 📦 Import Routes
// // ===============================
// const authRoutes = require("./routes/auth");
// const menuRoutes = require("./routes/menu");
// const tableRoutes = require("./routes/tables");
// const orderRoutes = require("./routes/orders");
// const cartRoutes = require("./routes/cartRoutes");
// const staffRoutes = require("./routes/staff");

// // ===============================
// // 🚏 Use Routes
// // ===============================
// app.use("/api/auth", authRoutes);
// app.use("/api/menu", menuRoutes);
// app.use("/api/tables", tableRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/staff", staffRoutes);

// // ===============================
// // 🧠 Health Check Route
// // ===============================
// app.get("/", (req, res) => {
//   res.send("🍽️ Restaurant QR Backend is running successfully!");
// });

// // ===============================
// // 🧾 Protected Test Route
// // ===============================
// app.get("/api/protected-test", (req, res) => {
//   res.json({ success: true, message: "Protected route reached ✅" });
// });

// // ===============================
// // 🔗 Redirect QR Scan to Frontend
// // ===============================
// app.get("/menu/:slug", (req, res) => {
//   const tableSlug = req.params.slug;
//   res.redirect(`${BASE_URL}/menu/${tableSlug}`);
// });

// // ===============================
// // 🔌 MongoDB Connection
// // ===============================
// mongoose
//   .connect(MONGO_URI)
//   .then(async () => {
//     console.log("✅ MongoDB Connected Successfully!");

//     try {
//       await generateQRCodes(BASE_URL);
//       console.log("✅ QR Codes Generated Successfully!");
//     } catch (err) {
//       console.warn("⚠️ QR Code Generation Skipped:", err.message);
//     }

//     app.listen(PORT, "0.0.0.0", () => {
//       console.log(`🚀 Server running at: http://localhost:${PORT}`);
//       console.log(`🌐 LAN Access: http://192.168.29.218:${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB Connection Error:", err.message);
//     process.exit(1);
//   });
// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const path = require("path");
// const cors = require("cors");
// const generateQRCodes = require("./utils/generateQRCodes");

// // ✅ Load environment variables
// dotenv.config({ path: path.join(__dirname, "../.env") });

// // ✅ Debug log
// console.log("📦 MONGO_URI:", process.env.MONGO_URI ? "✅ Found" : "❌ Missing");

// const app = express();
// const PORT = process.env.PORT || 4000;

// // 🧠 Auto-detect frontend base URL
// const baseURL = process.env.BASE_URL || "http://192.168.29.218:5173";

// // ✅ Middleware
// app.use(express.json());
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173", // for local dev
//       "http:///192.168.29.218:5173", // for LAN/mobile testing
//     ],
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );

// // ✅ Serve uploaded images (important for menu images)
// app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// // ✅ Import routes
// const authRoutes = require("./routes/auth");
// const menuRoutes = require("./routes/menu");
// const tableRoutes = require("./routes/tables");
// const orderRoutes = require("./routes/orders");
// const cartRoutes = require("./routes/cartRoutes");
// const uploadRoutes = require("./routes/upload"); // ✅ new route for image uploads
// // ✅ Import staff route
// const staffRoutes = require("./routes/staff");

// // ✅ Register staff route
// app.use("/api/staff", staffRoutes);

// // ✅ Register routes
// app.use("/api/auth", authRoutes);
// app.use("/api/menu", menuRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/tables", tableRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/upload", uploadRoutes); // ✅ for file uploads

// // ✅ Default route
// app.get("/", (req, res) => {
//   res.send("🍽️ Restaurant QR Backend is running successfully!");
// });

// // ✅ Redirect QR to frontend
// app.get("/menu/:slug", (req, res) => {
//   const tableSlug = req.params.slug;
//   res.redirect(`${baseURL}/menu/${tableSlug}`);
// });

// // ✅ Connect to MongoDB and start server
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(async () => {
//     console.log("✅ MongoDB connected successfully!");

//     try {
//       await generateQRCodes(baseURL);
//       console.log("✅ QR codes generated successfully");
//     } catch (err) {
//       console.error("❌ Error generating QR codes:", err.message);
//     }

//     // ✅ Start server
//     app.listen(PORT, "0.0.0.0", () => {
//       console.log(`🚀 Server running at: http://localhost:${PORT}`);
//       console.log(`🌐 Accessible on network: http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => console.error("❌ MongoDB connection error:", err.message));
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const generateQRCodes = require("./utils/generateQRCodes");

// ✅ Load environment variables
dotenv.config({ path: path.join(__dirname, "../.env") });

// ✅ Debug log
console.log("📦 MONGO_URI:", process.env.MONGO_URI ? "✅ Found" : "❌ Missing");

const app = express();
const PORT = process.env.PORT || 4000;

// 🧠 Auto-detect frontend base URL
const baseURL = process.env.BASE_URL || "http://10.137.209.69:5173";

// ✅ Middleware
app.use(express.json());

// ✅ CORS fix (allows both localhost and LAN access)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(
  cors({
    origin: [
      "http://localhost:5173",      // for local dev
      "http://10.137.209.69:5173",   // for LAN/mobile testing
    ],
    credentials: true,
  })
);

// ✅ Serve uploaded images (make sure uploads folder path is correct)
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // ← FIXED LINE
//                                   ↑ removed one "../"

// ✅ Import routes
const authRoutes = require("./routes/auth");
const menuRoutes = require("./routes/menu");
const tableRoutes = require("./routes/tables");
const orderRoutes = require("./routes/orders");
const cartRoutes = require("./routes/cartRoutes");
const uploadRoutes = require("./routes/upload");
const staffRoutes = require("./routes/staff");

// ✅ Register routes
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/tables", tableRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/staff", staffRoutes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("🍽️ Restaurant QR Backend is running successfully!");
});

// ✅ Redirect QR to frontend
app.get("/menu/:slug", (req, res) => {
  const tableSlug = req.params.slug;
  res.redirect(`${baseURL}/menu/${tableSlug}`);
});

// ✅ Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB connected successfully!");

    try {
      await generateQRCodes(baseURL);
      console.log("✅ QR codes generated successfully");
    } catch (err) {
      console.error("❌ Error generating QR codes:", err.message);
    }

    // ✅ Start server
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running at: http://localhost:${PORT}`);
      console.log(`🌐 Accessible on network: http://10.137.209.69:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));
