function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-navy-900 mb-4">
          eFranchise System
        </h1>
        <p className="text-gray-600 mb-8">San Jose, Occidental Mindoro</p>
        <div className="space-x-4">
          <a
            href="/login"
            className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
          >
            Login
          </a>
          <a
            href="/register"
            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
