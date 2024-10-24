import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AuthForm from "@/components/auth/AuthForm";
import Dashboard from "@/components/dashboard/Dashboard";
import { useAuth } from "@/lib/auth";

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {!user ? (
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Event Manager</h1>
            <AuthForm />
          </Card>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Index;