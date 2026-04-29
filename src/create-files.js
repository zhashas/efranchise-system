import fs from "fs";
import path from "path";

const files = [
  "src/pages/LandingPage.jsx",
  "src/pages/Login.jsx",
  "src/pages/Register.jsx",
  "src/pages/NotFound.jsx",
  "src/pages/admin/Dashboard.jsx",
  "src/pages/admin/Applications.jsx",
  "src/pages/admin/ApplicationDetail.jsx",
  "src/pages/admin/Staff.jsx",
  "src/pages/admin/Appointments.jsx",
  "src/pages/admin/Notifications.jsx",
  "src/pages/admin/Reports.jsx",
  "src/pages/admin/Logs.jsx",
  "src/pages/admin/Settings.jsx",
  "src/pages/applicant/Dashboard.jsx",
  "src/pages/applicant/Apply.jsx",
  "src/pages/applicant/Applications.jsx",
  "src/pages/applicant/Appointments.jsx",
  "src/pages/applicant/Notifications.jsx",
  "src/pages/applicant/Settings.jsx",
  "src/pages/staff/Dashboard.jsx",
  "src/pages/staff/Applications.jsx",
  "src/pages/staff/ApplicationDetail.jsx",
  "src/pages/staff/Appointments.jsx",
  "src/pages/staff/Notifications.jsx",
  "src/pages/staff/Reports.jsx",
  "src/pages/staff/Settings.jsx",
  "src/components/AdminLayout.jsx",
  "src/components/ApplicantLayout.jsx",
  "src/components/StaffLayout.jsx",
  "src/components/ProtectedRoute.jsx",
];

files.forEach((file) => {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const content = `export default function ${path.basename(file, ".jsx")}() {\n  return (\n    <div className="p-6">\n      <h1 className="text-2xl font-bold">Coming Soon</h1>\n      <p className="text-gray-400 mt-2">Coming soon...</p>\n    </div>\n  )\n}\n`;
  fs.writeFileSync(file, content);
  console.log("✓ Created:", file);
});

console.log("All placeholder files created!");
