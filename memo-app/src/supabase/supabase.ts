import { createClient } from "@supabase/supabase-js";

const supabaseURL = 'https://kdwuvrblqggiojkvqfcu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtkd3V2cmJscWdnaW9qa3ZxZmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1MTE4ODQsImV4cCI6MjA2NzA4Nzg4NH0.lpcDJnfV0pohSBHIbqg3IfzlND9JqyEXxDto6i5zrPU';
// export const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;


export const supabase = createClient(supabaseURL, supabaseKey);