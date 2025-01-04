import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase environment variables are missing or undefined:', { supabaseUrl, supabaseKey })
  throw new Error('Supabase environment variables are missing or undefined')
}

export const supabase = createClient(supabaseUrl, supabaseKey)