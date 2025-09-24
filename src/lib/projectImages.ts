import fs from "fs";
import path from "path";

export interface ProjectImage {
  filename: string;
  category: string;
  sequence: number;
}

export function getProjectImages(folderPath: string): ProjectImage[] {
  try {
    const imagesDir = path.join(
      process.cwd(),
      "public",
      "images",
      "proyectos",
      folderPath
    );

    if (!fs.existsSync(imagesDir)) {
      return [];
    }

    const files = fs.readdirSync(imagesDir);
    const imageFiles = files
      .filter(
        (file) =>
          file.toLowerCase().endsWith(".jpg") ||
          file.toLowerCase().endsWith(".jpeg")
      )
      .map((file) => {
        // Parse filename to extract category and sequence
        // Format: {project-name}-{category}-{sequence}.jpg
        const parts = file.replace(".jpg", "").split("-");
        const sequence = parseInt(parts[parts.length - 1]) || 0;
        const category = parts.slice(1, -1).join("-") || "general";

        return {
          filename: file,
          category,
          sequence,
        };
      })
      .sort((a, b) => {
        // Sort by category first, then by sequence
        if (a.category !== b.category) {
          return a.category.localeCompare(b.category);
        }
        return a.sequence - b.sequence;
      });

    return imageFiles;
  } catch (error) {
    console.error(`Error reading images for project ${folderPath}:`, error);
    return [];
  }
}
