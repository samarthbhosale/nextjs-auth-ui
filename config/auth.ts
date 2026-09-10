export const authConfig = {
  features: {
    forgotPassword: true,
    emailVerification: true,
    passwordStrength: true,
    socialLogin: true,
  },

  socialProviders: {
    google: true,
    github: true,
  },
} as const;