// features/auth/actions/login.ts
"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function loginWithEmail(email: string, password: string) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
}
