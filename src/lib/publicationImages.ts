import fs from "fs";
import path from "path";

export interface PublicationImage {
  filename: string;
  alt: string;
}

export function getPublicationImages(folderPath: string): PublicationImage[] {
  // Handle web publications that don't have image folders
  if (!folderPath) {
    return [];
  }

  const imagesDir = path.join(process.cwd(), "public", "images", folderPath);

  try {
    // Check if directory exists
    if (!fs.existsSync(imagesDir)) {
      console.warn(`Images directory not found: ${imagesDir}`);
      return [];
    }

    const filenames = fs.readdirSync(imagesDir);
    const imageFiles = filenames
      .filter((name) => /\.(jpg|jpeg|png|gif)$/i.test(name))
      .sort((a, b) => {
        // Extract numbers from filenames for proper sorting
        const numA = parseInt(a.split("-")[0]);
        const numB = parseInt(b.split("-")[0]);
        return numA - numB;
      })
      .map((filename) => ({
        filename,
        alt: filename.replace(/\.[^/.]+$/, "").replace(/-/g, " "),
      }));

    return imageFiles;
  } catch (error) {
    console.error(`Error reading images from ${imagesDir}:`, error);
    return [];
  }
}
