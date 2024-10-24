import { useAuth } from "@/lib/auth";
import { Navigate } from "react-router-dom";
import EventList from "@/components/dashboard/EventList";

const EventsPage = () => {
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Events</h1>
      <EventList />
    </div>
  );
};

export default EventsPage;