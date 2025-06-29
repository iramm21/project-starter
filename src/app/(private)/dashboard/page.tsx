// app/dashboard/page.tsx
import prisma from "@/lib/prisma";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser(); // ✅ Secure method

  if (!user) {
    return <p>Please log in to see your dashboard.</p>;
  }

  const userProfile = await prisma.userProfile.findUnique({
    where: { authUserId: user.id },
  });

  if (!userProfile) {
    return <p>User profile not found.</p>;
  }

  return (
    <div>
      <h2>Your Profile Info</h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Email:</strong> {userProfile.email}
        </li>
        <li>
          <strong>First Name:</strong> {userProfile.firstName ?? "N/A"}
        </li>
        <li>
          <strong>Last Name:</strong> {userProfile.lastName ?? "N/A"}
        </li>
        <li>
          <strong>Phone:</strong> {userProfile.phone ?? "N/A"}
        </li>
        <li>
          <strong>Address:</strong> {userProfile.address ?? "N/A"}
        </li>
      </ul>
    </div>
  );
}
