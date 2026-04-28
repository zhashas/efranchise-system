import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

/**
 * ProtectedRoute Component
 *
 * Wraps pages that require authentication and role-based access.
 *
 * How it works:
 * 1. Checks if user is logged in via Supabase auth
 * 2. Fetches user's role from profiles table
 * 3. Redirects to /login if not authenticated
 * 4. Redirects to correct dashboard if wrong role tries to access a route
 * 5. Shows loading spinner while checking
 *
 * Usage:
 * <Route
 *   path="/admin/dashboard"
 *   element={
 *     <ProtectedRoute allowedRoles={['admin']}>
 *       <AdminDashboard />
 *     </ProtectedRoute>
 *   }
 * />
 */

function ProtectedRoute({ children, allowedRoles = [] }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        // Step 1: Check if user is authenticated
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        if (sessionError) {
          console.error("Session error:", sessionError);
          setLoading(false);
          return;
        }

        if (!session) {
          // No session = not logged in
          setLoading(false);
          return;
        }

        // Step 2: User is logged in, fetch their role from profiles table
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", session.user.id)
          .maybeSingle(); // Use maybeSingle() instead of single() to avoid errors if no row

        if (profileError) {
          console.error("Profile fetch error:", profileError);
          // If profile doesn't exist, log out the user
          await supabase.auth.signOut();
          setLoading(false);
          return;
        }

        if (!profile) {
          console.error("No profile found for user:", session.user.id);
          // Profile doesn't exist - log them out
          await supabase.auth.signOut();
          setLoading(false);
          return;
        }

        // Step 3: Set user and role in state
        setUser(session.user);
        setUserRole(profile.role);
      } catch (error) {
        console.error("Error checking user:", error.message);
        setLoading(false);
      }
    };

    void checkUser();
  }, []);

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Verifying access...</p>
        </div>
      </div>
    );
  }

  // Not authenticated - redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // User is authenticated but role doesn't match allowed roles
  if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    // Redirect to their correct dashboard based on role
    const redirectMap = {
      admin: "/admin/dashboard",
      staff: "/staff/dashboard",
      applicant: "/applicant/dashboard",
    };

    const redirectTo = redirectMap[userRole] || "/";
    return <Navigate to={redirectTo} replace />;
  }

  // All checks passed - render the protected page
  return children;
}

export default ProtectedRoute;
