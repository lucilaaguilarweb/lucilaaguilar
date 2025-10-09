import { NextRequest, NextResponse } from "next/server";
import { getPublicationImages } from "@/lib/publicationImages";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const folderPath = searchParams.get("folderPath");

  if (!folderPath) {
    return NextResponse.json(
      { error: "folderPath parameter is required" },
      { status: 400 }
    );
  }

  try {
    const images = getPublicationImages(folderPath);
    return NextResponse.json(images);
  } catch (error) {
    console.error("Error loading publication images:", error);
    return NextResponse.json(
      { error: "Failed to load images" },
      { status: 500 }
    );
  }
}

