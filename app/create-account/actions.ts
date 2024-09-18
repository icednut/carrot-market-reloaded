"use server";

import { z } from "zod"

// const usernameSchema = z.string().min(3).max(10)
const formSchema = z.object({
  username: z
    .string({
      invalid_type_error: "Username must be a string",
      required_error: "Where is my username?"
    })
    .min(3, "너무 짧습니다. Way too short!")
    .max(20, "너무 길어요. This is too long!"),
  email: z
    .string({
      invalid_type_error: "Email must be a string",
      required_error: "Where is my email?"
    })
    .email("이메일은 필수입니다. Email is required"),
  password: z
    .string({
      invalid_type_error: "Password must be a string",
      required_error: "Where is my password?"
    })
    .min(10, "비밀번호가 너무 짧습니다. Way too short!"),
  confirmPassword: z
    .string({
      invalid_type_error: "Confirm Password must be a string",
      required_error: "Where is my confirm password?"
    })
    .min(10, "비밀번호가 너무 짧습니다. Way too short!")
})

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword")
  }

  const result = formSchema.safeParse(data)
  if (!result.success) {
    return result.error.flatten()
  }
}
