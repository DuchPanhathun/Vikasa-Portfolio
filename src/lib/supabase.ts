import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for authentication
export interface User {
  id: string
  email: string
  user_metadata?: {
    role?: string
  }
}

export interface AuthState {
  user: User | null
  loading: boolean
}
