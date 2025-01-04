// lib/supabase.ts

import { createClient } from '@supabase/supabase-js'

// URL y clave del proyecto en Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://tu-supabase-url.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || 'tu-supabase-key'

// Crear cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseKey)