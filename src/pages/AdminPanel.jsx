// // import React, { useEffect, useState } from "react";
// // import api from "../services/api";

// // export default function AdminPanel() {
// //   const [categories, setCategories] = useState([]);
// //   const [tables, setTables] = useState([]);
// //   const [orders, setOrders] = useState([]);
// //   const [staff, setStaff] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const token = localStorage.getItem("token");

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const headers = { Authorization: `Bearer ${token}` };

// //         const [catRes, tableRes, orderRes, staffRes] = await Promise.all([
// //           api.get("/menu/categories", { headers }),
// //           api.get("/tables", { headers }),
// //           api.get("/orders", { headers }),
// //           api.get("/auth/staff", { headers }),
// //         ]);

// //         console.log("🧾 Orders Data:", orderRes.data);
// //         console.log("📋 Categories Data:", catRes.data);

// //         // 🧠 Normalize response in case backend sends { data: [...] }
// //         setCategories(Array.isArray(catRes.data) ? catRes.data : catRes.data.data || []);
// //         setTables(Array.isArray(tableRes.data) ? tableRes.data : tableRes.data.data || []);
// //         setOrders(Array.isArray(orderRes.data) ? orderRes.data : orderRes.data.data || []);
// //         setStaff(Array.isArray(staffRes.data) ? staffRes.data : staffRes.data.data || []);
// //       } catch (err) {
// //         console.error("❌ Error loading admin data:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [token]);

// //   if (loading) {
// //     return (
// //       <div style={loadingContainer}>
// //         <div style={spinner}></div>
// //         <p style={{ marginTop: "10px" }}>Loading Admin Panel...</p>
// //         <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={mainContainer}>
// //       {/* Header */}
// //       <header style={{ textAlign: "center", marginBottom: "40px" }}>
// //         <h1 style={title}>🍽️ Scan n Dine Admin Dashboard</h1>
// //         <p style={subtitle}>Manage your restaurant with elegance and ease</p>
// //       </header>

// //       {/* Grid */}
// //       <div style={gridContainer}>
// //         {/* Orders */}
// //         <div style={cardStyle}>
// //           <h2 style={sectionTitle}>🧾 Current Orders</h2>
// //           {orders.length === 0 ? (
// //             <p style={emptyText}>No active orders yet.</p>
// //           ) : (
// //             orders.map((o) => (
// //               <div key={o._id} style={miniCard}>
// //                 <div style={cardHeader}>
// //                   <h3 style={{ margin: 0, color: "#b8860b" }}>
// //                     Table #{o.table?.number ?? "N/A"}
// //                   </h3>
// //                   <span
// //                     style={{
// //                       backgroundColor:
// //                         o.status === "completed"
// //                           ? "#fff8dc"
// //                           : o.status === "in-progress"
// //                           ? "#faebd7"
// //                           : "#f5f5dc",
// //                       color: "#8b7500",
// //                       padding: "3px 10px",
// //                       borderRadius: "10px",
// //                       fontSize: "12px",
// //                       border: "1px solid #d4af37",
// //                     }}
// //                   >
// //                     {o.status}
// //                   </span>
// //                 </div>
// //                 <p style={{ fontSize: "13px", marginTop: "5px" }}>
// //                   <strong>Staff:</strong> {o.assignedStaff?.name || "Unassigned"}
// //                 </p>
// //                 <ul style={{ paddingLeft: "18px", marginTop: "5px" }}>
// //                   {o.items?.length > 0 ? (
// //                     o.items.map((i, idx) => (
// //                       <li key={idx} style={{ fontSize: "13px" }}>
// //                         {i.name} × {i.qty}
// //                       </li>
// //                     ))
// //                   ) : (
// //                     <li>No items</li>
// //                   )}
// //                 </ul>
// //               </div>
// //             ))
// //           )}
// //         </div>

// //         {/* Staff */}
// //         <div style={cardStyle}>
// //           <h2 style={sectionTitle}>👨‍🍳 Staff Members</h2>
// //           {staff.length === 0 ? (
// //             <p style={emptyText}>No staff registered.</p>
// //           ) : (
// //             staff.map((s) => (
// //               <div key={s._id} style={miniCard}>
// //                 <h3 style={{ margin: 0, color: "#b8860b" }}>{s.name}</h3>
// //                 <p style={{ fontSize: "13px", color: "#555" }}>{s.email}</p>
// //                 <p style={{ fontSize: "12px", color: "#888" }}>
// //                   Role: {s.role || "Staff"}
// //                 </p>
// //               </div>
// //             ))
// //           )}
// //         </div>

// //         {/* Categories */}
// //         <div style={cardStyle}>
// //           <h2 style={sectionTitle}>📋 Menu Categories</h2>
// //           {categories.length === 0 ? (
// //             <p style={emptyText}>No categories added yet.</p>
// //           ) : (
// //             <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
// //               {categories.map((c) => (
// //                 <span
// //                   key={c._id}
// //                   style={{
// //                     backgroundColor: "#fff8dc",
// //                     color: "#b8860b",
// //                     padding: "8px 12px",
// //                     borderRadius: "20px",
// //                     fontSize: "13px",
// //                     fontWeight: 500,
// //                     border: "1px solid #d4af37",
// //                   }}
// //                 >
// //                   {c.name}
// //                 </span>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         {/* Tables */}
// //         <div style={cardStyle}>
// //           <h2 style={sectionTitle}>🪑 Tables</h2>
// //           {tables.length === 0 ? (
// //             <p style={emptyText}>No tables found.</p>
// //           ) : (
// //             tables.map((t) => (
// //               <div key={t._id} style={miniCard}>
// //                 <h3 style={{ margin: 0, color: "#b8860b" }}>
// //                   Table #{t.number}
// //                 </h3>
// //                 <p style={{ fontSize: "13px", color: "#555" }}>
// //                   QR: {t.qrSlug}
// //                 </p>
// //               </div>
// //             ))
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ---- Styles ---- */
// // const mainContainer = {
// //   minHeight: "100vh",
// //   background: "linear-gradient(180deg, #fffdf8, #fdf6e3)",
// //   padding: "40px 20px",
// //   fontFamily: "Poppins, sans-serif",
// // };

// // const loadingContainer = {
// //   height: "100vh",
// //   display: "flex",
// //   flexDirection: "column",
// //   alignItems: "center",
// //   justifyContent: "center",
// //   backgroundColor: "#fffaf0",
// //   color: "#b7950b",
// // };

// // const spinner = {
// //   width: "40px",
// //   height: "40px",
// //   border: "4px solid #f2e1a3",
// //   borderTopColor: "#d4af37",
// //   borderRadius: "50%",
// //   animation: "spin 1s linear infinite",
// // };

// // const title = {
// //   color: "#b8860b",
// //   fontSize: "2.2rem",
// //   margin: "0",
// //   fontWeight: "700",
// // };

// // const subtitle = { color: "#8b8000", fontSize: "15px" };

// // const gridContainer = {
// //   display: "grid",
// //   gap: "30px",
// //   gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
// //   maxWidth: "1200px",
// //   margin: "0 auto",
// // };

// // const cardStyle = {
// //   backgroundColor: "#ffffff",
// //   borderRadius: "15px",
// //   padding: "20px",
// //   boxShadow: "0 4px 10px rgba(212, 175, 55, 0.15)",
// //   border: "1px solid #f0e6b2",
// //   transition: "transform 0.2s ease, box-shadow 0.2s ease",
// // };

// // const sectionTitle = {
// //   fontSize: "18px",
// //   color: "#8b7500",
// //   marginBottom: "15px",
// //   borderBottom: "1px solid #f0e6b2",
// //   paddingBottom: "8px",
// //   fontWeight: "600",
// // };

// // const emptyText = {
// //   color: "#b8a000",
// //   fontSize: "14px",
// //   fontStyle: "italic",
// // };

// // const miniCard = {
// //   backgroundColor: "#fffaf0",
// //   borderRadius: "10px",
// //   padding: "10px 15px",
// //   marginBottom: "10px",
// //   border: "1px solid #f3e6b0",
// // };

// // const cardHeader = {
// //   display: "flex",
// //   justifyContent: "space-between",
// //   alignItems: "center",
// // };
// import React, { useEffect, useState } from "react";
// import api from "../services/api";
// import { QRCodeCanvas } from "qrcode.react";

// export default function AdminPanel() {
//   const [activeTab, setActiveTab] = useState("orders");
//   const [categories, setCategories] = useState([]);
//   const [tables, setTables] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [staff, setStaff] = useState([]);
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const headers = { Authorization: `Bearer ${token}` };

//         const [catRes, tableRes, orderRes, staffRes, menuRes] = await Promise.all([
//           api.get("/menu/categories", { headers }),
//           api.get("/tables", { headers }),
//           api.get("/orders", { headers }),
//           api.get("/auth/staff", { headers }),
//           api.get("/menu/items", { headers }),
//         ]);

//         console.log("🧾 Orders Response:", orderRes.data);

//         setCategories(catRes.data.data || catRes.data || []);
//         setTables(tableRes.data.data || tableRes.data || []);
//         // ✅ handle various backend response formats safely
//         setOrders(
//           orderRes.data.orders || orderRes.data.data || orderRes.data || []
//         );
//         setStaff(staffRes.data.data || staffRes.data || []);
//         setItems(menuRes.data.items || menuRes.data || []);
//       } catch (err) {
//         console.error("❌ Error loading admin data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [token]);

//   if (loading) {
//     return (
//       <div style={loadingContainer}>
//         <div style={spinner}></div>
//         <p>Loading Admin Panel...</p>
//       </div>
//     );
//   }

//   /* ========== RENDER SECTIONS ========== */

//   const renderOrders = () => (
//     <div>
//       <h2 style={sectionTitle}>🧾 Current Orders</h2>
//       {!Array.isArray(orders) || orders.length === 0 ? (
//         <p style={emptyText}>No active orders yet.</p>
//       ) : (
//         orders.map((o) => (
//           <div key={o._id} style={miniCard}>
//             <div style={cardHeader}>
//               <h3 style={{ margin: 0, color: "#b8860b" }}>
//                 Table #{o.tableId?.number || o.table?.number || "N/A"}
//               </h3>
//               <span
//                 style={{
//                   backgroundColor:
//                     o.status === "completed"
//                       ? "#e6ffe6"
//                       : o.status === "in-progress"
//                       ? "#fff4cc"
//                       : "#f0f0f0",
//                   color:
//                     o.status === "completed"
//                       ? "#006600"
//                       : o.status === "in-progress"
//                       ? "#8b7500"
//                       : "#555",
//                   padding: "3px 10px",
//                   borderRadius: "8px",
//                   fontSize: "12px",
//                   border: "1px solid #d4af37",
//                 }}
//               >
//                 {o.status}
//               </span>
//             </div>

//             <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
//               {o.items?.map((item, idx) => (
//                 <li key={idx}>
//                   {item.name || item.menuItemId?.name} × {item.qty} — ₹
//                   {item.price || item.menuItemId?.price || 0}
//                 </li>
//               ))}
//             </ul>

//             <p style={{ fontWeight: 600, marginTop: "8px", color: "#b8860b" }}>
//               Total: ₹
//               {o.items?.reduce(
//                 (sum, i) => sum + (i.qty * (i.price || i.menuItemId?.price || 0)),
//                 0
//               )}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );

//   const renderMenuItems = () => (
//     <div>
//       <h2 style={sectionTitle}>🍔 Menu Items</h2>
//       {items.length === 0 ? (
//         <p style={emptyText}>No menu items added yet.</p>
//       ) : (
//         items.map((i) => (
//           <div key={i._id} style={miniCard}>
//             <h3 style={{ margin: 0, color: "#b8860b" }}>{i.name}</h3>
//             <p style={{ fontSize: "13px" }}>₹{i.price}</p>
//             <p style={{ fontSize: "12px", color: "#888" }}>
//               {i.availability ? "✅ Available" : "❌ Not Available"}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );

//   const renderCategories = () => (
//     <div>
//       <h2 style={sectionTitle}>📋 Menu Categories</h2>
//       {categories.length === 0 ? (
//         <p style={emptyText}>No categories added yet.</p>
//       ) : (
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
//           {categories.map((c) => (
//             <span
//               key={c._id}
//               style={{
//                 backgroundColor: "#fff8dc",
//                 color: "#b8860b",
//                 padding: "6px 12px",
//                 borderRadius: "20px",
//                 border: "1px solid #d4af37",
//               }}
//             >
//               {c.name}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );

//   const renderStaff = () => (
//     <div>
//       <h2 style={sectionTitle}>👨‍🍳 Staff Members</h2>
//       {staff.length === 0 ? (
//         <p style={emptyText}>No staff registered.</p>
//       ) : (
//         staff.map((s) => (
//           <div key={s._id} style={miniCard}>
//             <h3 style={{ margin: 0, color: "#b8860b" }}>{s.name}</h3>
//             <p style={{ fontSize: "13px" }}>{s.email}</p>
//             <p style={{ fontSize: "12px", color: "#888" }}>
//               Role: {s.role || "Staff"}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );

//   const renderTables = () => (
//     <div>
//       <h2 style={sectionTitle}>🪑 Tables</h2>
//       {tables.length === 0 ? (
//         <p style={emptyText}>No tables found.</p>
//       ) : (
//         tables.map((t) => (
//           <div key={t._id} style={miniCard}>
//             <h3 style={{ margin: 0, color: "#b8860b" }}>Table #{t.number}</h3>
//             <div style={{ marginTop: "10px", textAlign: "center" }}>
//               <QRCodeCanvas
//                 value={`${window.location.origin}/menu/${t.qrSlug}`}
//                 size={80}
//                 bgColor="#fff"
//                 fgColor="#000"
//               />
//               <p style={{ fontSize: "12px", color: "#777", marginTop: "5px" }}>
//                 Slug: {t.qrSlug}
//               </p>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );

//   /* ========== MAIN RETURN ========== */

//   return (
//     <div style={mainContainer}>
//       <header style={{ textAlign: "center", marginBottom: "30px" }}>
//         <h1 style={title}>🍽️ Scan n Dine Admin Dashboard</h1>
//       </header>

//       <div style={tabContainer}>
//         {[
//           { key: "orders", label: "Orders" },
//           { key: "menu", label: "Menu Items" },
//           { key: "categories", label: "Categories" },
//           { key: "staff", label: "Staff" },
//           { key: "tables", label: "Tables" },
//         ].map((tab) => (
//           <button
//             key={tab.key}
//             onClick={() => setActiveTab(tab.key)}
//             style={{
//               ...tabButton,
//               backgroundColor: activeTab === tab.key ? "#d4af37" : "#fff8dc",
//               color: activeTab === tab.key ? "#fff" : "#b8860b",
//             }}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       <div style={contentCard}>
//         {activeTab === "orders" && renderOrders()}
//         {activeTab === "menu" && renderMenuItems()}
//         {activeTab === "categories" && renderCategories()}
//         {activeTab === "staff" && renderStaff()}
//         {activeTab === "tables" && renderTables()}
//       </div>
//     </div>
//   );
// }

// /* ---- Styles ---- */
// const mainContainer = {
//   minHeight: "100vh",
//   background: "linear-gradient(180deg, #fffdf8, #fdf6e3)",
//   padding: "40px 20px",
//   fontFamily: "Poppins, sans-serif",
// };

// const tabContainer = {
//   display: "flex",
//   justifyContent: "center",
//   flexWrap: "wrap",
//   gap: "10px",
//   marginBottom: "25px",
// };

// const tabButton = {
//   padding: "8px 16px",
//   border: "1px solid #d4af37",
//   borderRadius: "20px",
//   cursor: "pointer",
//   fontWeight: "600",
//   fontSize: "14px",
//   transition: "0.3s",
// };

// const contentCard = {
//   backgroundColor: "#ffffff",
//   borderRadius: "15px",
//   padding: "25px",
//   boxShadow: "0 4px 10px rgba(212,175,55,0.15)",
//   maxWidth: "900px",
//   margin: "0 auto",
// };

// const loadingContainer = {
//   height: "100vh",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundColor: "#fffaf0",
//   color: "#b7950b",
// };

// const spinner = {
//   width: "40px",
//   height: "40px",
//   border: "4px solid #f2e1a3",
//   borderTopColor: "#d4af37",
//   borderRadius: "50%",
//   animation: "spin 1s linear infinite",
// };

// const title = {
//   color: "#b8860b",
//   fontSize: "2.2rem",
//   fontWeight: "700",
// };

// const sectionTitle = {
//   fontSize: "18px",
//   color: "#8b7500",
//   marginBottom: "15px",
//   borderBottom: "1px solid #f0e6b2",
//   paddingBottom: "8px",
//   fontWeight: "600",
// };

// const emptyText = {
//   color: "#b8a000",
//   fontSize: "14px",
//   fontStyle: "italic",
// };

// const miniCard = {
//   backgroundColor: "#fffaf0",
//   borderRadius: "10px",
//   padding: "10px 15px",
//   marginBottom: "10px",
//   border: "1px solid #f3e6b0",
// };

// const cardHeader = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
// };
import React, { useEffect, useState } from "react";
import api from "../services/api";
import { QRCodeCanvas } from "qrcode.react";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("orders");
  const [categories, setCategories] = useState([]);
  const [tables, setTables] = useState([]);
  const [orders, setOrders] = useState([]);
  const [staff, setStaff] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };

        const [catRes, tableRes, orderRes, staffRes, menuRes] = await Promise.all([
          api.get("/menu/categories", { headers }),
          api.get("/tables", { headers }),
          api.get("/orders", { headers }),
          api.get("/auth/staff", { headers }),
          api.get("/menu/items", { headers }),
        ]);

        console.log("🧾 Orders Response:", orderRes.data);

        // ✅ Safe parsing for all data types
        setCategories(
          catRes.data.categories || catRes.data.data || catRes.data || []
        );
        setTables(
          tableRes.data.tables || tableRes.data.data || tableRes.data || []
        );
        setOrders(
          orderRes.data.orders || orderRes.data.data || orderRes.data || []
        );
        setStaff(staffRes.data.staff || staffRes.data.data || staffRes.data || []);
        setItems(menuRes.data.items || menuRes.data.data || menuRes.data || []);
      } catch (err) {
        console.error("❌ Error loading admin data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) {
    return (
      <div style={loadingContainer}>
        <div style={spinner}></div>
        <p>Loading Admin Panel...</p>
      </div>
    );
  }

  /* ========== RENDER SECTIONS ========== */

  const renderOrders = () => (
    <div>
      <h2 style={sectionTitle}>🧾 Current Orders</h2>
      {!Array.isArray(orders) || orders.length === 0 ? (
        <p style={emptyText}>No active orders yet.</p>
      ) : (
        orders.map((o) => (
          <div key={o._id} style={miniCard}>
            <div style={cardHeader}>
              <h3 style={{ margin: 0, color: "#b8860b" }}>
                Table #{o.tableId?.number || o.table?.number || "N/A"}
              </h3>
              <span
                style={{
                  backgroundColor:
                    o.status === "served"
                      ? "#e6ffe6"
                      : o.status === "preparing"
                      ? "#fff4cc"
                      : "#f0f0f0",
                  color:
                    o.status === "served"
                      ? "#006600"
                      : o.status === "preparing"
                      ? "#8b7500"
                      : "#555",
                  padding: "3px 10px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  border: "1px solid #d4af37",
                }}
              >
                {o.status}
              </span>
            </div>

            <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
              {o.items?.map((item, idx) => (
                <li key={idx}>
                  {item.name || item.menuItemId?.name} × {item.qty} — ₹
                  {item.price || item.menuItemId?.price || 0}
                </li>
              ))}
            </ul>

            <p style={{ fontWeight: 600, marginTop: "8px", color: "#b8860b" }}>
              Total: ₹
              {o.items?.reduce(
                (sum, i) => sum + (i.qty * (i.price || i.menuItemId?.price || 0)),
                0
              )}
            </p>
          </div>
        ))
      )}
    </div>
  );

  const renderMenuItems = () => (
    <div>
      <h2 style={sectionTitle}>🍔 Menu Items</h2>
      {items.length === 0 ? (
        <p style={emptyText}>No menu items added yet.</p>
      ) : (
        items.map((i) => (
          <div key={i._id} style={miniCard}>
            <h3 style={{ margin: 0, color: "#b8860b" }}>{i.name}</h3>
            <p style={{ fontSize: "13px" }}>₹{i.price}</p>
            <p style={{ fontSize: "12px", color: "#888" }}>
              {i.availability ? "✅ Available" : "❌ Not Available"}
            </p>
          </div>
        ))
      )}
    </div>
  );

  const renderCategories = () => (
    <div>
      <h2 style={sectionTitle}>📋 Menu Categories</h2>
      {!Array.isArray(categories) || categories.length === 0 ? (
        <p style={emptyText}>No categories added yet.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {categories.map((c) => (
            <span
              key={c._id}
              style={{
                backgroundColor: "#fff8dc",
                color: "#b8860b",
                padding: "6px 12px",
                borderRadius: "20px",
                border: "1px solid #d4af37",
              }}
            >
              {c.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  const renderStaff = () => (
    <div>
      <h2 style={sectionTitle}>👨‍🍳 Staff Members</h2>
      {staff.length === 0 ? (
        <p style={emptyText}>No staff registered.</p>
      ) : (
        staff.map((s) => (
          <div key={s._id} style={miniCard}>
            <h3 style={{ margin: 0, color: "#b8860b" }}>{s.name}</h3>
            <p style={{ fontSize: "13px" }}>{s.email}</p>
            <p style={{ fontSize: "12px", color: "#888" }}>
              Role: {s.role || "Staff"}
            </p>
          </div>
        ))
      )}
    </div>
  );

  const renderTables = () => (
    <div>
      <h2 style={sectionTitle}>🪑 Tables</h2>
      {tables.length === 0 ? (
        <p style={emptyText}>No tables found.</p>
      ) : (
        tables.map((t) => (
          <div key={t._id} style={miniCard}>
            <h3 style={{ margin: 0, color: "#b8860b" }}>Table #{t.number}</h3>
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              <QRCodeCanvas
                value={`${window.location.origin}/menu/${t.qrSlug}`}
                size={80}
                bgColor="#fff"
                fgColor="#000"
              />
              <p style={{ fontSize: "12px", color: "#777", marginTop: "5px" }}>
                Slug: {t.qrSlug}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );

  /* ========== MAIN RETURN ========== */

  return (
    <div style={mainContainer}>
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={title}>🍽️ Scan n Dine Admin Dashboard</h1>
      </header>

      <div style={tabContainer}>
        {[
          { key: "orders", label: "Orders" },
          { key: "menu", label: "Menu Items" },
          { key: "categories", label: "Categories" },
          { key: "staff", label: "Staff" },
          { key: "tables", label: "Tables" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              ...tabButton,
              backgroundColor: activeTab === tab.key ? "#d4af37" : "#fff8dc",
              color: activeTab === tab.key ? "#fff" : "#b8860b",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={contentCard}>
        {activeTab === "orders" && renderOrders()}
        {activeTab === "menu" && renderMenuItems()}
        {activeTab === "categories" && renderCategories()}
        {activeTab === "staff" && renderStaff()}
        {activeTab === "tables" && renderTables()}
      </div>
    </div>
  );
}

/* ---- Styles ---- */
const mainContainer = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #fffdf8, #fdf6e3)",
  padding: "40px 20px",
  fontFamily: "Poppins, sans-serif",
};

const tabContainer = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "10px",
  marginBottom: "25px",
};

const tabButton = {
  padding: "8px 16px",
  border: "1px solid #d4af37",
  borderRadius: "20px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "14px",
  transition: "0.3s",
};

const contentCard = {
  backgroundColor: "#ffffff",
  borderRadius: "15px",
  padding: "25px",
  boxShadow: "0 4px 10px rgba(212,175,55,0.15)",
  maxWidth: "900px",
  margin: "0 auto",
};

const loadingContainer = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fffaf0",
  color: "#b7950b",
};

const spinner = {
  width: "40px",
  height: "40px",
  border: "4px solid #f2e1a3",
  borderTopColor: "#d4af37",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

const title = {
  color: "#b8860b",
  fontSize: "2.2rem",
  fontWeight: "700",
};

const sectionTitle = {
  fontSize: "18px",
  color: "#8b7500",
  marginBottom: "15px",
  borderBottom: "1px solid #f0e6b2",
  paddingBottom: "8px",
  fontWeight: "600",
};

const emptyText = {
  color: "#b8a000",
  fontSize: "14px",
  fontStyle: "italic",
};

const miniCard = {
  backgroundColor: "#fffaf0",
  borderRadius: "10px",
  padding: "10px 15px",
  marginBottom: "10px",
  border: "1px solid #f3e6b0",
};

const cardHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
