import { sendDiscordMessage } from "@/app/actions/discord";
import { ContactFormData } from "@/types/form";

export const enquiryMessage = async (email: string) => {
  const body = {
    username: email,
    avatar_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLM5baTqWyWk4AyrdaK1OnddkTAq4SraEWzw&s",
    content: email,
    embeds: [
      {
        fields: [
          {
            name: "Email",
            value: email,
            inline: true,
          },
        ],
      },
    ],
  };

  try {
    const res = await sendDiscordMessage(body);

    return res;
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

export const contactFormMessage = async (formData: ContactFormData) => {
  const body = {
    username: formData.name,
    avatar_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLM5baTqWyWk4AyrdaK1OnddkTAq4SraEWzw&s",
    content: formData.message,
    embeds: [
      {
        fields: [
          {
            name: "Name",
            value: formData.name,
            inline: true,
          },
          {
            name: "Email",
            value: formData.email,
            inline: true,
          },
        ],
      },
    ],
  };

  try {
    const res = await sendDiscordMessage(body);

    return res;
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};
