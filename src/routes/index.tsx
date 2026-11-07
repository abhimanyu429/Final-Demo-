import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Expertise } from "@/components/site/Expertise";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "AL NASEEM Medical Equipment TR L.L.C — Medical Equipment Trading in Sharjah, UAE";
const description =
  "AL NASEEM MEDICAL EQUIPMENT TR L.L.C is a Sharjah-based medical equipment trading company supporting healthcare professionals with reliable equipment solutions and professional service.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Products />
        <Expertise />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
