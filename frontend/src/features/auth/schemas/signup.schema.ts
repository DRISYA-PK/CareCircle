import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Name must be at least 3 characters'),
    email: z
      .string()
      .email('Please enter a valid email address'),
    phone: z
      .string()
      .regex(/^\+?[\d\s\-()]{10,}$/, 'Phone number must be at least 10 digits'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
 
export type SignUpFormData = z.infer<typeof signUpSchema>;