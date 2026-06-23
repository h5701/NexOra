import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { servicePages, servicePagesBySlug } from "@/lib/services/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePagesBySlug[slug];

  if (!service) {
    return { title: "Service — NexOra Digital Studio" };
  }

  return {
    title: service.meta.title,
    description: service.meta.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicePagesBySlug[slug];

  if (!service) {
    notFound();
  }

  return <ServicePage content={service} />;
}
