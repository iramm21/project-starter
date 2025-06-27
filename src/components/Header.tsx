"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="w-full border-b border-muted/20 bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold cursor-pointer">Your App Name</h1>
        </Link>

        <nav className="flex items-center gap-4">
          <Button asChild size="sm" variant="ghost">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link href="/register">Register</Link>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
