import { NextRequest, NextResponse } from "next/server";
import { getProjectImages } from "@/lib/projectImages";

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
    const images = getProjectImages(folderPath);
    return NextResponse.json(images);
  } catch (error) {
    console.error("Error loading project images:", error);
    return NextResponse.json(
      { error: "Failed to load images" },
      { status: 500 }
    );
  }
}
