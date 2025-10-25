import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://zkzaosnhphksjejkpiga.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpremFvc25ocGhrc2plamtwaWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0MTA2NzEsImV4cCI6MjA3Njk4NjY3MX0.vp9p304O6cs_gk2Cngo1VELcuaM1ao1rAUOigrexyig'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
export default supabase
