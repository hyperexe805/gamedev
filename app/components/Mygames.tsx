import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function MyGames() {
  const games = [
    {
      id: 1,
      title: "Pixel Climb",
      category: "Frustration",
      inDevelopment: true,
      image: "/",
      link: "#"
    },
   
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">My Game Projects</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        {games.map((game) => (
          <Card key={game.id} className="w-full overflow-hidden shadow-lg">
            <div className="relative h-48 w-full">
              <Image
                src={game.image}
                alt={`Image of ${game.title}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">{game.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <Badge variant="secondary">{game.category}</Badge>
                <p className={`font-semibold ${game.inDevelopment ? "text-amber-500" : "text-green-500"}`}>
                  {game.inDevelopment ? "In Development" : "Released"}
                </p>
              </div>
              <Link href={game.link} passHref>
                <Button className="w-full">
                  View Project
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="font-semibold w-24">Email:</span>
              <span>sendmemes36@gmail.com
              </span>
            </li>
            
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
