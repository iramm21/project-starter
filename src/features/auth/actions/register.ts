// features/auth/actions/register.ts
"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function registerWithEmail(email: string, password: string) {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);
}
