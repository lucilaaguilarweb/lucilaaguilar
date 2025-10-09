"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PublicationPage from "@/components/PublicationPage";
import LoadingSpinner from "@/components/LoadingSpinner";
import { publicationsData } from "@/data/publicationsData";
import { PublicationImage } from "@/lib/publicationImages";

export default function PublicationDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [images, setImages] = useState<PublicationImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const publication = publicationsData.find((pub) => pub.slug === slug);

  useEffect(() => {
    if (publication && publication.folderPath) {
      fetch(`/api/publication-images?folderPath=${publication.folderPath}`)
        .then((res) => res.json())
        .then((data) => {
          setImages(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error loading images:", err);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [publication]);

  if (!publication) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Publication not found</p>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <PublicationPage publication={publication} images={images} />
      <Footer />
    </div>
  );
}
