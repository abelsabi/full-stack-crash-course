import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cnpspjmmvkyrybtjdrul.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNucHNwam1tdmt5cnlidGpkcnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzAwMjksImV4cCI6MjA2MjgwNjAyOX0.U5rotkpon2HuPIeuP8a9MsYBELGvcMVIlMP2DUf25q0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
