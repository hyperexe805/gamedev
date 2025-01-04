import { useState, useEffect } from 'react'
import { supabase } from "../../lib/supabase"
import { Game } from "../models/Game"

export function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data, error } = await supabase
          .from('games')
          .select('*')
          

        if (error) throw error
        setGames(data || [])
      } catch (error) {
        console.error('Error fetching games:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGames()
  }, [])

  return { games, loading }
}