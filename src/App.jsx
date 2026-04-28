import { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient";

function App() {
  const [connected, setConnected] = useState(null);

  useEffect(() => {
    // Try to reach Supabase by checking auth session
    const testConnection = async () => {
      const { error } = await supabase.auth.getSession();
      if (error) {
        setConnected(false);
      } else {
        setConnected(true);
      }
    };
    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow text-center">
        <h1 className="text-2xl font-bold text-orange-500 mb-4">
          eFranchise System
        </h1>
        <p className="text-gray-500 mb-4">San Jose, Occidental Mindoro</p>
        <div className="mt-4">
          {connected === null && (
            <span className="text-yellow-500 font-semibold">
              ⏳ Testing Supabase connection...
            </span>
          )}
          {connected === true && (
            <span className="text-green-500 font-semibold">
              ✅ Supabase connected successfully!
            </span>
          )}
          {connected === false && (
            <span className="text-red-500 font-semibold">
              ❌ Connection failed. Check your .env file.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
