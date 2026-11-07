import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name" })
    .max(100, { message: "Name must be under 100 characters" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email address" })
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),
  phone: z
    .string()
    .trim()
    .max(25, { message: "Phone number is too long" })
    .refine((v) => v === "" || /^[+()\-\s\d]{7,25}$/.test(v), {
      message: "Please enter a valid phone number",
    }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please write at least 10 characters" })
    .max(2000, { message: "Message must be under 2000 characters" }),
});

export type ContactValues = z.infer<typeof contactSchema>;

export const contactDefaults: ContactValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

/** Builds a mailto link addressed to the company with the enquiry pre-filled. */
export function buildEnquiryMailto(to: string, values: ContactValues): string {
  const subject = `Website enquiry from ${values.name.trim()}`;
  const body = [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    values.phone.trim() ? `Phone: ${values.phone.trim()}` : null,
    "",
    values.message.trim(),
  ]
    .filter((line) => line !== null)
    .join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
