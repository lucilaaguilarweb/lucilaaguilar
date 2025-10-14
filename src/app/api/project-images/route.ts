import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const folderPath = searchParams.get("folderPath");

  if (!folderPath) {
    return NextResponse.json(
      { error: "folderPath is required" },
      { status: 400 }
    );
  }

  try {
    const imagesDirectory = path.join(
      process.cwd(),
      "public",
      "images",
      "proyectos",
      folderPath
    );

    // Check if directory exists
    if (!fs.existsSync(imagesDirectory)) {
      return NextResponse.json(
        { error: "Directory not found" },
        { status: 404 }
      );
    }

    // Read all files in the directory
    const files = fs.readdirSync(imagesDirectory);

    // Filter for image files and sort them
    const imageFiles = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext);
      })
      .sort((a, b) => a.localeCompare(b))
      .map((filename) => ({
        filename,
        alt: `${folderPath} - ${filename}`,
      }));

    return NextResponse.json(imageFiles);
  } catch (error) {
    console.error("Error reading project images:", error);
    return NextResponse.json(
      { error: "Failed to read images" },
      { status: 500 }
    );
  }
}
