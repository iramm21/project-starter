import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import { RegisterForm } from "@/features/auth/components/register-form";

export default function RegisterPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left side: Logo and form */}
      <div className="flex flex-col gap-6 p-6 md:p-10">
        {/* Logo */}
        <div className="flex justify-center md:justify-start items-center gap-2">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold text-lg text-primary"
          >
            <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="h-5 w-5" />
            </div>
            Company Inc.
          </a>
        </div>

        {/* Form container */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <RegisterForm />
          </div>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="relative hidden lg:block">
        <Image
          src="/auth.jpg"
          alt="Decorative image"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
