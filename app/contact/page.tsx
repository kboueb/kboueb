import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Kani Bouebassihou",
  description:
    "Start a project with Kani Bouebassihou: corporate sites, web apps, e-commerce and CMS rescue. Replies within 48 hours.",
};

export default function ContactPage() {
  return (
    <div className="bg-paper pt-14 dark:bg-ink">
      <ContactSection />
    </div>
  );
}