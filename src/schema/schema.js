import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "you need at least 3 characters for username"),
  email: z.string().email("email must contain @ symbol"),
  password: z.string().min(6, " password must be at least  6 characters"),
});
