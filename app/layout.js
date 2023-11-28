import { Outfit } from "next/font/google";
import "./globals.css";
import Layout from "@/layout/root";

const OUTFIT = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Punjab Aviation",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${OUTFIT.className}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
