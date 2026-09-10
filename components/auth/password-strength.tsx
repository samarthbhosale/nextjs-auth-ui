"use client";

interface PasswordStrengthProps {
  password: string;
}

function getPasswordStrength(password: string) {
  if (!password) {
    return {
      score: 0,
      label: "",
    };
  }

  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) {
    return {
      score,
      label: "Weak",
    };
  }

  if (score <= 4) {
    return {
      score,
      label: "Medium",
    };
  }

  return {
    score,
    label: "Strong",
  };
}

export function PasswordStrength({
  password,
}: PasswordStrengthProps) {
  const { score, label } = getPasswordStrength(password);

  if (!password) {
    return null;
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full ${
              index < score
                ? "bg-primary"
                : "bg-muted"
            }`}
          />
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        Password strength:{" "}
        <span className="font-medium text-foreground">
          {label}
        </span>
      </p>
    </div>
  );
}