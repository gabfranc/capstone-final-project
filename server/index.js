
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hxjpadxwjxrmijaanuqf.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient('https://hxjpadxwjxrmijaanuqf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4anBhZHh3anhybWlqYWFudXFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3ODY2NDEsImV4cCI6MjAyODM2MjY0MX0.8LcX3x8IVZbkIjVTH6N5fqH3uobjw38vZcTX1fNNWTQ')