import { createClient } from "@supabase/supabase-js";

// Read keys from .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Safety check — throws a clear error if .env is missing
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing Supabase environment variables. " +
      "Check your .env file for VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.",
  );
}

// Create and export the Supabase client
// Import this in any file that needs to talk to the database
export const supabase = createClient(supabaseUrl, supabaseKey);
