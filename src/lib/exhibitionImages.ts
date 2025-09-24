import fs from "fs";
import path from "path";

export interface ExhibitionImage {
  filename: string;
  category: string;
  sequence: number;
}

export function getExhibitionImages(folderPath: string): ExhibitionImage[] {
  try {
    const imagesDir = path.join(
      process.cwd(),
      "public",
      "images",
      "exposiciones",
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
        // Format: 01-folder-name-sequence.jpg
        const parts = file.replace(/(\.jpg|\.jpeg)$/i, "").split("-");
        const sequence = parseInt(parts[0]) || 0;
        const category = parts.slice(1, -1).join("-") || "general";

        return {
          filename: file,
          category,
          sequence,
        };
      })
      .sort((a, b) => {
        // Sort by sequence number
        return a.sequence - b.sequence;
      });

    return imageFiles;
  } catch (error) {
    console.error(`Error reading exhibition images for ${folderPath}:`, error);
    return [];
  }
}
