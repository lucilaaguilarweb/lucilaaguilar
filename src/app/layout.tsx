import type { Metadata } from "next";
import { Montserrat, Baskervville } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const baskervville = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Lucila Aguilar - Arquitectura Sostenible",
  description:
    "Arquitectura que sana y conecta. Especialistas en construcción sostenible con bambú y materiales naturales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${baskervville.variable} antialiased bg-white`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
