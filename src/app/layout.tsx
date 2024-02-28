import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";


// meta data is set for website, title is visible on the top bar
export const metadata: Metadata = {
  title: "Koinbx",
  description: "Koinbx Real Time database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {/* Here header is converted into a component and being called in the layout file */}
        <Header/>
        {children}
        </body>
    </html>
  );
}
