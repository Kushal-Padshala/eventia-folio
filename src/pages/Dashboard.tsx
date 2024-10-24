import Dashboard from "@/components/dashboard/Dashboard";
import { useAuth } from "@/lib/auth";
import { Navigate } from "react-router-dom";

const DashboardPage = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Dashboard />;
};

export default DashboardPage;