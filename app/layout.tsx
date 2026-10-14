import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Padho AI | Learning Gap Detective",
  description:
    "Learn smarter with Padho AI. Discover learning gaps, practise fractions, and track your progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
