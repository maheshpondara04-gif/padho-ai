import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Padho AI | Learning Gap Detective", description: "Learn concepts, practise, and track progress." };
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}