import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow container max-w-7xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
