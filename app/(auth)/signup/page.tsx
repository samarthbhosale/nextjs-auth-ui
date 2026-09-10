import Link from "next/link";

import { AuthCard } from "@/components/auth/auth-card";
import { AuthLayout } from "@/components/auth/auth-layout";
import { SignupForm } from "@/components/auth/signup-form";
import { siteConfig } from "@/config/site";

export default function SignupPage() {
  return (
    <AuthLayout>
      <div className="mb-6 text-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          {siteConfig.name}
        </Link>
      </div>

      <AuthCard
        title="Create an account"
        description="Get started by creating your account"
      >
        <SignupForm />
      </AuthCard>
    </AuthLayout>
  );
}