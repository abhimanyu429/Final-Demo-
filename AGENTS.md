## Project rules
- All editable company copy and placeholders live in `src/lib/site-content.ts`; components read from it so content can change without touching layout.
- The site is one scrolling page (`src/routes/index.tsx`) composed of section components in `src/components/site/`, linked by hash anchors — the user asked for a single page.
- Contact form validation lives in `src/lib/contact-schema.ts` (zod) and is covered by `src/test/contact-schema.test.ts`.
- With no backend connected, the contact form hands off via a prefilled `mailto:` link and never claims the enquiry was received — the site must not overstate delivery.
