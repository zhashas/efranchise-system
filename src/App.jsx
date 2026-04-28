import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Public pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Admin pages
import AdminDashboard from "./pages/admin/Dashboard";

// Applicant pages
import ApplicantDashboard from "./pages/applicant/Dashboard";

// Staff pages
import StaffDashboard from "./pages/staff/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ============================================================ */}
        {/* PUBLIC ROUTES - Anyone can access these */}
        {/* ============================================================ */}

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ============================================================ */}
        {/* ADMIN ROUTES - Protected, admin-only access */}
        {/* ============================================================ */}

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        {/* More admin routes will be added here later:
            /admin/applications
            /admin/staff
            /admin/appointments
            /admin/notifications
            /admin/reports
            /admin/logs
            /admin/settings
        */}

        {/* ============================================================ */}
        {/* APPLICANT ROUTES - Protected, applicant-only access */}
        {/* ============================================================ */}

        <Route path="/applicant/dashboard" element={<ApplicantDashboard />} />
        {/* More applicant routes will be added here later:
            /applicant/apply
            /applicant/applications
            /applicant/appointments
            /applicant/notifications
            /applicant/settings
        */}

        {/* ============================================================ */}
        {/* STAFF ROUTES - Protected, staff-only access */}
        {/* ============================================================ */}

        <Route path="/staff/dashboard" element={<StaffDashboard />} />
        {/* More staff routes will be added here later:
            /staff/applications
            /staff/appointments
            /staff/notifications
            /staff/reports
            /staff/settings
        */}

        {/* ============================================================ */}
        {/* 404 CATCH-ALL - Any undefined route goes to landing page */}
        {/* ============================================================ */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
