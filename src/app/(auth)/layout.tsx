import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Project Starter",
  description:
    "The project starter for a PSSN(Prisma, Supabase, Shadcn, NextJS) stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fixed inset-0 flex flex-col bg-background text-foreground overflow-hidden">
      <Header />
      <main className="flex-grow container max-w-7xl mx-auto overflow-hidden">
        {children}
      </main>
    </div>
  );
}
