import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminApplications from "./pages/admin/Applications";
import AdminApplicationDetail from "./pages/admin/ApplicationDetail";
import AdminStaff from "./pages/admin/Staff";
import AdminAppointments from "./pages/admin/Appointments";
import AdminNotifications from "./pages/admin/Notifications";
import AdminReports from "./pages/admin/Reports";
import AdminLogs from "./pages/admin/Logs";
import AdminSettings from "./pages/admin/Settings";

// Applicant Pages
import ApplicantDashboard from "./pages/applicant/Dashboard";
import Apply from "./pages/applicant/Apply";
import ApplicantApplications from "./pages/applicant/Applications";
import ApplicantAppointments from "./pages/applicant/Appointments";
import ApplicantNotifications from "./pages/applicant/Notifications";
import ApplicantSettings from "./pages/applicant/Settings";

// Staff Pages
import StaffDashboard from "./pages/staff/Dashboard";
import StaffApplications from "./pages/staff/Applications";
import StaffApplicationDetail from "./pages/staff/ApplicationDetail";
import StaffAppointments from "./pages/staff/Appointments";
import StaffNotifications from "./pages/staff/Notifications";
import StaffReports from "./pages/staff/Reports";
import StaffSettings from "./pages/staff/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/applications" element={<AdminApplications />} />
        <Route
          path="/admin/applications/:id"
          element={<AdminApplicationDetail />}
        />
        <Route path="/admin/staff" element={<AdminStaff />} />
        <Route path="/admin/appointments" element={<AdminAppointments />} />
        <Route path="/admin/notifications" element={<AdminNotifications />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/logs" element={<AdminLogs />} />
        <Route path="/admin/settings" element={<AdminSettings />} />

        {/* Applicant Routes */}
        <Route path="/applicant/dashboard" element={<ApplicantDashboard />} />
        <Route path="/applicant/apply" element={<Apply />} />
        <Route
          path="/applicant/applications"
          element={<ApplicantApplications />}
        />
        <Route
          path="/applicant/appointments"
          element={<ApplicantAppointments />}
        />
        <Route
          path="/applicant/notifications"
          element={<ApplicantNotifications />}
        />
        <Route path="/applicant/settings" element={<ApplicantSettings />} />

        {/* Staff Routes */}
        <Route path="/staff/dashboard" element={<StaffDashboard />} />
        <Route path="/staff/applications" element={<StaffApplications />} />
        <Route
          path="/staff/applications/:id"
          element={<StaffApplicationDetail />}
        />
        <Route path="/staff/appointments" element={<StaffAppointments />} />
        <Route path="/staff/notifications" element={<StaffNotifications />} />
        <Route path="/staff/reports" element={<StaffReports />} />
        <Route path="/staff/settings" element={<StaffSettings />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
