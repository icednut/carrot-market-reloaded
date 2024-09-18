"use server";

import { z } from "zod"

const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
)

function checkUsername(username: string) {
  return !username.includes("potatoes")
}

const checkPassword = ({password, confirmPassword}: {password: string, confirmPassword: string}) => 
  password === confirmPassword

// const usernameSchema = z.string().min(3).max(10)
const formSchema = z.object({
  username: z
    .string({
      invalid_type_error: "Username must be a string",
      required_error: "Where is my username?"
    })
    .min(3, "너무 짧습니다. Way too short!")
    .max(20, "너무 길어요. This is too long!")
    .refine(checkUsername, "No potatoes allowed!"),
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
    .min(10, "비밀번호가 너무 짧습니다. Way too short!")
    .regex(passwordRegex, "A password must have lowercase, uppercase, number, and special characters"),
  confirmPassword: z
    .string({
      invalid_type_error: "Confirm Password must be a string",
      required_error: "Where is my confirm password?"
    })
    .min(10, "비밀번호가 너무 짧습니다. Way too short!")
}).refine(checkPassword, {
  message: "Both passwords should be the same",
  path: ["confirmPassword"]
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
    const errorMessage = result.error.flatten()

    console.log(errorMessage)
    return errorMessage
  }
}
