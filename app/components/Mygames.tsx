import { useGames } from "../hooks/useGames";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function MyGames() {
  const { games, loading } = useGames();
  const gamesinitial = {
    id: 1,
    title: "Pixel Climb",
    category: "Frustration",
    inDevelopment: true,
  }

  if (loading) {
    return <p>Loading games...</p>;
  }

  if (games.length === 0) {
    return <p>No games available.</p>;
  }

  return (
    <div>
      {gamesinitial.map((game) => (
        <Card key={game.id}>
          <CardHeader>
            <CardTitle>{game.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <Badge>{game.category}</Badge>
            <p
              className="text-green-500
"
            >
              {game.inDevelopment ? "In Development" : "Released"}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
