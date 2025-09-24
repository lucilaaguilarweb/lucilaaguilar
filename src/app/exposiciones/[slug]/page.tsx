import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExhibitionPage from "@/components/ExhibitionPage";
import { exhibitionsData } from "@/data/exhibitionsData";
import { getExhibitionImages } from "@/lib/exhibitionImages";

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

  // Get all images dynamically from the exhibition folder
  const exhibitionImages = getExhibitionImages(exhibition.folderPath);

  return (
    <div className="min-h-screen">
      <Navigation />
      <ExhibitionPage exhibition={exhibition} images={exhibitionImages} />
      <Footer />
    </div>
  );
}
