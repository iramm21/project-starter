"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { LogoutButton } from "@/features/auth/components/LogoutButton";
import type { User, Session, AuthChangeEvent } from "@supabase/auth-js";

export function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) console.error("Session fetch error:", error);
      setUser(data.session?.user ?? null);
      setIsMounted(true);
      console.log("Session data", data);
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (!isMounted) return null;

  return (
    <header className="w-full border-b border-muted/20 bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold cursor-pointer">Your App Name</h1>
        </Link>

        <nav className="flex items-center gap-4">
          {!user ? (
            <>
              <Button asChild size="sm" variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link href="/register">Register</Link>
              </Button>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="outline">
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogoutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
