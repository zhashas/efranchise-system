import { supabase } from "./lib/supabaseClient";
import { useEffect, useState } from "react";

export default function App() {
  const [connected, setConnected] = useState(null);

  useEffect(() => {
    const test = async () => {
      const { error } = await supabase.auth.getSession();
      setConnected(!error);
    };
    test();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="card max-w-md w-full text-center">
        {/* Logo area */}
        <div
          className="bg-orange-500 w-16 h-16 rounded-full flex items-center
                        justify-center mx-auto mb-5 text-white text-3xl shadow"
        >
          🛺
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-blue-900 mb-1">
          eFranchise System
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Municipality of San Jose, Occidental Mindoro
        </p>

        {/* Supabase connection status */}
        <div className="mb-6">
          {connected === null && (
            <span className="badge bg-yellow-100 text-yellow-700">
              ⏳ Connecting to Supabase...
            </span>
          )}
          {connected === true && (
            <span className="badge bg-green-100 text-green-700">
              ✅ Supabase Connected
            </span>
          )}
          {connected === false && (
            <span className="badge bg-red-100 text-red-700">
              ❌ Connection Failed
            </span>
          )}
        </div>

        {/* Tailwind color palette test */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          <div
            className="h-8 rounded bg-orange-500 flex items-center
                          justify-center text-white text-xs font-bold"
          >
            500
          </div>
          <div
            className="h-8 rounded bg-orange-600 flex items-center
                          justify-center text-white text-xs font-bold"
          >
            600
          </div>
          <div
            className="h-8 rounded bg-blue-900 flex items-center
                          justify-center text-white text-xs font-bold"
          >
            900
          </div>
          <div
            className="h-8 rounded bg-gray-100 flex items-center
                          justify-center text-gray-600 text-xs font-bold
                          border border-gray-200"
          >
            gray
          </div>
        </div>

        {/* Button tests */}
        <div className="flex flex-col gap-3">
          <button className="btn-primary">Primary Button (btn-primary)</button>
          <button className="btn-secondary">
            Secondary Button (btn-secondary)
          </button>
          <button className="btn-danger">Danger Button (btn-danger)</button>
        </div>

        {/* Input test */}
        <div className="mt-4 text-left">
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Input Field Test
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="input-field class test..."
          />
        </div>

        {/* Status badges */}
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          <span className="badge bg-yellow-100 text-yellow-700">Pending</span>
          <span className="badge bg-blue-100 text-blue-700">Under Review</span>
          <span className="badge bg-green-100 text-green-700">Approved</span>
          <span className="badge bg-red-100 text-red-700">Rejected</span>
          <span className="badge bg-purple-100 text-purple-700">
            For Release
          </span>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          © 2025 Municipality of San Jose · Phase 2 Setup
        </p>
      </div>
    </div>
  );
}
