import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PublicationPage from "@/components/PublicationPage";
import { publicationsData } from "@/data/publicationsData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return publicationsData.map((publication) => ({
    slug: publication.slug,
  }));
}

export default async function PublicationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const publication = publicationsData.find((pub) => pub.slug === slug);

  if (!publication) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <PublicationPage publication={publication} />
      <Footer />
    </div>
  );
}
