import { createClient } from "@supabase/supabase-js";
const URL: string = "https://zwkwdjahfxjnwlcmtzms.supabase.co";
const API_KEY: string =
  " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3a3dkamFoZnhqbndsY210em1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzODUwMzgsImV4cCI6MjA2MDk2MTAzOH0.Kl8KRd1U_Abu6zGjwFemwffGrM0hq4hgNhxXdsMGTxE";
const supabase: any = createClient(URL, API_KEY);
export default supabase;
