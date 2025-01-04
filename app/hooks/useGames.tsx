import { useState, useEffect } from 'react'
import { supabase } from "../../lib/supabase"
import { Game } from "../models/Game"

export function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        console.log('Fetching games...')
        const { data, error } = await supabase
          .from('games')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) {
          console.error('Supabase error:', error)
          throw error
        }

        console.log('Games fetched:', data)
        setGames(data || [])
      } catch (error) {
        console.error('Error fetching games:', error)
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchGames()
  }, [])

  return { games, loading, error }
}