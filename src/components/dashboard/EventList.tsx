import { Card } from "@/components/ui/card";

const EventList = () => {
  // TODO: Implement event fetching from Firebase
  const events = [];

  if (events.length === 0) {
    return (
      <Card className="p-6 text-center text-gray-500">
        No events created yet. Click the button above to create your first event!
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event) => (
        <Card key={event.id} className="p-4">
          {/* Event card content */}
        </Card>
      ))}
    </div>
  );
};

export default EventList;