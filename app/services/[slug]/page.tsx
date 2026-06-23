import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLayout from "@/components/services/ServiceLayout";
import { getService, getServiceSlugs } from "@/lib/services/index";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service — NexOra Digital Studio" };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return <ServiceLayout content={service} />;
}
