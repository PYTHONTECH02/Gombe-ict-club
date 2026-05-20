import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mrlftterlytsjiczkcgy.supabase.co";
const supabaseAnonKey = "sb_publishable_CUnnF6X8Hi3NkPq_XtiKiA_TyhDWQHH";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

export async function signInWithGoogle() {
  await supabase.auth.signInWithOAuth({
    provider: "google"
  });
}
