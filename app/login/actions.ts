"use server";

// import { redirect } from "next/navigation";

export async function handleForm(prevState: any, data: FormData) {
  console.log(prevState);

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
    // redirect("/")
  });

  return {
    errors: ["wrong password", "password too short"],
  };
}
