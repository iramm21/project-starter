import { Sidebar } from "@/components/PrivateSidebar";
import { Header } from "@/components/PrivateHeader";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-6 bg-muted">{children}</main>
      </div>
    </div>
  );
}
