const fs = require("fs");
const path = require("path");

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

files.forEach((filePath) => {
  const dir = path.dirname(filePath);
  const name = path.basename(filePath, ".jsx");

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const content = `import React from 'react';

const ${name} = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-900">${name}</h1>
      <p className="text-gray-500 mt-4">Coming soon...</p>
    </div>
  );
};

export default ${name};
`;

  fs.writeFileSync(filePath, content, "utf8");
  console.log("✅ Created:", filePath);
});

console.log("\n🎉 All files created successfully with proper encoding!");
