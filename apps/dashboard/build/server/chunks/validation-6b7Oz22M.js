import * as z from 'zod';
import { m as mapZodErrorsToTranslations } from './base.svelte-C2lk8LDX.js';

const ForgotPasswordSchema = z.object({
  email: z.email()
});
const ResetPasswordSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  token: z.string()
});
const forgotPasswordValidation = (field) => {
  const result = ForgotPasswordSchema.safeParse(field);
  if (!result.success) {
    return mapZodErrorsToTranslations(result.error);
  }
};
const resetPasswordValidation = (field) => {
  const result = ResetPasswordSchema.safeParse(field);
  if (!result.success) {
    return mapZodErrorsToTranslations(result.error);
  }
};

export { forgotPasswordValidation as f, resetPasswordValidation as r };
//# sourceMappingURL=validation-6b7Oz22M.js.map
