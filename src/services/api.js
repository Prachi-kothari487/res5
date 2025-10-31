// import axios from 'axios';


// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE || "http://localhost:4000/api",
// });

// // Optional: agar auth token chahiye future me
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;
// import axios from 'axios';

// // Axios instance
// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE || "http://localhost:4000/api", // Ensure backend port matches
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Interceptor to attach token
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Optional: Response interceptor for error handling
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       // Unauthorized, maybe token expired or invalid
//       localStorage.removeItem("token");
//       localStorage.removeItem("role");
//       window.location.href = "/login"; // Redirect to login
//     }
//     return Promise.reject(error);
//   }
// );

// export default api;
import axios from "axios";

// ✅ Log base URL for debugging
console.log("🌐 API Base URL:", import.meta.env.VITE_API_BASE);

// ✅ Create Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE?.trim() || "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // you can set to true only if cookies are used
});

// ✅ Request Interceptor — attach token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response Interceptor — handle expired or invalid token
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      // Handle unauthorized access
      if (status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        window.location.href = "/login";
      }

      // Debug logging
      console.error("❌ API Error:", status, error.response.data || error.message);
    } else {
      console.error("🚫 Network or CORS Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
