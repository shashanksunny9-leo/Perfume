import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "AURÉVAN | The Art of Being Remembered",
  description: "Modern Indian fragrance. Everyday luxury. Discover the AURÉVAN collection."
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}