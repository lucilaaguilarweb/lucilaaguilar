"use client";

import { useParams } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PublicationPage from "@/components/PublicationPage";
import { publicationsData } from "@/data/publicationsData";

export default function PublicationDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const publication = publicationsData.find((pub) => pub.slug === slug);

  if (!publication) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Publication not found</p>
      </div>
    );
  }

  // For now, we'll just show the cover image to avoid serverless function size issues
  // Gallery images can be added back later with a different approach
  const images: { filename: string; alt: string }[] = [];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PublicationPage publication={publication} images={images} />
      <Footer />
    </div>
  );
}
