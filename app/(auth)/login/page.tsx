import Link from "next/link";

import { AuthCard } from "@/components/auth/auth-card";
import { AuthLayout } from "@/components/auth/auth-layout";
import { LoginForm } from "@/components/auth/login-form";
import { siteConfig } from "@/config/site";

export default function LoginPage() {
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
        title="Welcome back"
        description="Sign in to your account to continue"
      >
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
}