export type EnquiryBody = {
  username: string;
  avatar_url: string;
  content: string;
  embeds: {
    fields: {
      name: string;
      value: string;
      inline: boolean;
    }[];
  }[];
};

export type ContactFormBody = {
  username: string;
  avatar_url: string;
  content: string;
  embeds: {
    fields: {
      name: string;
      value: string;
      inline: boolean;
    }[];
  }[];
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};
