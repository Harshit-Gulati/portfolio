"use server";

import { ContactFormBody, EnquiryBody } from "@/types/form";

export const sendDiscordMessage = async (
  body: EnquiryBody | ContactFormBody,
) => {
  try {
    await fetch(process.env.DISCORD_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};
