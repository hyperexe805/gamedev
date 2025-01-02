'use client'

import { useState } from 'react'
import { MyGames } from './Mygames'
import { ComparteTuIdea } from './comparte-tu-idea'

export function GameDevelopmentHub() {
  const [activeTab, setActiveTab] = useState<'games' | 'share'>('games')

  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Do you want to work with me?</h1>
        <div className="flex justify-center mb-8 space-x-4 text-lg">
          <button
            onClick={() => setActiveTab('games')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'games' 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-200'
            }`}
          >
            My Games
          </button>
          <button
            onClick={() => setActiveTab('share')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'share' 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-200'
            }`}
          >
            Share Your Idea
          </button>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          {activeTab === 'games' ? <MyGames /> : <ComparteTuIdea />}
        </div>
      </div>
    </section>
  )
}
