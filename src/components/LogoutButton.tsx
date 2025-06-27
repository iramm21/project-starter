"use client";

import { Button } from "@/components/ui/button";
import { startTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logout } from "@/features/auth/actions/logout";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    startTransition(async () => {
      try {
        await logout();
        toast.success("Logged out!");
        router.push("/login"); // or wherever you want to redirect
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(`Logout failed: ${error.message}`);
        } else {
          toast.error("Logout failed: Unknown error");
        }
      }
    });
  }

  return (
    <Button variant="outline" onClick={handleLogout}>
      Logout
    </Button>
  );
}
