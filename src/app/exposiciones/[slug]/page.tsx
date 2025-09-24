import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExhibitionPage from "@/components/ExhibitionPage";
import { exhibitionsData } from "@/data/exhibitionsData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return exhibitionsData.map((exhibition) => ({
    slug: exhibition.slug,
  }));
}

export default async function ExhibitionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const exhibition = exhibitionsData.find(
    (exhibition) => exhibition.slug === slug
  );

  if (!exhibition) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <ExhibitionPage exhibition={exhibition} />
      <Footer />
    </div>
  );
}
