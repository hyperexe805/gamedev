'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const initialGames = [
  { id: 1, title: "Climb Towe", category: "Platforming", inDevelopment: true },
]

export function MyGames() {
  const [games] = useState(initialGames)

  return (
    <div>
      {games.map(game => (
        <Card key={game.id}>
          <CardHeader>
            <CardTitle>{game.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge>{game.category}</Badge>
            <p>{game.inDevelopment ? "In Development" : "Released"}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}