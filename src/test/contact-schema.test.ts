import { describe, expect, it } from "vitest";
import { buildEnquiryMailto, contactSchema } from "@/lib/contact-schema";
import { company } from "@/lib/site-content";

const valid = {
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "",
  message: "We would like to discuss a partnership.",
};

describe("contact enquiry form", () => {
  it("accepts an enquiry with name, email and message only", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("requires a name", () => {
    expect(contactSchema.safeParse({ ...valid, name: "" }).success).toBe(false);
  });

  it("rejects an invalid email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects a phone number containing letters", () => {
    expect(contactSchema.safeParse({ ...valid, phone: "call me" }).success).toBe(false);
  });

  it("requires a message of at least 10 characters", () => {
    expect(contactSchema.safeParse({ ...valid, message: "Hi" }).success).toBe(false);
  });

  it("addresses the enquiry email to alnaseemmedicalequipment@gmail.com", () => {
    const href = buildEnquiryMailto(company.email, { ...valid, phone: "+971 50 000 0000" });
    expect(href.startsWith("mailto:alnaseemmedicalequipment@gmail.com?")).toBe(true);
    const body = decodeURIComponent(href.split("body=")[1] ?? "");
    expect(body).toContain("Phone: +971 50 000 0000");
    expect(body).toContain("We would like to discuss a partnership.");
  });
});

describe("company contact details", () => {
  it("uses the clickable phone number tel:+971541474955", () => {
    expect(company.phoneHref).toBe("tel:+971541474955");
  });
});
