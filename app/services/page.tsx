import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTAStrip from "@/components/home/CTAStrip";
import ServiceHubGrid from "@/components/services/ServiceHubGrid";

export const metadata: Metadata = {
  title: "Services — NexOra Digital Studio",
  description:
    "Engineering-led services for product development, AI integration, cloud architecture, IoT systems, and DevOps — built by a UK digital product studio.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHubGrid />
        <CTAStrip />
        <Footer />
      </main>
    </>
  );
}
