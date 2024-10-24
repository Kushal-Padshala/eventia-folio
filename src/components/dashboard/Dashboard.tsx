import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { useState } from "react";
import CreateEventDialog from "./CreateEventDialog";
import EventList from "./EventList";

const Dashboard = () => {
  const { signOut } = useAuth();
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Event Manager</h1>
          <Button variant="outline" onClick={signOut}>
            Sign Out
          </Button>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Your Events</h2>
          <Button onClick={() => setIsCreateEventOpen(true)}>
            Create New Event
          </Button>
        </div>
        
        <EventList />
        <CreateEventDialog
          open={isCreateEventOpen}
          onOpenChange={setIsCreateEventOpen}
        />
      </main>
    </div>
  );
};

export default Dashboard;