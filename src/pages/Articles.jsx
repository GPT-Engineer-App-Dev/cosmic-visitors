import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Articles = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">UFO Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Placeholder cards for articles */}
        <Card>
          <CardHeader>
            <CardTitle>Article 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Brief description of the article.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Article 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Brief description of the article.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Article 3</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Brief description of the article.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Articles;