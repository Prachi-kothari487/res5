// // // // // import React, { useEffect, useState } from "react";
// // // // // import api from "../services/api";

// // // // // const Menu = ({ tableSlug }) => {
// // // // //   const [categories, setCategories] = useState([]);
// // // // //   const [activeCategoryId, setActiveCategoryId] = useState(null);
// // // // //   const [items, setItems] = useState([]);
// // // // //   const [cart, setCart] = useState([]);

// // // // //   // ✅ Fetch menu data
// // // // //   useEffect(() => {
// // // // //     const fetchMenuData = async () => {
// // // // //       try {
// // // // //         const [itemsRes, catRes] = await Promise.all([
// // // // //           api.get("/menu/items"),
// // // // //           api.get("/menu/categories"),
// // // // //         ]);

// // // // //         const fetchedItems = itemsRes.data.items || [];
// // // // //         const fetchedCategories = catRes.data.categories || [];

// // // // //         setItems(fetchedItems);
// // // // //         setCategories(fetchedCategories);

// // // // //         if (fetchedCategories.length > 0) {
// // // // //           setActiveCategoryId(fetchedCategories[0]._id);
// // // // //         }
// // // // //       } catch (error) {
// // // // //         console.error("❌ Error fetching menu:", error);
// // // // //       }
// // // // //     };

// // // // //     fetchMenuData();
// // // // //   }, []);

// // // // //   // ✅ Filter items by selected category ID
// // // // //   const filteredItems = activeCategoryId
// // // // //     ? items.filter((item) => item.categoryId === activeCategoryId)
// // // // //     : items;

// // // // //   // ✅ Add to cart
// // // // //   const addToCart = (item) => {
// // // // //     setCart((prevCart) => {
// // // // //       const existing = prevCart.find((c) => c._id === item._id);
// // // // //       if (existing) {
// // // // //         return prevCart.map((c) =>
// // // // //           c._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
// // // // //         );
// // // // //       } else {
// // // // //         return [...prevCart, { ...item, quantity: 1 }];
// // // // //       }
// // // // //     });
// // // // //   };

// // // // //   // ✅ Remove from cart
// // // // //   const removeFromCart = (id) => {
// // // // //     setCart((prevCart) => prevCart.filter((item) => item._id !== id));
// // // // //   };

// // // // //   // ✅ Calculate total price
// // // // //   const total = cart.reduce(
// // // // //     (sum, item) => sum + item.price * item.quantity,
// // // // //     0
// // // // //   );

// // // // //   return (
// // // // //     <div
// // // // //       style={{
// // // // //         minHeight: "100vh",
// // // // //         backgroundColor: "#fffdf8",
// // // // //         fontFamily: "'Poppins', sans-serif",
// // // // //       }}
// // // // //     >
// // // // //       {/* 🌟 Header */}
// // // // //       <header
// // // // //         style={{
// // // // //           background: "linear-gradient(90deg, #d4af37, #f1c40f)",
// // // // //           textAlign: "center",
// // // // //           color: "white",
// // // // //           padding: "1.5rem 0",
// // // // //           boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
// // // // //         }}
// // // // //       >
// // // // //         <h1
// // // // //           style={{
// // // // //             fontSize: "2rem",
// // // // //             fontWeight: "700",
// // // // //             letterSpacing: "1px",
// // // // //             textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
// // // // //           }}
// // // // //         >
// // // // //           🍽️ Scan n Dine
// // // // //         </h1>
// // // // //         {tableSlug && (
// // // // //           <p
// // // // //             style={{
// // // // //               fontSize: "0.9rem",
// // // // //               opacity: 0.9,
// // // // //               marginTop: "0.3rem",
// // // // //             }}
// // // // //           >
// // // // //             Table: <strong>{tableSlug}</strong>
// // // // //           </p>
// // // // //         )}
// // // // //       </header>

// // // // //       {/* 🌟 Categories */}
// // // // //       <div
// // // // //         style={{
// // // // //           display: "flex",
// // // // //           overflowX: "auto",
// // // // //           gap: "10px",
// // // // //           padding: "1rem 1.2rem",
// // // // //           borderBottom: "2px solid #f8e5b5",
// // // // //           backgroundColor: "#fffaf1",
// // // // //         }}
// // // // //       >
// // // // //         {categories.length > 0 ? (
// // // // //           categories.map((cat) => (
// // // // //             <button
// // // // //               key={cat._id}
// // // // //               onClick={() => setActiveCategoryId(cat._id)}
// // // // //               style={{
// // // // //                 padding: "8px 18px",
// // // // //                 borderRadius: "20px",
// // // // //                 border:
// // // // //                   activeCategoryId === cat._id
// // // // //                     ? "2px solid #b8860b"
// // // // //                     : "1.5px solid #d9b24d",
// // // // //                 background:
// // // // //                   activeCategoryId === cat._id
// // // // //                     ? "linear-gradient(90deg, #d4af37, #f1c40f)"
// // // // //                     : "#fff",
// // // // //                 color:
// // // // //                   activeCategoryId === cat._id ? "white" : "#a67c00",
// // // // //                 fontWeight: "600",
// // // // //                 fontSize: "0.9rem",
// // // // //                 cursor: "pointer",
// // // // //                 transition: "0.3s",
// // // // //                 boxShadow:
// // // // //                   activeCategoryId === cat._id
// // // // //                     ? "0 3px 10px rgba(0,0,0,0.2)"
// // // // //                     : "none",
// // // // //                 whiteSpace: "nowrap",
// // // // //               }}
// // // // //             >
// // // // //               {cat.name}
// // // // //             </button>
// // // // //           ))
// // // // //         ) : (
// // // // //           <p style={{ color: "#999" }}>Loading categories...</p>
// // // // //         )}
// // // // //       </div>

// // // // //       {/* 🌟 Items Grid */}
// // // // //       <main
// // // // //         style={{
// // // // //           display: "grid",
// // // // //           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// // // // //           gap: "1.5rem",
// // // // //           padding: "2rem",
// // // // //         }}
// // // // //       >
// // // // //         {filteredItems.length > 0 ? (
// // // // //           filteredItems.map((item) => (
// // // // //             <div
// // // // //               key={item._id}
// // // // //               style={{
// // // // //                 backgroundColor: "white",
// // // // //                 borderRadius: "16px",
// // // // //                 boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
// // // // //                 overflow: "hidden",
// // // // //                 border: "1.5px solid #f8e5b5",
// // // // //                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
// // // // //               }}
// // // // //               onMouseEnter={(e) =>
// // // // //                 (e.currentTarget.style.transform = "translateY(-6px)")
// // // // //               }
// // // // //               onMouseLeave={(e) =>
// // // // //                 (e.currentTarget.style.transform = "translateY(0)")
// // // // //               }
// // // // //             >
// // // // //               <img
// // // // //                 src={item.image || "https://via.placeholder.com/150"}
// // // // //                 alt={item.name}
// // // // //                 style={{
// // // // //                   width: "100%",
// // // // //                   height: "180px",
// // // // //                   objectFit: "cover",
// // // // //                 }}
// // // // //               />
// // // // //               <div style={{ padding: "1rem" }}>
// // // // //                 <h2
// // // // //                   style={{
// // // // //                     fontSize: "1.1rem",
// // // // //                     fontWeight: "600",
// // // // //                     color: "#b8860b",
// // // // //                     marginBottom: "0.3rem",
// // // // //                   }}
// // // // //                 >
// // // // //                   {item.name}
// // // // //                 </h2>
// // // // //                 <p
// // // // //                   style={{
// // // // //                     fontSize: "0.85rem",
// // // // //                     color: "#777",
// // // // //                     minHeight: "40px",
// // // // //                     marginBottom: "0.8rem",
// // // // //                   }}
// // // // //                 >
// // // // //                   {item.description || "Deliciously prepared for you."}
// // // // //                 </p>

// // // // //                 <div
// // // // //                   style={{
// // // // //                     display: "flex",
// // // // //                     justifyContent: "space-between",
// // // // //                     alignItems: "center",
// // // // //                   }}
// // // // //                 >
// // // // //                   <span
// // // // //                     style={{
// // // // //                       color: "#b8860b",
// // // // //                       fontWeight: "700",
// // // // //                       fontSize: "1rem",
// // // // //                     }}
// // // // //                   >
// // // // //                     ₹{item.price}
// // // // //                   </span>
// // // // //                   <button
// // // // //                     onClick={() => addToCart(item)}
// // // // //                     style={{
// // // // //                       background:
// // // // //                         "linear-gradient(90deg, #d4af37, #f1c40f)",
// // // // //                       color: "white",
// // // // //                       padding: "6px 12px",
// // // // //                       borderRadius: "10px",
// // // // //                       fontWeight: "600",
// // // // //                       fontSize: "0.85rem",
// // // // //                       border: "none",
// // // // //                       cursor: "pointer",
// // // // //                       boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
// // // // //                     }}
// // // // //                   >
// // // // //                     Add +
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))
// // // // //         ) : (
// // // // //           <p
// // // // //             style={{
// // // // //               gridColumn: "1 / -1",
// // // // //               textAlign: "center",
// // // // //               color: "#999",
// // // // //               fontSize: "1rem",
// // // // //             }}
// // // // //           >
// // // // //             No items found in this category.
// // // // //           </p>
// // // // //         )}
// // // // //       </main>

// // // // //       {/* 🌟 Cart Section */}
// // // // //       {cart.length > 0 && (
// // // // //         <div
// // // // //           style={{
// // // // //             position: "fixed",
// // // // //             bottom: 0,
// // // // //             left: 0,
// // // // //             right: 0,
// // // // //             background: "white",
// // // // //             borderTop: "2px solid #f8e5b5",
// // // // //             boxShadow: "0 -3px 15px rgba(0,0,0,0.1)",
// // // // //             padding: "1rem 1.5rem",
// // // // //             display: "flex",
// // // // //             justifyContent: "space-between",
// // // // //             alignItems: "center",
// // // // //             zIndex: 10,
// // // // //           }}
// // // // //         >
// // // // //           <p
// // // // //             style={{
// // // // //               color: "#a67c00",
// // // // //               fontWeight: "600",
// // // // //               fontSize: "1rem",
// // // // //             }}
// // // // //           >
// // // // //             {cart.length} item(s) | Total:{" "}
// // // // //             <span style={{ color: "#b8860b", fontWeight: "700" }}>
// // // // //               ₹{total}
// // // // //             </span>
// // // // //           </p>
// // // // //           <button
// // // // //             onClick={() => alert("Proceeding to checkout...")}
// // // // //             style={{
// // // // //               background: "linear-gradient(90deg, #d4af37, #f1c40f)",
// // // // //               color: "white",
// // // // //               border: "none",
// // // // //               padding: "10px 20px",
// // // // //               borderRadius: "10px",
// // // // //               fontWeight: "600",
// // // // //               fontSize: "0.95rem",
// // // // //               cursor: "pointer",
// // // // //               boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
// // // // //             }}
// // // // //           >
// // // // //             Checkout →
// // // // //           </button>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Menu;
// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";

// // // // const Menu = ({ tableSlug }) => {
// // // //   const [categories, setCategories] = useState([]);
// // // //   const [activeCategoryId, setActiveCategoryId] = useState(null);
// // // //   const [items, setItems] = useState([]);
// // // //   const [cart, setCart] = useState([]);
// // // //   const [loading, setLoading] = useState(true);

// // // //   // ✅ Fetch categories & items from backend (localhost)
// // // //   useEffect(() => {
// // // //     const fetchMenuData = async () => {
// // // //       try {
// // // //         setLoading(true);
// // // //         const [itemsRes, catRes] = await Promise.all([
// // // //           axios.get("http://localhost:4000/api/menu/items"),
// // // //           axios.get("http://localhost:4000/api/menu/categories"),
// // // //         ]);

// // // //         const fetchedItems = itemsRes.data.items || [];
// // // //         const fetchedCategories = catRes.data.categories || [];

// // // //         setItems(fetchedItems);
// // // //         setCategories(fetchedCategories);

// // // //         if (fetchedCategories.length > 0) {
// // // //           setActiveCategoryId(fetchedCategories[0]._id);
// // // //         }
// // // //       } catch (error) {
// // // //         console.error("❌ Error fetching menu:", error);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchMenuData();
// // // //   }, []);

// // // //   // ✅ Filter items by selected category ID
// // // //   const filteredItems = activeCategoryId
// // // //     ? items.filter((item) => item.categoryId === activeCategoryId)
// // // //     : items;

// // // //   // ✅ Add item to cart
// // // //   const addToCart = (item) => {
// // // //     setCart((prevCart) => {
// // // //       const existing = prevCart.find((c) => c._id === item._id);
// // // //       if (existing) {
// // // //         return prevCart.map((c) =>
// // // //           c._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
// // // //         );
// // // //       } else {
// // // //         return [...prevCart, { ...item, quantity: 1 }];
// // // //       }
// // // //     });
// // // //   };

// // // //   // ✅ Remove from cart
// // // //   const removeFromCart = (id) => {
// // // //     setCart((prevCart) => prevCart.filter((item) => item._id !== id));
// // // //   };

// // // //   // ✅ Calculate total price
// // // //   const total = cart.reduce(
// // // //     (sum, item) => sum + item.price * item.quantity,
// // // //     0
// // // //   );

// // // //   // ✅ Place Order API
// // // //   const placeOrder = async () => {
// // // //     if (cart.length === 0) {
// // // //       alert("Cart is empty!");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const res = await axios.post("http://localhost:4000/api/orders", {
// // // //         tableSlug: tableSlug || "table1",
// // // //         items: cart.map((item) => ({
// // // //           menuItemId: item._id,
// // // //           qty: item.quantity,
// // // //           price: item.price,
// // // //         })),
// // // //       });
// // // //       console.log("✅ Order created:", res.data);
// // // //       alert("Order placed successfully!");
// // // //       setCart([]);
// // // //     } catch (err) {
// // // //       console.error("❌ Order placement failed:", err);
// // // //       alert("Failed to place order");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div
// // // //       style={{
// // // //         minHeight: "100vh",
// // // //         backgroundColor: "#fffdf8",
// // // //         fontFamily: "'Poppins', sans-serif",
// // // //       }}
// // // //     >
// // // //       {/* 🌟 Header */}
// // // //       <header
// // // //         style={{
// // // //           background: "linear-gradient(90deg, #d4af37, #f1c40f)",
// // // //           textAlign: "center",
// // // //           color: "white",
// // // //           padding: "1.5rem 0",
// // // //           boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
// // // //         }}
// // // //       >
// // // //         <h1
// // // //           style={{
// // // //             fontSize: "2rem",
// // // //             fontWeight: "700",
// // // //             letterSpacing: "1px",
// // // //             textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
// // // //           }}
// // // //         >
// // // //           🍽️ Scan n Dine
// // // //         </h1>
// // // //         {tableSlug && (
// // // //           <p
// // // //             style={{
// // // //               fontSize: "0.9rem",
// // // //               opacity: 0.9,
// // // //               marginTop: "0.3rem",
// // // //             }}
// // // //           >
// // // //             Table: <strong>{tableSlug}</strong>
// // // //           </p>
// // // //         )}
// // // //       </header>

// // // //       {/* 🌟 Categories */}
// // // //       <div
// // // //         style={{
// // // //           display: "flex",
// // // //           overflowX: "auto",
// // // //           gap: "10px",
// // // //           padding: "1rem 1.2rem",
// // // //           borderBottom: "2px solid #f8e5b5",
// // // //           backgroundColor: "#fffaf1",
// // // //         }}
// // // //       >
// // // //         {categories.length > 0 ? (
// // // //           categories.map((cat) => (
// // // //             <button
// // // //               key={cat._id}
// // // //               onClick={() => setActiveCategoryId(cat._id)}
// // // //               style={{
// // // //                 padding: "8px 18px",
// // // //                 borderRadius: "20px",
// // // //                 border:
// // // //                   activeCategoryId === cat._id
// // // //                     ? "2px solid #b8860b"
// // // //                     : "1.5px solid #d9b24d",
// // // //                 background:
// // // //                   activeCategoryId === cat._id
// // // //                     ? "linear-gradient(90deg, #d4af37, #f1c40f)"
// // // //                     : "#fff",
// // // //                 color:
// // // //                   activeCategoryId === cat._id ? "white" : "#a67c00",
// // // //                 fontWeight: "600",
// // // //                 fontSize: "0.9rem",
// // // //                 cursor: "pointer",
// // // //                 transition: "0.3s",
// // // //                 boxShadow:
// // // //                   activeCategoryId === cat._id
// // // //                     ? "0 3px 10px rgba(0,0,0,0.2)"
// // // //                     : "none",
// // // //                 whiteSpace: "nowrap",
// // // //               }}
// // // //             >
// // // //               {cat.name}
// // // //             </button>
// // // //           ))
// // // //         ) : (
// // // //           <p style={{ color: "#999" }}>
// // // //             {loading ? "Loading categories..." : "No categories found"}
// // // //           </p>
// // // //         )}
// // // //       </div>

// // // //       {/* 🌟 Items Grid */}
// // // //       <main
// // // //         style={{
// // // //           display: "grid",
// // // //           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// // // //           gap: "1.5rem",
// // // //           padding: "2rem",
// // // //         }}
// // // //       >
// // // //         {loading ? (
// // // //           <p
// // // //             style={{
// // // //               gridColumn: "1 / -1",
// // // //               textAlign: "center",
// // // //               color: "#999",
// // // //             }}
// // // //           >
// // // //             Loading menu items...
// // // //           </p>
// // // //         ) : filteredItems.length > 0 ? (
// // // //           filteredItems.map((item) => (
// // // //             <div
// // // //               key={item._id}
// // // //               style={{
// // // //                 backgroundColor: "white",
// // // //                 borderRadius: "16px",
// // // //                 boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
// // // //                 overflow: "hidden",
// // // //                 border: "1.5px solid #f8e5b5",
// // // //                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
// // // //               }}
// // // //             >
// // // //               <img
// // // //                 src={item.image || "https://via.placeholder.com/150"}
// // // //                 alt={item.name}
// // // //                 style={{
// // // //                   width: "100%",
// // // //                   height: "180px",
// // // //                   objectFit: "cover",
// // // //                 }}
// // // //               />
// // // //               <div style={{ padding: "1rem" }}>
// // // //                 <h2
// // // //                   style={{
// // // //                     fontSize: "1.1rem",
// // // //                     fontWeight: "600",
// // // //                     color: "#b8860b",
// // // //                     marginBottom: "0.3rem",
// // // //                   }}
// // // //                 >
// // // //                   {item.name}
// // // //                 </h2>
// // // //                 <p
// // // //                   style={{
// // // //                     fontSize: "0.85rem",
// // // //                     color: "#777",
// // // //                     minHeight: "40px",
// // // //                     marginBottom: "0.8rem",
// // // //                   }}
// // // //                 >
// // // //                   {item.description || "Deliciously prepared for you."}
// // // //                 </p>

// // // //                 <div
// // // //                   style={{
// // // //                     display: "flex",
// // // //                     justifyContent: "space-between",
// // // //                     alignItems: "center",
// // // //                   }}
// // // //                 >
// // // //                   <span
// // // //                     style={{
// // // //                       color: "#b8860b",
// // // //                       fontWeight: "700",
// // // //                       fontSize: "1rem",
// // // //                     }}
// // // //                   >
// // // //                     ₹{item.price}
// // // //                   </span>
// // // //                   <button
// // // //                     onClick={() => addToCart(item)}
// // // //                     style={{
// // // //                       background:
// // // //                         "linear-gradient(90deg, #d4af37, #f1c40f)",
// // // //                       color: "white",
// // // //                       padding: "6px 12px",
// // // //                       borderRadius: "10px",
// // // //                       fontWeight: "600",
// // // //                       fontSize: "0.85rem",
// // // //                       border: "none",
// // // //                       cursor: "pointer",
// // // //                       boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
// // // //                     }}
// // // //                   >
// // // //                     Add +
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))
// // // //         ) : (
// // // //           <p
// // // //             style={{
// // // //               gridColumn: "1 / -1",
// // // //               textAlign: "center",
// // // //               color: "#999",
// // // //               fontSize: "1rem",
// // // //             }}
// // // //           >
// // // //             No items found in this category.
// // // //           </p>
// // // //         )}
// // // //       </main>

// // // //       {/* 🌟 Cart Section */}
// // // //       {cart.length > 0 && (
// // // //         <div
// // // //           style={{
// // // //             position: "fixed",
// // // //             bottom: 0,
// // // //             left: 0,
// // // //             right: 0,
// // // //             background: "white",
// // // //             borderTop: "2px solid #f8e5b5",
// // // //             boxShadow: "0 -3px 15px rgba(0,0,0,0.1)",
// // // //             padding: "1rem 1.5rem",
// // // //             display: "flex",
// // // //             justifyContent: "space-between",
// // // //             alignItems: "center",
// // // //             zIndex: 10,
// // // //           }}
// // // //         >
// // // //           <p
// // // //             style={{
// // // //               color: "#a67c00",
// // // //               fontWeight: "600",
// // // //               fontSize: "1rem",
// // // //             }}
// // // //           >
// // // //             {cart.length} item(s) | Total:{" "}
// // // //             <span style={{ color: "#b8860b", fontWeight: "700" }}>
// // // //               ₹{total}
// // // //             </span>
// // // //           </p>
// // // //           <button
// // // //             onClick={placeOrder}
// // // //             style={{
// // // //               background: "linear-gradient(90deg, #d4af37, #f1c40f)",
// // // //               color: "white",
// // // //               border: "none",
// // // //               padding: "10px 20px",
// // // //               borderRadius: "10px",
// // // //               fontWeight: "600",
// // // //               fontSize: "0.95rem",
// // // //               cursor: "pointer",
// // // //               boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
// // // //             }}
// // // //           >
// // // //             Place Order →
// // // //           </button>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Menu;
// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";

// // // const Menu = ({ tableSlug }) => {
// // //   const [categories, setCategories] = useState([]);
// // //   const [activeCategoryId, setActiveCategoryId] = useState(null);
// // //   const [items, setItems] = useState([]);
// // //   const [cart, setCart] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   // 🧠 Define backend base URL
// // //   const BASE_URL = "http://localhost:4000"; 
// // //   // 🔄 change to your LAN IP if testing on phone:
// // //   // const BASE_URL = "http://192.168.7.165:4000";

// // //   // ✅ Fetch categories & items together
// // //   useEffect(() => {
// // //     const fetchMenuData = async () => {
// // //       try {
// // //         setLoading(true);
// // //         const [itemsRes, catRes] = await Promise.all([
// // //           axios.get(`${BASE_URL}/api/menu/items`),
// // //           axios.get(`${BASE_URL}/api/menu/categories`),
// // //         ]);

// // //         const fetchedItems = itemsRes.data.items || [];
// // //         const fetchedCategories = catRes.data.categories || [];

// // //         setItems(fetchedItems);
// // //         setCategories(fetchedCategories);

// // //         if (fetchedCategories.length > 0) {
// // //           setActiveCategoryId(fetchedCategories[0]._id);
// // //         }
// // //       } catch (error) {
// // //         console.error("❌ Error fetching menu data:", error);
// // //         alert("Failed to load menu data. Please check server connection.");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchMenuData();
// // //   }, []);

// // //   // ✅ Filter items by selected category ID
// // //   const filteredItems = activeCategoryId
// // //     ? items.filter((item) => item.categoryId === activeCategoryId)
// // //     : items;

// // //   // ✅ Add item to cart
// // //   const addToCart = (item) => {
// // //     setCart((prevCart) => {
// // //       const existing = prevCart.find((c) => c._id === item._id);
// // //       if (existing) {
// // //         return prevCart.map((c) =>
// // //           c._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
// // //         );
// // //       } else {
// // //         return [...prevCart, { ...item, quantity: 1 }];
// // //       }
// // //     });
// // //   };

// // //   // ✅ Remove item from cart
// // //   const removeFromCart = (id) => {
// // //     setCart((prevCart) => prevCart.filter((item) => item._id !== id));
// // //   };

// // //   // ✅ Calculate total price
// // //   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

// // //   // ✅ Place Order API
// // //   const placeOrder = async () => {
// // //     if (cart.length === 0) {
// // //       alert("🛒 Your cart is empty!");
// // //       return;
// // //     }

// // //     try {
// // //       const res = await axios.post(`${BASE_URL}/api/orders`, {
// // //         tableSlug: tableSlug || "table-1",
// // //         items: cart.map((item) => ({
// // //           menuItemId: item._id,
// // //           qty: item.quantity,
// // //           price: item.price,
// // //         })),
// // //       });

// // //       console.log("✅ Order created successfully:", res.data);
// // //       alert("🎉 Order placed successfully!");
// // //       setCart([]);
// // //     } catch (err) {
// // //       console.error("❌ Order placement failed:", err);
// // //       alert("Failed to place order. Please try again.");
// // //     }
// // //   };

// // //   return (
// // //     <div
// // //       style={{
// // //         minHeight: "100vh",
// // //         backgroundColor: "#fffdf8",
// // //         fontFamily: "'Poppins', sans-serif",
// // //       }}
// // //     >
// // //       {/* 🌟 Header */}
// // //       <header
// // //         style={{
// // //           background: "linear-gradient(90deg, #d4af37, #f1c40f)",
// // //           textAlign: "center",
// // //           color: "white",
// // //           padding: "1.5rem 0",
// // //           boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
// // //         }}
// // //       >
// // //         <h1
// // //           style={{
// // //             fontSize: "2rem",
// // //             fontWeight: "700",
// // //             letterSpacing: "1px",
// // //             textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
// // //           }}
// // //         >
// // //           🍽️ Scan n Dine
// // //         </h1>
// // //         {tableSlug && (
// // //           <p
// // //             style={{
// // //               fontSize: "0.9rem",
// // //               opacity: 0.9,
// // //               marginTop: "0.3rem",
// // //             }}
// // //           >
// // //             Table: <strong>{tableSlug}</strong>
// // //           </p>
// // //         )}
// // //       </header>

// // //       {/* 🌟 Categories */}
// // //       <div
// // //         style={{
// // //           display: "flex",
// // //           overflowX: "auto",
// // //           gap: "10px",
// // //           padding: "1rem 1.2rem",
// // //           borderBottom: "2px solid #f8e5b5",
// // //           backgroundColor: "#fffaf1",
// // //         }}
// // //       >
// // //         {categories.length > 0 ? (
// // //           categories.map((cat) => (
// // //             <button
// // //               key={cat._id}
// // //               onClick={() => setActiveCategoryId(cat._id)}
// // //               style={{
// // //                 padding: "8px 18px",
// // //                 borderRadius: "20px",
// // //                 border:
// // //                   activeCategoryId === cat._id
// // //                     ? "2px solid #b8860b"
// // //                     : "1.5px solid #d9b24d",
// // //                 background:
// // //                   activeCategoryId === cat._id
// // //                     ? "linear-gradient(90deg, #d4af37, #f1c40f)"
// // //                     : "#fff",
// // //                 color: activeCategoryId === cat._id ? "white" : "#a67c00",
// // //                 fontWeight: "600",
// // //                 fontSize: "0.9rem",
// // //                 cursor: "pointer",
// // //                 transition: "0.3s",
// // //                 boxShadow:
// // //                   activeCategoryId === cat._id
// // //                     ? "0 3px 10px rgba(0,0,0,0.2)"
// // //                     : "none",
// // //                 whiteSpace: "nowrap",
// // //               }}
// // //             >
// // //               {cat.name}
// // //             </button>
// // //           ))
// // //         ) : (
// // //           <p style={{ color: "#999" }}>
// // //             {loading ? "Loading categories..." : "No categories found"}
// // //           </p>
// // //         )}
// // //       </div>

// // //       {/* 🌟 Items Grid */}
// // //       <main
// // //         style={{
// // //           display: "grid",
// // //           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// // //           gap: "1.5rem",
// // //           padding: "2rem",
// // //         }}
// // //       >
// // //         {loading ? (
// // //           <p
// // //             style={{
// // //               gridColumn: "1 / -1",
// // //               textAlign: "center",
// // //               color: "#999",
// // //             }}
// // //           >
// // //             Loading menu items...
// // //           </p>
// // //         ) : filteredItems.length > 0 ? (
// // //           filteredItems.map((item) => (
// // //             <div
// // //               key={item._id}
// // //               style={{
// // //                 backgroundColor: "white",
// // //                 borderRadius: "16px",
// // //                 boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
// // //                 overflow: "hidden",
// // //                 border: "1.5px solid #f8e5b5",
// // //                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
// // //               }}
// // //             >
// // //               <img
// // //                 src={item.image || "https://via.placeholder.com/150"}
// // //                 alt={item.name}
// // //                 style={{
// // //                   width: "100%",
// // //                   height: "180px",
// // //                   objectFit: "cover",
// // //                 }}
// // //               />
// // //               <div style={{ padding: "1rem" }}>
// // //                 <h2
// // //                   style={{
// // //                     fontSize: "1.1rem",
// // //                     fontWeight: "600",
// // //                     color: "#b8860b",
// // //                     marginBottom: "0.3rem",
// // //                   }}
// // //                 >
// // //                   {item.name}
// // //                 </h2>
// // //                 <p
// // //                   style={{
// // //                     fontSize: "0.85rem",
// // //                     color: "#777",
// // //                     minHeight: "40px",
// // //                     marginBottom: "0.8rem",
// // //                   }}
// // //                 >
// // //                   {item.description || "Deliciously prepared for you."}
// // //                 </p>

// // //                 <div
// // //                   style={{
// // //                     display: "flex",
// // //                     justifyContent: "space-between",
// // //                     alignItems: "center",
// // //                   }}
// // //                 >
// // //                   <span
// // //                     style={{
// // //                       color: "#b8860b",
// // //                       fontWeight: "700",
// // //                       fontSize: "1rem",
// // //                     }}
// // //                   >
// // //                     ₹{item.price}
// // //                   </span>
// // //                   <button
// // //                     onClick={() => addToCart(item)}
// // //                     style={{
// // //                       background:
// // //                         "linear-gradient(90deg, #d4af37, #f1c40f)",
// // //                       color: "white",
// // //                       padding: "6px 12px",
// // //                       borderRadius: "10px",
// // //                       fontWeight: "600",
// // //                       fontSize: "0.85rem",
// // //                       border: "none",
// // //                       cursor: "pointer",
// // //                       boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
// // //                     }}
// // //                   >
// // //                     Add +
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <p
// // //             style={{
// // //               gridColumn: "1 / -1",
// // //               textAlign: "center",
// // //               color: "#999",
// // //               fontSize: "1rem",
// // //             }}
// // //           >
// // //             No items found in this category.
// // //           </p>
// // //         )}
// // //       </main>

// // //       {/* 🌟 Cart Section */}
// // //       {cart.length > 0 && (
// // //         <div
// // //           style={{
// // //             position: "fixed",
// // //             bottom: 0,
// // //             left: 0,
// // //             right: 0,
// // //             background: "white",
// // //             borderTop: "2px solid #f8e5b5",
// // //             boxShadow: "0 -3px 15px rgba(0,0,0,0.1)",
// // //             padding: "1rem 1.5rem",
// // //             display: "flex",
// // //             justifyContent: "space-between",
// // //             alignItems: "center",
// // //             zIndex: 10,
// // //           }}
// // //         >
// // //           <p
// // //             style={{
// // //               color: "#a67c00",
// // //               fontWeight: "600",
// // //               fontSize: "1rem",
// // //             }}
// // //           >
// // //             {cart.length} item(s) | Total:{" "}
// // //             <span style={{ color: "#b8860b", fontWeight: "700" }}>
// // //               ₹{total}
// // //             </span>
// // //           </p>
// // //           <button
// // //             onClick={placeOrder}
// // //             style={{
// // //               background: "linear-gradient(90deg, #d4af37, #f1c40f)",
// // //               color: "white",
// // //               border: "none",
// // //               padding: "10px 20px",
// // //               borderRadius: "10px",
// // //               fontWeight: "600",
// // //               fontSize: "0.95rem",
// // //               cursor: "pointer",
// // //               boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
// // //             }}
// // //           >
// // //             Place Order →
// // //           </button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Menu;
// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";

// // // const Menu = ({ tableSlug }) => {
// // //   const [categories, setCategories] = useState([]);
// // //   const [activeCategoryId, setActiveCategoryId] = useState(null);
// // //   const [items, setItems] = useState([]);
// // //   const [cart, setCart] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   // ✅ Backend Base URL (localhost port 4000)
// // //   const BASE_URL = "http://localhost:4000";
// // //   // 🔄 Use LAN IP if testing on mobile:
// // //   // const BASE_URL = "http://192.168.x.x:4000";

// // //   // ✅ Fetch both categories and items from backend
// // //   useEffect(() => {
// // //     const fetchMenuData = async () => {
// // //       try {
// // //         setLoading(true);
// // //         const [itemsRes, catRes] = await Promise.all([
// // //           axios.get(`${BASE_URL}/api/menu/items`, {
// // //             params: tableSlug ? { tableSlug } : {},
// // //           }),
// // //           axios.get(`${BASE_URL}/api/menu/categories`),
// // //         ]);

// // //         const fetchedItems = itemsRes.data.items || [];
// // //         const fetchedCategories = catRes.data.categories || [];

// // //         setItems(fetchedItems);
// // //         setCategories(fetchedCategories);

// // //         if (fetchedCategories.length > 0) {
// // //           setActiveCategoryId(fetchedCategories[0]._id);
// // //         }
// // //       } catch (error) {
// // //         console.error("❌ Error fetching menu data:", error);
// // //         alert("Failed to load menu data. Please check server connection.");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchMenuData();
// // //   }, [tableSlug]);

// // //   // ✅ Filter items based on active category
// // //   const filteredItems = items.filter((item) => {
// // //     if (!activeCategoryId) return true;
// // //     const catId = item.categoryId?._id || item.categoryId;
// // //     return String(catId) === String(activeCategoryId);
// // //   });

// // //   // ✅ Add item to cart
// // //   const addToCart = (item) => {
// // //     setCart((prev) => {
// // //       const existing = prev.find((c) => String(c._id) === String(item._id));
// // //       if (existing) {
// // //         return prev.map((c) =>
// // //           String(c._id) === String(item._id)
// // //             ? { ...c, quantity: (c.quantity || 1) + 1 }
// // //             : c
// // //         );
// // //       }
// // //       return [...prev, { ...item, quantity: 1 }];
// // //     });
// // //   };

// // //   // ✅ Remove item from cart
// // //   const removeFromCart = (id) =>
// // //     setCart((prev) => prev.filter((c) => String(c._id) !== String(id)));

// // //   // ✅ Total cart amount
// // //   const total = cart.reduce(
// // //     (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
// // //     0
// // //   );

// // //   // ✅ Place order API
// // //   const placeOrder = async () => {
// // //     if (cart.length === 0) {
// // //       alert("🛒 Your cart is empty!");
// // //       return;
// // //     }

// // //     try {
// // //       const res = await axios.post(`${BASE_URL}/api/orders`, {
// // //         tableSlug: tableSlug || "table-1",
// // //         items: cart.map((item) => ({
// // //           menuItemId: item._id,
// // //           qty: item.quantity,
// // //           price: item.price,
// // //         })),
// // //       });

// // //       console.log("✅ Order created successfully:", res.data);
// // //       alert("🎉 Order placed successfully!");
// // //       setCart([]);
// // //     } catch (err) {
// // //       console.error("❌ Order placement failed:", err);
// // //       alert("Failed to place order. Please try again.");
// // //     }
// // //   };

// // //   return (
// // //     <div
// // //       style={{
// // //         minHeight: "100vh",
// // //         backgroundColor: "#fffdf8",
// // //         fontFamily: "'Poppins', sans-serif",
// // //       }}
// // //     >
// // //       {/* 🌟 Header */}
// // //       <header
// // //         style={{
// // //           background: "linear-gradient(90deg, #d4af37, #f1c40f)",
// // //           textAlign: "center",
// // //           color: "white",
// // //           padding: "1.5rem 0",
// // //           boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
// // //         }}
// // //       >
// // //         <h1
// // //           style={{
// // //             fontSize: "2rem",
// // //             fontWeight: "700",
// // //             letterSpacing: "1px",
// // //             textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
// // //           }}
// // //         >
// // //           🍽️ Scan n Dine
// // //         </h1>
// // //         {tableSlug && (
// // //           <p
// // //             style={{
// // //               fontSize: "0.9rem",
// // //               opacity: 0.9,
// // //               marginTop: "0.3rem",
// // //             }}
// // //           >
// // //             Table: <strong>{tableSlug}</strong>
// // //           </p>
// // //         )}
// // //       </header>

// // //       {/* 🌟 Categories */}
// // //       <div
// // //         style={{
// // //           display: "flex",
// // //           overflowX: "auto",
// // //           gap: "10px",
// // //           padding: "1rem 1.2rem",
// // //           borderBottom: "2px solid #f8e5b5",
// // //           backgroundColor: "#fffaf1",
// // //         }}
// // //       >
// // //         {categories.length > 0 ? (
// // //           categories.map((cat) => (
// // //             <button
// // //               key={cat._id}
// // //               onClick={() => setActiveCategoryId(cat._id)}
// // //               style={{
// // //                 padding: "8px 18px",
// // //                 borderRadius: "20px",
// // //                 border:
// // //                   activeCategoryId === cat._id
// // //                     ? "2px solid #b8860b"
// // //                     : "1.5px solid #d9b24d",
// // //                 background:
// // //                   activeCategoryId === cat._id
// // //                     ? "linear-gradient(90deg, #d4af37, #f1c40f)"
// // //                     : "#fff",
// // //                 color: activeCategoryId === cat._id ? "white" : "#a67c00",
// // //                 fontWeight: "600",
// // //                 fontSize: "0.9rem",
// // //                 cursor: "pointer",
// // //                 transition: "0.3s",
// // //                 boxShadow:
// // //                   activeCategoryId === cat._id
// // //                     ? "0 3px 10px rgba(0,0,0,0.2)"
// // //                     : "none",
// // //                 whiteSpace: "nowrap",
// // //               }}
// // //             >
// // //               {cat.name}
// // //             </button>
// // //           ))
// // //         ) : (
// // //           <p style={{ color: "#999" }}>
// // //             {loading ? "Loading categories..." : "No categories found"}
// // //           </p>
// // //         )}
// // //       </div>

// // //       {/* 🌟 Items Grid */}
// // //       <main
// // //         style={{
// // //           display: "grid",
// // //           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// // //           gap: "1.5rem",
// // //           padding: "2rem",
// // //         }}
// // //       >
// // //         {loading ? (
// // //           <p
// // //             style={{
// // //               gridColumn: "1 / -1",
// // //               textAlign: "center",
// // //               color: "#999",
// // //             }}
// // //           >
// // //             Loading menu items...
// // //           </p>
// // //         ) : filteredItems.length > 0 ? (
// // //           filteredItems.map((item) => (
// // //             <div
// // //               key={item._id}
// // //               style={{
// // //                 backgroundColor: "white",
// // //                 borderRadius: "16px",
// // //                 boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
// // //                 overflow: "hidden",
// // //                 border: "1.5px solid #f8e5b5",
// // //                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
// // //               }}
// // //             >
// // //               <img
// // //                 src={item.image || item.imageUrl || "https://via.placeholder.com/150"}
// // //                 alt={item.name}
// // //                 style={{
// // //                   width: "100%",
// // //                   height: "180px",
// // //                   objectFit: "cover",
// // //                 }}
// // //               />
// // //               <div style={{ padding: "1rem" }}>
// // //                 <h2
// // //                   style={{
// // //                     fontSize: "1.1rem",
// // //                     fontWeight: "600",
// // //                     color: "#b8860b",
// // //                     marginBottom: "0.3rem",
// // //                   }}
// // //                 >
// // //                   {item.name}
// // //                 </h2>
// // //                 <p
// // //                   style={{
// // //                     fontSize: "0.85rem",
// // //                     color: "#777",
// // //                     minHeight: "40px",
// // //                     marginBottom: "0.8rem",
// // //                   }}
// // //                 >
// // //                   {item.description || "Deliciously prepared for you."}
// // //                 </p>

// // //                 <div
// // //                   style={{
// // //                     display: "flex",
// // //                     justifyContent: "space-between",
// // //                     alignItems: "center",
// // //                   }}
// // //                 >
// // //                   <span
// // //                     style={{
// // //                       color: "#b8860b",
// // //                       fontWeight: "700",
// // //                       fontSize: "1rem",
// // //                     }}
// // //                   >
// // //                     ₹{item.price}
// // //                   </span>
// // //                   <button
// // //                     onClick={() => addToCart(item)}
// // //                     style={{
// // //                       background: "linear-gradient(90deg, #d4af37, #f1c40f)",
// // //                       color: "white",
// // //                       padding: "6px 12px",
// // //                       borderRadius: "10px",
// // //                       fontWeight: "600",
// // //                       fontSize: "0.85rem",
// // //                       border: "none",
// // //                       cursor: "pointer",
// // //                       boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
// // //                     }}
// // //                   >
// // //                     Add +
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <p
// // //             style={{
// // //               gridColumn: "1 / -1",
// // //               textAlign: "center",
// // //               color: "#999",
// // //               fontSize: "1rem",
// // //             }}
// // //           >
// // //             No items found in this category.
// // //           </p>
// // //         )}
// // //       </main>

// // //       {/* 🌟 Cart Section */}
// // //       {cart.length > 0 && (
// // //         <div
// // //           style={{
// // //             position: "fixed",
// // //             bottom: 0,
// // //             left: 0,
// // //             right: 0,
// // //             background: "white",
// // //             borderTop: "2px solid #f8e5b5",
// // //             boxShadow: "0 -3px 15px rgba(0,0,0,0.1)",
// // //             padding: "1rem 1.5rem",
// // //             display: "flex",
// // //             justifyContent: "space-between",
// // //             alignItems: "center",
// // //             zIndex: 10,
// // //           }}
// // //         >
// // //           <p
// // //             style={{
// // //               color: "#a67c00",
// // //               fontWeight: "600",
// // //               fontSize: "1rem",
// // //             }}
// // //           >
// // //             {cart.length} item(s) | Total:{" "}
// // //             <span style={{ color: "#b8860b", fontWeight: "700" }}>
// // //               ₹{total}
// // //             </span>
// // //           </p>
// // //           <button
// // //             onClick={placeOrder}
// // //             style={{
// // //               background: "linear-gradient(90deg, #d4af37, #f1c40f)",
// // //               color: "white",
// // //               border: "none",
// // //               padding: "10px 20px",
// // //               borderRadius: "10px",
// // //               fontWeight: "600",
// // //               fontSize: "0.95rem",
// // //               cursor: "pointer",
// // //               boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
// // //             }}
// // //           >
// // //             Place Order →
// // //           </button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Menu;
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useParams } from "react-router-dom";

// // const Menu = ({ tableSlug: propTableSlug }) => {
// //   const { slug: routeSlug } = useParams(); // 🧠 Capture from route like /menu/:slug
// //   const tableSlug = propTableSlug || routeSlug || "table-1";

// //   const [categories, setCategories] = useState([]);
// //   const [activeCategoryId, setActiveCategoryId] = useState(null);
// //   const [items, setItems] = useState([]);
// //   const [cart, setCart] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   // ✅ Backend Base URL
// //   const BASE_URL = "http://localhost:4000";
// //   // const BASE_URL = "http://192.168.7.165:4000"; // ← for LAN/mobile testing

// //   // ============================
// //   // 🚀 Fetch menu data
// //   // ============================
// //   useEffect(() => {
// //     const fetchMenuData = async () => {
// //       try {
// //         setLoading(true);

// //         console.log("📩 Fetching menu for:", tableSlug);

// //         const [itemsRes, catRes] = await Promise.all([
// //           axios.get(`${BASE_URL}/api/menu/items`, { params: { tableSlug } }),
// //           axios.get(`${BASE_URL}/api/menu/categories`),
// //         ]);

// //         if (!itemsRes.data.success && !itemsRes.data.items) {
// //           throw new Error("Invalid response from /items API");
// //         }

// //         setItems(itemsRes.data.items || []);
// //         setCategories(catRes.data.categories || []);

// //         if (catRes.data.categories?.length > 0) {
// //           setActiveCategoryId(catRes.data.categories[0]._id);
// //         }
// //       } catch (error) {
// //         console.error("❌ Error fetching menu data:", error);
// //         alert(
// //           "Failed to load menu data. Please check your internet or server connection."
// //         );
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchMenuData();
// //   }, [tableSlug]);

// //   // ============================
// //   // 🛒 Cart Management
// //   // ============================
// //   const filteredItems = items.filter((item) => {
// //     if (!activeCategoryId) return true;
// //     const catId = item.categoryId?._id || item.categoryId;
// //     return String(catId) === String(activeCategoryId);
// //   });

// //   const addToCart = (item) => {
// //     setCart((prev) => {
// //       const existing = prev.find((c) => c._id === item._id);
// //       if (existing) {
// //         return prev.map((c) =>
// //           c._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
// //         );
// //       }
// //       return [...prev, { ...item, quantity: 1 }];
// //     });
// //   };

// //   const removeFromCart = (id) => {
// //     setCart((prev) => prev.filter((c) => c._id !== id));
// //   };

// //   const total = cart.reduce(
// //     (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
// //     0
// //   );

// //   // ============================
// //   // 📦 Place Order
// //   // ============================
// //   const placeOrder = async () => {
// //     if (cart.length === 0) {
// //       alert("🛒 Your cart is empty!");
// //       return;
// //     }

// //     try {
// //       console.log("🧾 Placing order for table:", tableSlug);

// //       const res = await axios.post(`${BASE_URL}/api/orders`, {
// //         tableSlug,
// //         items: cart.map((item) => ({
// //           menuItemId: item._id,
// //           qty: item.quantity,
// //           price: item.price,
// //         })),
// //       });

// //       if (res.data.success) {
// //         console.log("✅ Order created:", res.data);
// //         alert("🎉 Order placed successfully!");
// //         setCart([]);
// //       } else {
// //         alert("⚠️ Failed to place order. Please try again.");
// //       }
// //     } catch (err) {
// //       console.error("❌ Order placement failed:", err);
// //       if (err.response?.data?.error?.includes("Table not found")) {
// //         alert(`Table not found: ${tableSlug}. Please rescan QR or refresh.`);
// //       } else {
// //         alert("Failed to place order. Please try again.");
// //       }
// //     }
// //   };

// //   // ============================
// //   // 🖼️ UI Rendering
// //   // ============================
// //   return (
// //     <div
// //       style={{
// //         minHeight: "100vh",
// //         backgroundColor: "#fffdf8",
// //         fontFamily: "'Poppins', sans-serif",
// //       }}
// //     >
// //       {/* 🌟 Header */}
// //       <header
// //         style={{
// //           background: "linear-gradient(90deg, #d4af37, #f1c40f)",
// //           textAlign: "center",
// //           color: "white",
// //           padding: "1.5rem 0",
// //           boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
// //         }}
// //       >
// //         <h1
// //           style={{
// //             fontSize: "2rem",
// //             fontWeight: "700",
// //             letterSpacing: "1px",
// //             textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
// //           }}
// //         >
// //           🍽️ Scan n Dine
// //         </h1>
// //         {tableSlug && (
// //           <p style={{ fontSize: "0.9rem", opacity: 0.9, marginTop: "0.3rem" }}>
// //             Table: <strong>{tableSlug}</strong>
// //           </p>
// //         )}
// //       </header>

// //       {/* 🌟 Categories */}
// //       <div
// //         style={{
// //           display: "flex",
// //           overflowX: "auto",
// //           gap: "10px",
// //           padding: "1rem 1.2rem",
// //           borderBottom: "2px solid #f8e5b5",
// //           backgroundColor: "#fffaf1",
// //         }}
// //       >
// //         {categories.length > 0 ? (
// //           categories.map((cat) => (
// //             <button
// //               key={cat._id}
// //               onClick={() => setActiveCategoryId(cat._id)}
// //               style={{
// //                 padding: "8px 18px",
// //                 borderRadius: "20px",
// //                 border:
// //                   activeCategoryId === cat._id
// //                     ? "2px solid #b8860b"
// //                     : "1.5px solid #d9b24d",
// //                 background:
// //                   activeCategoryId === cat._id
// //                     ? "linear-gradient(90deg, #d4af37, #f1c40f)"
// //                     : "#fff",
// //                 color: activeCategoryId === cat._id ? "white" : "#a67c00",
// //                 fontWeight: "600",
// //                 fontSize: "0.9rem",
// //                 cursor: "pointer",
// //                 transition: "0.3s",
// //                 boxShadow:
// //                   activeCategoryId === cat._id
// //                     ? "0 3px 10px rgba(0,0,0,0.2)"
// //                     : "none",
// //                 whiteSpace: "nowrap",
// //               }}
// //             >
// //               {cat.name}
// //             </button>
// //           ))
// //         ) : (
// //           <p style={{ color: "#999" }}>
// //             {loading ? "Loading categories..." : "No categories found"}
// //           </p>
// //         )}
// //       </div>

// //       {/* 🌟 Items Grid */}
// //       <main
// //         style={{
// //           display: "grid",
// //           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// //           gap: "1.5rem",
// //           padding: "2rem",
// //         }}
// //       >
// //         {loading ? (
// //           <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "#999" }}>
// //             Loading menu items...
// //           </p>
// //         ) : filteredItems.length > 0 ? (
// //           filteredItems.map((item) => (
// //             <div
// //               key={item._id}
// //               style={{
// //                 backgroundColor: "white",
// //                 borderRadius: "16px",
// //                 boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
// //                 overflow: "hidden",
// //                 border: "1.5px solid #f8e5b5",
// //                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
// //               }}
// //             >
// //               <img
// //                 src={
// //                   item.image || item.imageUrl || "https://via.placeholder.com/150"
// //                 }
// //                 alt={item.name}
// //                 style={{
// //                   width: "100%",
// //                   height: "180px",
// //                   objectFit: "cover",
// //                 }}
// //               />
// //               <div style={{ padding: "1rem" }}>
// //                 <h2
// //                   style={{
// //                     fontSize: "1.1rem",
// //                     fontWeight: "600",
// //                     color: "#b8860b",
// //                     marginBottom: "0.3rem",
// //                   }}
// //                 >
// //                   {item.name}
// //                 </h2>
// //                 <p
// //                   style={{
// //                     fontSize: "0.85rem",
// //                     color: "#777",
// //                     minHeight: "40px",
// //                     marginBottom: "0.8rem",
// //                   }}
// //                 >
// //                   {item.description || "Deliciously prepared for you."}
// //                 </p>

// //                 <div
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     alignItems: "center",
// //                   }}
// //                 >
// //                   <span
// //                     style={{
// //                       color: "#b8860b",
// //                       fontWeight: "700",
// //                       fontSize: "1rem",
// //                     }}
// //                   >
// //                     ₹{item.price}
// //                   </span>
// //                   <button
// //                     onClick={() => addToCart(item)}
// //                     style={{
// //                       background: "linear-gradient(90deg, #d4af37, #f1c40f)",
// //                       color: "white",
// //                       padding: "6px 12px",
// //                       borderRadius: "10px",
// //                       fontWeight: "600",
// //                       fontSize: "0.85rem",
// //                       border: "none",
// //                       cursor: "pointer",
// //                       boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
// //                     }}
// //                   >
// //                     Add +
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p
// //             style={{
// //               gridColumn: "1 / -1",
// //               textAlign: "center",
// //               color: "#999",
// //               fontSize: "1rem",
// //             }}
// //           >
// //             No items found in this category.
// //           </p>
// //         )}
// //       </main>

// //       {/* 🌟 Cart Section */}
// //       {cart.length > 0 && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             bottom: 0,
// //             left: 0,
// //             right: 0,
// //             background: "white",
// //             borderTop: "2px solid #f8e5b5",
// //             boxShadow: "0 -3px 15px rgba(0,0,0,0.1)",
// //             padding: "1rem 1.5rem",
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //             zIndex: 10,
// //           }}
// //         >
// //           <p
// //             style={{
// //               color: "#a67c00",
// //               fontWeight: "600",
// //               fontSize: "1rem",
// //             }}
// //           >
// //             {cart.length} item(s) | Total:{" "}
// //             <span style={{ color: "#b8860b", fontWeight: "700" }}>
// //               ₹{total}
// //             </span>
// //           </p>
// //           <button
// //             onClick={placeOrder}
// //             style={{
// //               background: "linear-gradient(90deg, #d4af37, #f1c40f)",
// //               color: "white",
// //               border: "none",
// //               padding: "10px 20px",
// //               borderRadius: "10px",
// //               fontWeight: "600",
// //               fontSize: "0.95rem",
// //               cursor: "pointer",
// //               boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
// //             }}
// //           >
// //             Place Order →
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Menu;
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useParams } from "react-router-dom";

// // const Menu = ({ tableSlug: propTableSlug }) => {
// //   const { slug: routeSlug } = useParams();
// //   const tableSlug = propTableSlug || routeSlug || "table-1";

// //   const [categories, setCategories] = useState([]);
// //   const [activeCategoryId, setActiveCategoryId] = useState(null);
// //   const [items, setItems] = useState([]);
// //   const [cart, setCart] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const BASE_URL = "http://localhost:4000";

// //   useEffect(() => {
// //     const fetchMenuData = async () => {
// //       try {
// //         setLoading(true);
// //         const [itemsRes, catRes] = await Promise.all([
// //           axios.get(`${BASE_URL}/api/menu/items`, { params: { tableSlug } }),
// //           axios.get(`${BASE_URL}/api/menu/categories`),
// //         ]);

// //         setItems(itemsRes.data.items || []);
// //         setCategories(catRes.data.categories || []);
// //         if (catRes.data.categories?.length > 0) {
// //           setActiveCategoryId(catRes.data.categories[0]._id);
// //         }
// //       } catch (error) {
// //         console.error("❌ Error fetching menu data:", error);
// //         alert("Failed to load menu data. Please check your connection.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchMenuData();
// //   }, [tableSlug]);

// //   const filteredItems = items.filter((item) => {
// //     if (!activeCategoryId) return true;
// //     const catId = item.categoryId?._id || item.categoryId;
// //     return String(catId) === String(activeCategoryId);
// //   });

// //   const addToCart = (item) => {
// //     setCart((prev) => {
// //       const existing = prev.find((c) => c._id === item._id);
// //       if (existing) {
// //         return prev.map((c) =>
// //           c._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
// //         );
// //       }
// //       return [...prev, { ...item, quantity: 1 }];
// //     });
// //   };

// //   const removeFromCart = (id) => {
// //     setCart((prev) => prev.filter((c) => c._id !== id));
// //   };

// //   const total = cart.reduce(
// //     (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
// //     0
// //   );

// //   const placeOrder = async () => {
// //     if (cart.length === 0) {
// //       alert("🛒 Your cart is empty!");
// //       return;
// //     }

// //     try {
// //       const res = await axios.post(`${BASE_URL}/api/orders`, {
// //         tableSlug,
// //         items: cart.map((item) => ({
// //           menuItemId: item._id,
// //           qty: item.quantity,
// //           price: item.price,
// //         })),
// //       });

// //       if (res.data.success) {
// //         alert("🎉 Order placed successfully!");
// //         setCart([]);
// //       } else {
// //         alert("⚠️ Failed to place order. Please try again.");
// //       }
// //     } catch (err) {
// //       console.error("❌ Order placement failed:", err);
// //       alert("Failed to place order. Please try again.");
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         minHeight: "100vh",
// //         backgroundColor: "#fffdf8",
// //         fontFamily: "'Poppins', sans-serif",
// //       }}
// //     >
// //       {/* 🌟 Header */}
// //       <header
// //         style={{
// //           background: "linear-gradient(90deg, #b8860b, #daa520)",
// //           textAlign: "center",
// //           color: "white",
// //           padding: "1.5rem 0",
// //           boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
// //         }}
// //       >
// //         <h1
// //           style={{
// //             fontSize: "2rem",
// //             fontWeight: "700",
// //             letterSpacing: "1px",
// //             textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
// //           }}
// //         >
// //           🍽️ Scan n Dine
// //         </h1>
// //         {tableSlug && (
// //           <p style={{ fontSize: "0.9rem", opacity: 0.9, marginTop: "0.3rem" }}>
// //             Table: <strong>{tableSlug}</strong>
// //           </p>
// //         )}
// //       </header>

// //       {/* 🌟 Categories */}
// //       <div
// //         style={{
// //           display: "flex",
// //           overflowX: "auto",
// //           gap: "10px",
// //           padding: "1rem 1.2rem",
// //           borderBottom: "2px solid #eedc82",
// //           backgroundColor: "#fffaf1",
// //         }}
// //       >
// //         {categories.length > 0 ? (
// //           categories.map((cat) => (
// //             <button
// //               key={cat._id}
// //               onClick={() => setActiveCategoryId(cat._id)}
// //               style={{
// //                 padding: "8px 18px",
// //                 borderRadius: "20px",
// //                 border:
// //                   activeCategoryId === cat._id
// //                     ? "2px solid #b8860b"
// //                     : "1.5px solid #daa520",
// //                 background:
// //                   activeCategoryId === cat._id
// //                     ? "linear-gradient(90deg, #b8860b, #daa520)"
// //                     : "#fff",
// //                 color: activeCategoryId === cat._id ? "white" : "#b8860b",
// //                 fontWeight: "600",
// //                 fontSize: "0.9rem",
// //                 cursor: "pointer",
// //                 transition: "0.3s",
// //                 boxShadow:
// //                   activeCategoryId === cat._id
// //                     ? "0 3px 10px rgba(0,0,0,0.2)"
// //                     : "none",
// //                 whiteSpace: "nowrap",
// //               }}
// //             >
// //               {cat.name}
// //             </button>
// //           ))
// //         ) : (
// //           <p style={{ color: "#999" }}>
// //             {loading ? "Loading categories..." : "No categories found"}
// //           </p>
// //         )}
// //       </div>

// //       {/* 🌟 Items */}
// //       <main
// //         style={{
// //           display: "grid",
// //           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// //           gap: "1.5rem",
// //           padding: "2rem",
// //         }}
// //       >
// //         {loading ? (
// //           <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "#999" }}>
// //             Loading menu items...
// //           </p>
// //         ) : filteredItems.length > 0 ? (
// //           filteredItems.map((item) => (
// //             <div
// //               key={item._id}
// //               style={{
// //                 backgroundColor: "white",
// //                 borderRadius: "16px",
// //                 boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
// //                 overflow: "hidden",
// //                 border: "1.5px solid #eedc82",
// //                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
// //               }}
// //             >
// //               <img
// //                 src={item.image || item.imageUrl || "https://via.placeholder.com/150"}
// //                 alt={item.name}
// //                 style={{
// //                   width: "100%",
// //                   height: "180px",
// //                   objectFit: "cover",
// //                 }}
// //               />
// //               <div style={{ padding: "1rem" }}>
// //                 <h2
// //                   style={{
// //                     fontSize: "1.1rem",
// //                     fontWeight: "600",
// //                     color: "#b8860b",
// //                     marginBottom: "0.3rem",
// //                   }}
// //                 >
// //                   {item.name}
// //                 </h2>
// //                 <p
// //                   style={{
// //                     fontSize: "0.85rem",
// //                     color: "#777",
// //                     minHeight: "40px",
// //                     marginBottom: "0.8rem",
// //                   }}
// //                 >
// //                   {item.description || "Deliciously prepared for you."}
// //                 </p>

// //                 <div
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     alignItems: "center",
// //                   }}
// //                 >
// //                   <span
// //                     style={{
// //                       color: "#b8860b",
// //                       fontWeight: "700",
// //                       fontSize: "1rem",
// //                     }}
// //                   >
// //                     ₹{item.price}
// //                   </span>
// //                   <button
// //                     onClick={() => addToCart(item)}
// //                     style={{
// //                       background: "linear-gradient(90deg, #b8860b, #daa520)",
// //                       color: "white",
// //                       padding: "6px 12px",
// //                       borderRadius: "10px",
// //                       fontWeight: "600",
// //                       fontSize: "0.85rem",
// //                       border: "none",
// //                       cursor: "pointer",
// //                       boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
// //                     }}
// //                   >
// //                     Add +
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p
// //             style={{
// //               gridColumn: "1 / -1",
// //               textAlign: "center",
// //               color: "#999",
// //               fontSize: "1rem",
// //             }}
// //           >
// //             No items found in this category.
// //           </p>
// //         )}
// //       </main>

// //       {/* 🌟 Cart */}
// //       {cart.length > 0 && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             bottom: 0,
// //             left: 0,
// //             right: 0,
// //             background: "white",
// //             borderTop: "2px solid #eedc82",
// //             boxShadow: "0 -3px 15px rgba(0,0,0,0.1)",
// //             padding: "1rem 1.5rem",
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //             zIndex: 10,
// //           }}
// //         >
// //           <p
// //             style={{
// //               color: "#b8860b",
// //               fontWeight: "600",
// //               fontSize: "1rem",
// //             }}
// //           >
// //             {cart.length} item(s) | Total:{" "}
// //             <span style={{ color: "#daa520", fontWeight: "700" }}>₹{total}</span>
// //           </p>
// //           <button
// //             onClick={placeOrder}
// //             style={{
// //               background: "linear-gradient(90deg, #b8860b, #daa520)",
// //               color: "white",
// //               border: "none",
// //               padding: "10px 20px",
// //               borderRadius: "10px",
// //               fontWeight: "600",
// //               fontSize: "0.95rem",
// //               cursor: "pointer",
// //               boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
// //             }}
// //           >
// //             Place Order →
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Menu;
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useParams } from "react-router-dom";

// // const Menu = ({ tableSlug: propTableSlug }) => {
// //   const { slug: routeSlug } = useParams();
// //   const tableSlug = propTableSlug || routeSlug;

// //   const [categories, setCategories] = useState([]);
// //   const [activeCategoryId, setActiveCategoryId] = useState(null);
// //   const [items, setItems] = useState([]);
// //   const [cart, setCart] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   // ✅ Make sure BASE_URL points to your backend
// //   const BASE_URL = "http://192.168.29.218:4000";

// //   useEffect(() => {
// //     const fetchMenuData = async () => {
// //       try {
// //         setLoading(true);
// //         const [itemsRes, catRes] = await Promise.all([
// //           axios.get(`${BASE_URL}/api/menu/items`, { params: { tableSlug } }),
// //           axios.get(`${BASE_URL}/api/menu/categories`),
// //         ]);

// //         setItems(itemsRes.data.items || []);
// //         setCategories(catRes.data.categories || []);
// //         if (catRes.data.categories?.length > 0) {
// //           setActiveCategoryId(catRes.data.categories[0]._id);
// //         }
// //       } catch (error) {
// //         console.error("❌ Error fetching menu data:", error);
// //         alert("Failed to load menu data. Please check your connection.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchMenuData();
// //   }, [tableSlug]);

// //   const filteredItems = items.filter((item) => {
// //     if (!activeCategoryId) return true;
// //     const catId = item.categoryId?._id || item.categoryId;
// //     return String(catId) === String(activeCategoryId);
// //   });

// //   const addToCart = (item) => {
// //     setCart((prev) => {
// //       const existing = prev.find((c) => c._id === item._id);
// //       if (existing) {
// //         return prev.map((c) =>
// //           c._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
// //         );
// //       }
// //       return [...prev, { ...item, quantity: 1 }];
// //     });
// //   };

// //   const removeFromCart = (id) => {
// //     setCart((prev) => prev.filter((c) => c._id !== id));
// //   };

// //   const total = cart.reduce(
// //     (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
// //     0
// //   );

// //   const placeOrder = async () => {
// //     if (cart.length === 0) {
// //       alert("🛒 Your cart is empty!");
// //       return;
// //     }

// //     try {
// //       const res = await axios.post(`${BASE_URL}/api/orders`, {
// //         tableSlug,
// //         items: cart.map((item) => ({
// //           menuItemId: item._id,
// //           qty: item.quantity,
// //           price: item.price,
// //         })),
// //       });

// //       if (res.data.success) {
// //         alert("🎉 Order placed successfully!");
// //         setCart([]);
// //       } else {
// //         alert("⚠️ Failed to place order. Please try again.");
// //       }
// //     } catch (err) {
// //       console.error("❌ Order placement failed:", err);
// //       alert("Failed to place order. Please try again.");
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         minHeight: "100vh",
// //         backgroundColor: "#fffdf8",
// //         fontFamily: "'Poppins', sans-serif",
// //       }}
// //     >
// //       {/* 🌟 Header */}
// //       <header
// //         style={{
// //           background: "linear-gradient(90deg, #b8860b, #daa520)",
// //           textAlign: "center",
// //           color: "white",
// //           padding: "1.5rem 0",
// //           boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
// //         }}
// //       >
// //         <h1
// //           style={{
// //             fontSize: "2rem",
// //             fontWeight: "700",
// //             letterSpacing: "1px",
// //             textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
// //           }}
// //         >
// //           🍽️ Scan n Dine
// //         </h1>
// //         {tableSlug && (
// //           <p style={{ fontSize: "0.9rem", opacity: 0.9, marginTop: "0.3rem" }}>
// //             Table: <strong>{tableSlug}</strong>
// //           </p>
// //         )}
// //       </header>

// //       {/* 🌟 Categories */}
// //       <div
// //         style={{
// //           display: "flex",
// //           overflowX: "auto",
// //           gap: "10px",
// //           padding: "1rem 1.2rem",
// //           borderBottom: "2px solid #eedc82",
// //           backgroundColor: "#fffaf1",
// //         }}
// //       >
// //         {categories.length > 0 ? (
// //           categories.map((cat) => (
// //             <button
// //               key={cat._id}
// //               onClick={() => setActiveCategoryId(cat._id)}
// //               style={{
// //                 padding: "8px 18px",
// //                 borderRadius: "20px",
// //                 border:
// //                   activeCategoryId === cat._id
// //                     ? "2px solid #b8860b"
// //                     : "1.5px solid #daa520",
// //                 background:
// //                   activeCategoryId === cat._id
// //                     ? "linear-gradient(90deg, #b8860b, #daa520)"
// //                     : "#fff",
// //                 color: activeCategoryId === cat._id ? "white" : "#b8860b",
// //                 fontWeight: "600",
// //                 fontSize: "0.9rem",
// //                 cursor: "pointer",
// //                 transition: "0.3s",
// //                 boxShadow:
// //                   activeCategoryId === cat._id
// //                     ? "0 3px 10px rgba(0,0,0,0.2)"
// //                     : "none",
// //                 whiteSpace: "nowrap",
// //               }}
// //             >
// //               {cat.name}
// //             </button>
// //           ))
// //         ) : (
// //           <p style={{ color: "#999" }}>
// //             {loading ? "Loading categories..." : "No categories found"}
// //           </p>
// //         )}
// //       </div>

// //       {/* 🌟 Items */}
// //       <main
// //         style={{
// //           display: "grid",
// //           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// //           gap: "1.5rem",
// //           padding: "2rem",
// //         }}
// //       >
// //         {loading ? (
// //           <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "#999" }}>
// //             Loading menu items...
// //           </p>
// //         ) : filteredItems.length > 0 ? (
// //           filteredItems.map((item) => (
// //             <div
// //               key={item._id}
// //               style={{
// //                 backgroundColor: "white",
// //                 borderRadius: "16px",
// //                 boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
// //                 overflow: "hidden",
// //                 border: "1.5px solid #eedc82",
// //                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
// //               }}
// //             >
// //               {/* ✅ Updated for multer images */}
// //               {/* <img
// //                 src={
// //                   item.image
// //                     ? `${BASE_URL}/uploads/${item.image}` // ✅ multer path
// //                     : "https://via.placeholder.com/150"
// //                 }
// //                 alt={item.name}
// //                 style={{
// //                   width: "100%",
// //                   height: "180px",
// //                   objectFit: "cover",
// //                 }}
// //               /> */}
// //               {/* <img
// //                 src={
// //                 item.image
// //              ? `${BASE_URL}${item.image.startsWith("/") ? item.image : `/uploads/${item.image}`}`
// //              : "https://via.placeholder.com/150"
// //               }
// //               alt={item.name}
// //                style={{
// //                width: "100%",
// //                height: "180px",
// //                objectFit: "cover",
// //           }}
// // /> */}           <img
// //   src={`http://192.168.29.218:4000${item.image}`}
// //   alt={item.name}
// //   style={{ width: "120px", height: "120px", borderRadius: "8px" }}
// // />


// //               <div style={{ padding: "1rem" }}>
// //                 <h2
// //                   style={{
// //                     fontSize: "1.1rem",
// //                     fontWeight: "600",
// //                     color: "#b8860b",
// //                     marginBottom: "0.3rem",
// //                   }}
// //                 >
// //                   {item.name}
// //                 </h2>
// //                 <p
// //                   style={{
// //                     fontSize: "0.85rem",
// //                     color: "#777",
// //                     minHeight: "40px",
// //                     marginBottom: "0.8rem",
// //                   }}
// //                 >
// //                   {item.description || "Deliciously prepared for you."}
// //                 </p>

// //                 <div
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     alignItems: "center",
// //                   }}
// //                 >
// //                   <span
// //                     style={{
// //                       color: "#b8860b",
// //                       fontWeight: "700",
// //                       fontSize: "1rem",
// //                     }}
// //                   >
// //                     ₹{item.price}
// //                   </span>
// //                   <button
// //                     onClick={() => addToCart(item)}
// //                     style={{
// //                       background: "linear-gradient(90deg, #b8860b, #daa520)",
// //                       color: "white",
// //                       padding: "6px 12px",
// //                       borderRadius: "10px",
// //                       fontWeight: "600",
// //                       fontSize: "0.85rem",
// //                       border: "none",
// //                       cursor: "pointer",
// //                       boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
// //                     }}
// //                   >
// //                     Add +
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p
// //             style={{
// //               gridColumn: "1 / -1",
// //               textAlign: "center",
// //               color: "#999",
// //               fontSize: "1rem",
// //             }}
// //           >
// //             No items found in this category.
// //           </p>
// //         )}
// //       </main>

// //       {/* 🌟 Cart */}
// //       {cart.length > 0 && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             bottom: 0,
// //             left: 0,
// //             right: 0,
// //             background: "white",
// //             borderTop: "2px solid #eedc82",
// //             boxShadow: "0 -3px 15px rgba(0,0,0,0.1)",
// //             padding: "1rem 1.5rem",
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //             zIndex: 10,
// //           }}
// //         >
// //           <p
// //             style={{
// //               color: "#b8860b",
// //               fontWeight: "600",
// //               fontSize: "1rem",
// //             }}
// //           >
// //             {cart.length} item(s) | Total:{" "}
// //             <span style={{ color: "#daa520", fontWeight: "700" }}>₹{total}</span>
// //           </p>
// //           <button
// //             onClick={placeOrder}
// //             style={{
// //               background: "linear-gradient(90deg, #b8860b, #daa520)",
// //               color: "white",
// //               border: "none",
// //               padding: "10px 20px",
// //               borderRadius: "10px",
// //               fontWeight: "600",
// //               fontSize: "0.95rem",
// //               cursor: "pointer",
// //               boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
// //             }}
// //           >
// //             Place Order →
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Menu;
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useParams } from "react-router-dom";

// // const Menu = ({ tableSlug: propTableSlug }) => {
// //   const { slug: routeSlug } = useParams();
// //   const tableSlug = propTableSlug || routeSlug;

// //   const [categories, setCategories] = useState([]);
// //   const [activeCategoryId, setActiveCategoryId] = useState(null);
// //   const [items, setItems] = useState([]);
// //   const [cart, setCart] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   // ✅ Use your system IP (same as backend)
// //   const BASE_URL = "http://192.168.29.218:4000";

// //   useEffect(() => {
// //     const fetchMenuData = async () => {
// //       try {
// //         setLoading(true);
// //         const [itemsRes, catRes] = await Promise.all([
// //           axios.get(`${BASE_URL}/api/menu/items`, { params: { tableSlug } }),
// //           axios.get(`${BASE_URL}/api/menu/categories`),
// //         ]);

// //         setItems(itemsRes.data.items || []);
// //         setCategories(catRes.data.categories || []);
// //         if (catRes.data.categories?.length > 0) {
// //           setActiveCategoryId(catRes.data.categories[0]._id);
// //         }
// //       } catch (error) {
// //         console.error("❌ Error fetching menu data:", error);
// //         alert("Failed to load menu data. Please check your connection.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchMenuData();
// //   }, [tableSlug]);

// //   const filteredItems = items.filter((item) => {
// //     if (!activeCategoryId) return true;
// //     const catId = item.categoryId?._id || item.categoryId;
// //     return String(catId) === String(activeCategoryId);
// //   });

// //   const addToCart = (item) => {
// //     setCart((prev) => {
// //       const existing = prev.find((c) => c._id === item._id);
// //       if (existing) {
// //         return prev.map((c) =>
// //           c._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
// //         );
// //       }
// //       return [...prev, { ...item, quantity: 1 }];
// //     });
// //   };

// //   const removeFromCart = (id) => {
// //     setCart((prev) => prev.filter((c) => c._id !== id));
// //   };

// //   const total = cart.reduce(
// //     (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
// //     0
// //   );

// //   // ✅ FIXED: order data format corrected
// //   const placeOrder = async () => {
// //     if (cart.length === 0) {
// //       alert("🛒 Your cart is empty!");
// //       return;
// //     }

// //     const orderData = {
// //       tableSlug,
// //       items: cart.map((item) => ({
// //         itemId: item._id,        // ✅ renamed from menuItemId
// //         quantity: item.quantity, // ✅ renamed from qty
// //         price: item.price,
// //       })),
// //     };

// //     console.log("📦 Sending Order Data:", orderData);

// //     try {
// //       const res = await axios.post(`${BASE_URL}/api/orders`, orderData);

// //       if (res.data.success) {
// //         alert("🎉 Order placed successfully!");
// //         setCart([]);
// //       } else {
// //         alert("⚠️ Failed to place order. Please try again.");
// //       }
// //     } catch (err) {
// //       console.error("❌ Order placement failed:", err);
// //       alert("Failed to place order. Please try again.");
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         minHeight: "100vh",
// //         backgroundColor: "#fffdf8",
// //         fontFamily: "'Poppins', sans-serif",
// //       }}
// //     >
// //       {/* 🌟 Header */}
// //       <header
// //         style={{
// //           background: "linear-gradient(90deg, #b8860b, #daa520)",
// //           textAlign: "center",
// //           color: "white",
// //           padding: "1.5rem 0",
// //           boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
// //         }}
// //       >
// //         <h1
// //           style={{
// //             fontSize: "2rem",
// //             fontWeight: "700",
// //             letterSpacing: "1px",
// //             textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
// //           }}
// //         >
// //           🍽️ Scan n Dine
// //         </h1>
// //         {tableSlug && (
// //           <p style={{ fontSize: "0.9rem", opacity: 0.9, marginTop: "0.3rem" }}>
// //             Table: <strong>{tableSlug}</strong>
// //           </p>
// //         )}
// //       </header>

// //       {/* 🌟 Categories */}
// //       <div
// //         style={{
// //           display: "flex",
// //           overflowX: "auto",
// //           gap: "10px",
// //           padding: "1rem 1.2rem",
// //           borderBottom: "2px solid #eedc82",
// //           backgroundColor: "#fffaf1",
// //         }}
// //       >
// //         {categories.length > 0 ? (
// //           categories.map((cat) => (
// //             <button
// //               key={cat._id}
// //               onClick={() => setActiveCategoryId(cat._id)}
// //               style={{
// //                 padding: "8px 18px",
// //                 borderRadius: "20px",
// //                 border:
// //                   activeCategoryId === cat._id
// //                     ? "2px solid #b8860b"
// //                     : "1.5px solid #daa520",
// //                 background:
// //                   activeCategoryId === cat._id
// //                     ? "linear-gradient(90deg, #b8860b, #daa520)"
// //                     : "#fff",
// //                 color: activeCategoryId === cat._id ? "white" : "#b8860b",
// //                 fontWeight: "600",
// //                 fontSize: "0.9rem",
// //                 cursor: "pointer",
// //                 transition: "0.3s",
// //                 boxShadow:
// //                   activeCategoryId === cat._id
// //                     ? "0 3px 10px rgba(0,0,0,0.2)"
// //                     : "none",
// //                 whiteSpace: "nowrap",
// //               }}
// //             >
// //               {cat.name}
// //             </button>
// //           ))
// //         ) : (
// //           <p style={{ color: "#999" }}>
// //             {loading ? "Loading categories..." : "No categories found"}
// //           </p>
// //         )}
// //       </div>

// //       {/* 🌟 Items */}
// //       <main
// //         style={{
// //           display: "grid",
// //           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// //           gap: "1.5rem",
// //           padding: "2rem",
// //         }}
// //       >
// //         {loading ? (
// //           <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "#999" }}>
// //             Loading menu items...
// //           </p>
// //         ) : filteredItems.length > 0 ? (
// //           filteredItems.map((item) => (
// //             <div
// //               key={item._id}
// //               style={{
// //                 backgroundColor: "white",
// //                 borderRadius: "16px",
// //                 boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
// //                 overflow: "hidden",
// //                 border: "1.5px solid #eedc82",
// //                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
// //               }}
// //             >
// //               <img
// //                 src={`http://192.168.29.218:4000${item.image}`}
// //                 alt={item.name}
// //                 style={{ width: "120px", height: "120px", borderRadius: "8px" }}
// //               />

// //               <div style={{ padding: "1rem" }}>
// //                 <h2
// //                   style={{
// //                     fontSize: "1.1rem",
// //                     fontWeight: "600",
// //                     color: "#b8860b",
// //                     marginBottom: "0.3rem",
// //                   }}
// //                 >
// //                   {item.name}
// //                 </h2>
// //                 <p
// //                   style={{
// //                     fontSize: "0.85rem",
// //                     color: "#777",
// //                     minHeight: "40px",
// //                     marginBottom: "0.8rem",
// //                   }}
// //                 >
// //                   {item.description || "Deliciously prepared for you."}
// //                 </p>

// //                 <div
// //                   style={{
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     alignItems: "center",
// //                   }}
// //                 >
// //                   <span
// //                     style={{
// //                       color: "#b8860b",
// //                       fontWeight: "700",
// //                       fontSize: "1rem",
// //                     }}
// //                   >
// //                     ₹{item.price}
// //                   </span>
// //                   <button
// //                     onClick={() => addToCart(item)}
// //                     style={{
// //                       background: "linear-gradient(90deg, #b8860b, #daa520)",
// //                       color: "white",
// //                       padding: "6px 12px",
// //                       borderRadius: "10px",
// //                       fontWeight: "600",
// //                       fontSize: "0.85rem",
// //                       border: "none",
// //                       cursor: "pointer",
// //                       boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
// //                     }}
// //                   >
// //                     Add +
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p
// //             style={{
// //               gridColumn: "1 / -1",
// //               textAlign: "center",
// //               color: "#999",
// //               fontSize: "1rem",
// //             }}
// //           >
// //             No items found in this category.
// //           </p>
// //         )}
// //       </main>

// //       {/* 🌟 Cart */}
// //       {cart.length > 0 && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             bottom: 0,
// //             left: 0,
// //             right: 0,
// //             background: "white",
// //             borderTop: "2px solid #eedc82",
// //             boxShadow: "0 -3px 15px rgba(0,0,0,0.1)",
// //             padding: "1rem 1.5rem",
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //             zIndex: 10,
// //           }}
// //         >
// //           <p
// //             style={{
// //               color: "#b8860b",
// //               fontWeight: "600",
// //               fontSize: "1rem",
// //             }}
// //           >
// //             {cart.length} item(s) | Total:{" "}
// //             <span style={{ color: "#daa520", fontWeight: "700" }}>₹{total}</span>
// //           </p>
// //           <button
// //             onClick={placeOrder}
// //             style={{
// //               background: "linear-gradient(90deg, #b8860b, #daa520)",
// //               color: "white",
// //               border: "none",
// //               padding: "10px 20px",
// //               borderRadius: "10px",
// //               fontWeight: "600",
// //               fontSize: "0.95rem",
// //               cursor: "pointer",
// //               boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
// //             }}
// //           >
// //             Place Order →
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Menu;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const Menu = ({ tableSlug: propTableSlug }) => {
//   // ✅ Correct param name
//   const { tableSlug: routeSlug } = useParams();
//   const tableSlug = propTableSlug || routeSlug;

//   const [categories, setCategories] = useState([]);
//   const [activeCategoryId, setActiveCategoryId] = useState(null);
//   const [items, setItems] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Use your LAN IP (same as backend)
//   const BASE_URL = "http://192.168.29.218:4000";

//   useEffect(() => {
//     const fetchMenuData = async () => {
//       try {
//         if (!tableSlug) {
//           console.warn("⚠️ No tableSlug found in URL");
//           return;
//         }

//         setLoading(true);
//         const [itemsRes, catRes] = await Promise.all([
//           axios.get(`${BASE_URL}/api/menu/items`, { params: { tableSlug } }),
//           axios.get(`${BASE_URL}/api/menu/categories`),
//         ]);

//         setItems(itemsRes.data.items || []);
//         setCategories(catRes.data.categories || []);
//         if (catRes.data.categories?.length > 0) {
//           setActiveCategoryId(catRes.data.categories[0]._id);
//         }
//       } catch (error) {
//         console.error("❌ Error fetching menu data:", error);
//         alert("Failed to load menu data. Please check your connection.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMenuData();
//   }, [tableSlug]);

//   const filteredItems = items.filter((item) => {
//     if (!activeCategoryId) return true;
//     const catId = item.categoryId?._id || item.categoryId;
//     return String(catId) === String(activeCategoryId);
//   });

//   const addToCart = (item) => {
//     setCart((prev) => {
//       const existing = prev.find((c) => c._id === item._id);
//       if (existing) {
//         return prev.map((c) =>
//           c._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
//         );
//       }
//       return [...prev, { ...item, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart((prev) => prev.filter((c) => c._id !== id));
//   };

//   const total = cart.reduce(
//     (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
//     0
//   );

//   // ✅ Correct order payload
//   const placeOrder = async () => {
//     if (cart.length === 0) {
//       alert("🛒 Your cart is empty!");
//       return;
//     }

//     if (!tableSlug) {
//       alert("❌ Table not identified. Please scan again.");
//       return;
//     }

//     const orderData = {
//       tableSlug,
//       items: cart.map((item) => ({
//         itemId: item._id,
//         quantity: item.quantity,
//         price: item.price,
//       })),
//     };

//     console.log("📦 Sending Order Data:", orderData);

//     try {
//       const res = await axios.post(`${BASE_URL}/api/orders`, orderData);

//       if (res.data.success) {
//         alert("🎉 Order placed successfully!");
//         setCart([]);
//       } else {
//         alert("⚠️ Failed to place order. Please try again.");
//       }
//     } catch (err) {
//       console.error("❌ Order placement failed:", err);
//       alert("Failed to place order. Please try again.");
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "#fffdf8",
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       {/* 🌟 Header */}
//       <header
//         style={{
//           background: "linear-gradient(90deg, #b8860b, #daa520)",
//           textAlign: "center",
//           color: "white",
//           padding: "1.5rem 0",
//           boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "2rem",
//             fontWeight: "700",
//             letterSpacing: "1px",
//             textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//           }}
//         >
//           🍽️ Scan n Dine
//         </h1>
//         {tableSlug && (
//           <p style={{ fontSize: "0.9rem", opacity: 0.9, marginTop: "0.3rem" }}>
//             Table: <strong>{tableSlug}</strong>
//           </p>
//         )}
//       </header>

//       {/* 🌟 Categories */}
//       <div
//         style={{
//           display: "flex",
//           overflowX: "auto",
//           gap: "10px",
//           padding: "1rem 1.2rem",
//           borderBottom: "2px solid #eedc82",
//           backgroundColor: "#fffaf1",
//         }}
//       >
//         {categories.length > 0 ? (
//           categories.map((cat) => (
//             <button
//               key={cat._id}
//               onClick={() => setActiveCategoryId(cat._id)}
//               style={{
//                 padding: "8px 18px",
//                 borderRadius: "20px",
//                 border:
//                   activeCategoryId === cat._id
//                     ? "2px solid #b8860b"
//                     : "1.5px solid #daa520",
//                 background:
//                   activeCategoryId === cat._id
//                     ? "linear-gradient(90deg, #b8860b, #daa520)"
//                     : "#fff",
//                 color: activeCategoryId === cat._id ? "white" : "#b8860b",
//                 fontWeight: "600",
//                 fontSize: "0.9rem",
//                 cursor: "pointer",
//                 transition: "0.3s",
//                 boxShadow:
//                   activeCategoryId === cat._id
//                     ? "0 3px 10px rgba(0,0,0,0.2)"
//                     : "none",
//                 whiteSpace: "nowrap",
//               }}
//             >
//               {cat.name}
//             </button>
//           ))
//         ) : (
//           <p style={{ color: "#999" }}>
//             {loading ? "Loading categories..." : "No categories found"}
//           </p>
//         )}
//       </div>

//       {/* 🌟 Items */}
//       <main
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//           gap: "1.5rem",
//           padding: "2rem",
//         }}
//       >
//         {loading ? (
//           <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "#999" }}>
//             Loading menu items...
//           </p>
//         ) : filteredItems.length > 0 ? (
//           filteredItems.map((item) => (
//             <div
//               key={item._id}
//               style={{
//                 backgroundColor: "white",
//                 borderRadius: "16px",
//                 boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//                 overflow: "hidden",
//                 border: "1.5px solid #eedc82",
//               }}
//             >
//               <img
//                 src={`http://192.168.29.218:4000${item.image}`}
//                 alt={item.name}
//                 style={{ width: "100%", height: "150px", objectFit: "cover" }}
//               />

//               <div style={{ padding: "1rem" }}>
//                 <h2
//                   style={{
//                     fontSize: "1.1rem",
//                     fontWeight: "600",
//                     color: "#b8860b",
//                     marginBottom: "0.3rem",
//                   }}
//                 >
//                   {item.name}
//                 </h2>
//                 <p
//                   style={{
//                     fontSize: "0.85rem",
//                     color: "#777",
//                     minHeight: "40px",
//                     marginBottom: "0.8rem",
//                   }}
//                 >
//                   {item.description || "Deliciously prepared for you."}
//                 </p>

//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span
//                     style={{
//                       color: "#b8860b",
//                       fontWeight: "700",
//                       fontSize: "1rem",
//                     }}
//                   >
//                     ₹{item.price}
//                   </span>
//                   <button
//                     onClick={() => addToCart(item)}
//                     style={{
//                       background: "linear-gradient(90deg, #b8860b, #daa520)",
//                       color: "white",
//                       padding: "6px 12px",
//                       borderRadius: "10px",
//                       fontWeight: "600",
//                       fontSize: "0.85rem",
//                       border: "none",
//                       cursor: "pointer",
//                       boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
//                     }}
//                   >
//                     Add +
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p
//             style={{
//               gridColumn: "1 / -1",
//               textAlign: "center",
//               color: "#999",
//               fontSize: "1rem",
//             }}
//           >
//             No items found in this category.
//           </p>
//         )}
//       </main>

//       {/* 🌟 Cart */}
//       {cart.length > 0 && (
//         <div
//           style={{
//             position: "fixed",
//             bottom: 0,
//             left: 0,
//             right: 0,
//             background: "white",
//             borderTop: "2px solid #eedc82",
//             boxShadow: "0 -3px 15px rgba(0,0,0,0.1)",
//             padding: "1rem 1.5rem",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             zIndex: 10,
//           }}
//         >
//           <p
//             style={{
//               color: "#b8860b",
//               fontWeight: "600",
//               fontSize: "1rem",
//             }}
//           >
//             {cart.length} item(s) | Total:{" "}
//             <span style={{ color: "#daa520", fontWeight: "700" }}>₹{total}</span>
//           </p>
//           <button
//             onClick={placeOrder}
//             style={{
//               background: "linear-gradient(90deg, #b8860b, #daa520)",
//               color: "white",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "10px",
//               fontWeight: "600",
//               fontSize: "0.95rem",
//               cursor: "pointer",
//               boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//             }}
//           >
//             Place Order →
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Menu;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const Menu = () => {
//   const { tableSlug } = useParams(); // ✅ Correct param name
//   const [categories, setCategories] = useState([]);
//   const [activeCategoryId, setActiveCategoryId] = useState(null);
//   const [items, setItems] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Use your system IP
//   const BASE_URL = "http://10.21.218.69:4000";

//   useEffect(() => {
//     if (!tableSlug) {
//       console.warn("⚠️ No tableSlug found in URL");
//       return;
//     }

//     const fetchMenuData = async () => {
//       try {
//         setLoading(true);
//         const [itemsRes, catRes] = await Promise.all([
//           axios.get(`${BASE_URL}/api/menu/items`, { params: { tableSlug } }),
//           axios.get(`${BASE_URL}/api/menu/categories`),
//         ]);

//         setItems(itemsRes.data.items || []);
//         setCategories(catRes.data.categories || []);
//         if (catRes.data.categories?.length > 0) {
//           setActiveCategoryId(catRes.data.categories[0]._id);
//         }
//       } catch (error) {
//         console.error("❌ Error fetching menu data:", error);
//         alert("Failed to load menu data. Please check your connection.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMenuData();
//   }, [tableSlug]);

//   const filteredItems = items.filter((item) => {
//     if (!activeCategoryId) return true;
//     const catId = item.categoryId?._id || item.categoryId;
//     return String(catId) === String(activeCategoryId);
//   });

//   const addToCart = (item) => {
//     setCart((prev) => {
//       const existing = prev.find((c) => c._id === item._id);
//       if (existing) {
//         return prev.map((c) =>
//           c._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
//         );
//       }
//       return [...prev, { ...item, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart((prev) => prev.filter((c) => c._id !== id));
//   };

//   const total = cart.reduce(
//     (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
//     0
//   );

//   // ✅ Fixed: Correct order structure
//   const placeOrder = async () => {
//     if (!tableSlug) {
//       alert("⚠️ No table selected. Please scan QR again.");
//       return;
//     }

//     if (cart.length === 0) {
//       alert("🛒 Your cart is empty!");
//       return;
//     }

//     const orderData = {
//       tableSlug,
//       items: cart.map((item) => ({
//         menuItemId: item._id, // ✅ matches backend schema
//         qty: item.quantity,
//         price: item.price,
//       })),
//     };

//     console.log("📦 Sending Order Data:", orderData);

//     try {
//       const res = await axios.post(`${BASE_URL}/api/orders`, orderData);
//       if (res.data.success) {
//         alert("🎉 Order placed successfully!");
//         setCart([]);
//       } else {
//         alert("⚠️ Failed to place order. Please try again.");
//       }
//     } catch (err) {
//       console.error("❌ Order placement failed:", err);
//       alert("Failed to place order. Please try again.");
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "#fffdf8",
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       {/* 🌟 Header */}
//       <header
//         style={{
//           background: "linear-gradient(90deg, #b8860b, #daa520)",
//           textAlign: "center",
//           color: "white",
//           padding: "1.5rem 0",
//           boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "2rem",
//             fontWeight: "700",
//             letterSpacing: "1px",
//             textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
//           }}
//         >
//           🍽️ Scan n Dine
//         </h1>
//         {tableSlug && (
//           <p style={{ fontSize: "0.9rem", opacity: 0.9, marginTop: "0.3rem" }}>
//             Table: <strong>{tableSlug}</strong>
//           </p>
//         )}
//       </header>

//       {/* 🌟 Categories */}
//       <div
//         style={{
//           display: "flex",
//           overflowX: "auto",
//           gap: "10px",
//           padding: "1rem 1.2rem",
//           borderBottom: "2px solid #eedc82",
//           backgroundColor: "#fffaf1",
//         }}
//       >
//         {categories.length > 0 ? (
//           categories.map((cat) => (
//             <button
//               key={cat._id}
//               onClick={() => setActiveCategoryId(cat._id)}
//               style={{
//                 padding: "8px 18px",
//                 borderRadius: "20px",
//                 border:
//                   activeCategoryId === cat._id
//                     ? "2px solid #b8860b"
//                     : "1.5px solid #daa520",
//                 background:
//                   activeCategoryId === cat._id
//                     ? "linear-gradient(90deg, #b8860b, #daa520)"
//                     : "#fff",
//                 color: activeCategoryId === cat._id ? "white" : "#b8860b",
//                 fontWeight: "600",
//                 fontSize: "0.9rem",
//                 cursor: "pointer",
//                 transition: "0.3s",
//                 boxShadow:
//                   activeCategoryId === cat._id
//                     ? "0 3px 10px rgba(0,0,0,0.2)"
//                     : "none",
//                 whiteSpace: "nowrap",
//               }}
//             >
//               {cat.name}
//             </button>
//           ))
//         ) : (
//           <p style={{ color: "#999" }}>
//             {loading ? "Loading categories..." : "No categories found"}
//           </p>
//         )}
//       </div>

//       {/* 🌟 Items */}
//       <main
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//           gap: "1.5rem",
//           padding: "2rem",
//         }}
//       >
//         {loading ? (
//           <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "#999" }}>
//             Loading menu items...
//           </p>
//         ) : filteredItems.length > 0 ? (
//           filteredItems.map((item) => (
//             <div
//               key={item._id}
//               style={{
//                 backgroundColor: "white",
//                 borderRadius: "16px",
//                 boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//                 overflow: "hidden",
//                 border: "1.5px solid #eedc82",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//               }}
//             >
//               {/* <img
//                 src={`${BASE_URL}${item.image}`}
//                 alt={item.name}
//                 style={{ width: "120px", height: "120px", borderRadius: "8px" }}
//               /> */}
//               <div
//                 style={{
//                   width: "100%",
//                   height: "180px",
//                   overflow: "hidden",
//                   backgroundColor: "#fafafa",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               ></div>
//               <img
//   src={
//     item.image
//       ? ${BASE_URL}${item.image}
//       : "https://via.placeholder.com/250x180?text=No+Image"
//   }
//   alt={item.name}
//   style={{
//     maxWidth: "100%",
//     maxHeight: "100%",
//     objectFit: "contain",
//     borderBottom: "1px solid #eee",
//     borderTopLeftRadius: "16px",
//     borderTopRightRadius: "16px",
//     display: "block",
//     margin: "0 auto",
//     backgroundColor: "#faf8f0",
//   }}


//               <div style={{ padding: "1rem" }}>
//                 <h2
//                   style={{
//                     fontSize: "1.1rem",
//                     fontWeight: "600",
//                     color: "#b8860b",
//                     marginBottom: "0.3rem",
//                   }}
//                 >
//                   {item.name}
//                 </h2>
//                 <p
//                   style={{
//                     fontSize: "0.85rem",
//                     color: "#777",
//                     minHeight: "40px",
//                     marginBottom: "0.8rem",
//                   }}
//                 >
//                   {item.description || "Deliciously prepared for you."}
//                 </p>

//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span
//                     style={{
//                       color: "#b8860b",
//                       fontWeight: "700",
//                       fontSize: "1rem",
//                     }}
//                   >
//                     ₹{item.price}
//                   </span>
//                   <button
//                     onClick={() => addToCart(item)}
//                     style={{
//                       background: "linear-gradient(90deg, #b8860b, #daa520)",
//                       color: "white",
//                       padding: "6px 12px",
//                       borderRadius: "10px",
//                       fontWeight: "600",
//                       fontSize: "0.85rem",
//                       border: "none",
//                       cursor: "pointer",
//                       boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
//                     }}
//                   >
//                     Add +
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p
//             style={{
//               gridColumn: "1 / -1",
//               textAlign: "center",
//               color: "#999",
//               fontSize: "1rem",
//             }}
//           >
//             No items found in this category.
//           </p>
//         )}
//       </main>

//       {/* 🌟 Cart */}
//       {cart.length > 0 && (
//         <div
//           style={{
//             position: "fixed",
//             bottom: 0,
//             left: 0,
//             right: 0,
//             background: "white",
//             borderTop: "2px solid #eedc82",
//             boxShadow: "0 -3px 15px rgba(0,0,0,0.1)",
//             padding: "1rem 1.5rem",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             zIndex: 10,
//           }}
//         >
//           <p
//             style={{
//               color: "#b8860b",
//               fontWeight: "600",
//               fontSize: "1rem",
//             }}
//           >
//             {cart.length} item(s) | Total:{" "}
//             <span style={{ color: "#daa520", fontWeight: "700" }}>₹{total}</span>
//           </p>
//           <button
//             onClick={placeOrder}
//             style={{
//               background: "linear-gradient(90deg, #b8860b, #daa520)",
//               color: "white",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "10px",
//               fontWeight: "600",
//               fontSize: "0.95rem",
//               cursor: "pointer",
//               boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//             }}
//           >
//             Place Order →
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Menu;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Menu = () => {
  const { tableSlug } = useParams();
  const [categories, setCategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Your backend IP (change only if network IP changes)
  const BASE_URL = "http://10.21.218.69:4000";

  // ✅ Fetch categories & menu items
  useEffect(() => {
    if (!tableSlug) return console.warn("⚠️ No tableSlug found in URL");

    const fetchMenuData = async () => {
      try {
        setLoading(true);
        const [itemsRes, catRes] = await Promise.all([
          axios.get(`${BASE_URL}/api/menu/items`, { params: { tableSlug } }),
          axios.get(`${BASE_URL}/api/menu/categories`),
        ]);

        setItems(itemsRes.data.items || []);
        setCategories(catRes.data.categories || []);

        if (catRes.data.categories?.length > 0)
          setActiveCategoryId(catRes.data.categories[0]._id);
      } catch (error) {
        console.error("❌ Error fetching menu data:", error);
        alert("Failed to load menu data. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, [tableSlug]);

  // ✅ Filter items by selected category
  const filteredItems = items.filter((item) => {
    if (!activeCategoryId) return true;
    const catId = item.categoryId?._id || item.categoryId;
    return String(catId) === String(activeCategoryId);
  });

  // ✅ Add item to cart
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((c) => c._id === item._id);
      if (existing) {
        return prev.map((c) =>
          c._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // ✅ Remove item from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((c) => c._id !== id));
  };

  // ✅ Cart total
  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  // ✅ Place order
  const placeOrder = async () => {
    if (!tableSlug) return alert("⚠️ No table selected. Please scan QR again.");
    if (cart.length === 0) return alert("🛒 Your cart is empty!");

    const orderData = {
      tableSlug,
      items: cart.map((item) => ({
        menuItemId: item._id,
        qty: item.quantity,
        price: item.price,
      })),
    };

    console.log("📦 Sending Order Data:", orderData);

    try {
      const res = await axios.post(`${BASE_URL}/api/orders`, orderData);
      if (res.data.success) {
        alert("🎉 Order placed successfully!");
        setCart([]);
      } else {
        alert("⚠️ Failed to place order. Please try again.");
      }
    } catch (err) {
      console.error("❌ Order placement failed:", err);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fffdf8",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* 🌟 Header */}
      <header
        style={{
          background: "linear-gradient(90deg, #b8860b, #daa520)",
          textAlign: "center",
          color: "white",
          padding: "1.5rem 0",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            letterSpacing: "1px",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          🍽️ Scan n Dine
        </h1>
        {tableSlug && (
          <p style={{ fontSize: "0.9rem", opacity: 0.9, marginTop: "0.3rem" }}>
            Table: <strong>{tableSlug}</strong>
          </p>
        )}
      </header>

      {/* 🌟 Categories */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "10px",
          padding: "1rem 1.2rem",
          borderBottom: "2px solid #eedc82",
          backgroundColor: "#fffaf1",
        }}
      >
        {categories.length > 0 ? (
          categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => setActiveCategoryId(cat._id)}
              style={{
                padding: "8px 18px",
                borderRadius: "20px",
                border:
                  activeCategoryId === cat._id
                    ? "2px solid #b8860b"
                    : "1.5px solid #daa520",
                background:
                  activeCategoryId === cat._id
                    ? "linear-gradient(90deg, #b8860b, #daa520)"
                    : "#fff",
                color: activeCategoryId === cat._id ? "white" : "#b8860b",
                fontWeight: "600",
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "0.3s",
                boxShadow:
                  activeCategoryId === cat._id
                    ? "0 3px 10px rgba(0,0,0,0.2)"
                    : "none",
                whiteSpace: "nowrap",
              }}
            >
              {cat.name}
            </button>
          ))
        ) : (
          <p style={{ color: "#999" }}>
            {loading ? "Loading categories..." : "No categories found"}
          </p>
        )}
      </div>

      {/* 🌟 Items */}
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          padding: "2rem",
        }}
      >
        {loading ? (
          <p
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              color: "#999",
            }}
          >
            Loading menu items...
          </p>
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const imageUrl = item.image
              ? `${BASE_URL}${item.image.startsWith("/") ? item.image : "/" + item.image}`
              : "https://via.placeholder.com/250x180?text=No+Image";

            return (
              <div
                key={item._id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  border: "1.5px solid #eedc82",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                    backgroundColor: "#fffaf1",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={imageUrl}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain", // ✅ shows full image properly
                      backgroundColor: "#fffaf1",
                      borderBottom: "1px solid #eee",
                    }}
                  />
                </div>

                <div style={{ padding: "1rem" }}>
                  <h2
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#b8860b",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {item.name}
                  </h2>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#777",
                      minHeight: "40px",
                      marginBottom: "0.8rem",
                    }}
                  >
                    {item.description || "Deliciously prepared for you."}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#b8860b",
                        fontWeight: "700",
                        fontSize: "1rem",
                      }}
                    >
                      ₹{item.price}
                    </span>
                    <button
                      onClick={() => addToCart(item)}
                      style={{
                        background: "linear-gradient(90deg, #b8860b, #daa520)",
                        color: "white",
                        padding: "6px 12px",
                        borderRadius: "10px",
                        fontWeight: "600",
                        fontSize: "0.85rem",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
                      }}
                    >
                      Add +
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              color: "#999",
              fontSize: "1rem",
            }}
          >
            No items found in this category.
          </p>
        )}
      </main>

      {/* 🌟 Cart Section */}
      {cart.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: "white",
            borderTop: "2px solid #eedc82",
            boxShadow: "0 -3px 15px rgba(0,0,0,0.1)",
            padding: "1rem 1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <p
            style={{
              color: "#b8860b",
              fontWeight: "600",
              fontSize: "1rem",
            }}
          >
            {cart.length} item(s) | Total:{" "}
            <span style={{ color: "#daa520", fontWeight: "700" }}>₹{total}</span>
          </p>
          <button
            onClick={placeOrder}
            style={{
              background: "linear-gradient(90deg, #b8860b, #daa520)",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              fontWeight: "600",
              fontSize: "0.95rem",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            Place Order →
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
