import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xchxnhmbdwdtqullamia.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjaHhuaG1iZHdkdHF1bGxhbWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4NDg1MTIsImV4cCI6MTk5NDQyNDUxMn0.yAD4nhKXDD4XRtriKXwf7lId9w6dgMxaMrWKXke_zlk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
