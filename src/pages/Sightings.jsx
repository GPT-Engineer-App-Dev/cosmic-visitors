import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sightings = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">UFO Sightings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Placeholder cards for sightings */}
        <Card>
          <CardHeader>
            <CardTitle>Sighting 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Date: 2023-01-01</p>
            <p>Location: New York, NY</p>
            <p>Description: Brief description of the sighting.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sighting 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Date: 2023-02-01</p>
            <p>Location: Los Angeles, CA</p>
            <p>Description: Brief description of the sighting.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sighting 3</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Date: 2023-03-01</p>
            <p>Location: Chicago, IL</p>
            <p>Description: Brief description of the sighting.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sightings;