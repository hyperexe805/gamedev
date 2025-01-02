'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const initialGames = [
  { id: 1, title: "Climb Towe", category: "Platforming", inDevelopment: true },
  
]

export function MyGames() {
  const [games, setGames] = useState(initialGames)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">My Games</h2>
      <p className="text-gray-600 mb-6">
        Here are the games you've created or are currently developing. Remember, if your game idea was selected for development, you'll see it listed here with full credit for the original concept.
      </p>
      {games.map((game) => (
        <Card key={game.id} className="bg-white border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl text-gray-800">{game.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {game.category}
              </Badge>
              <span className={`text-sm ${game.inDevelopment ? 'text-green-600' : 'text-gray-600'}`}>
                {game.inDevelopment ? 'In Development' : 'Completed'}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
      
    </div>
  )
}
