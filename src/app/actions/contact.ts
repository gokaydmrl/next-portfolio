"use server";
import { db } from "../db/drizzle"; // wherever you export your drizzle db instance
import { messages } from "../db/schema";

export async function submitMessage({
  email,
  messageOfClient,
}: {
  email: string;
  messageOfClient: string;
}) {
  if (!email || !messageOfClient) {
    return { message: "Missing fields", status: 400 };
  }
  try {
    await db
      .insert(messages)
      .values({ email: email, message: messageOfClient });
    return { message: "Success", status: 201 };
  } catch (err) {
    console.error(err);
    return new Response("Error saving message", { status: 500 });
  }
}
