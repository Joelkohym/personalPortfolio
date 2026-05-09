import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joel Koh Yit Ming — Technology Consultant & Product Owner",
  description:
    "Personal portfolio of Joel Koh Yit Ming — Technology Consultant, Product Owner, and Full-Stack Developer based in Singapore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
