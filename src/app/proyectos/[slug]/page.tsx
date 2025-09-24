import { notFound } from "next/navigation";
import { projectsData } from "@/data/projectsData";
import ProjectPage from "@/components/ProjectPage";
import { getProjectImages } from "@/lib/projectImages";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData
    .filter((project) => project.slug && typeof project.slug === "string")
    .map((project) => ({
      slug: project.slug,
    }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Get all images for this project
  const projectImages = getProjectImages(project.folderPath);

  return <ProjectPage project={project} images={projectImages} />;
}
