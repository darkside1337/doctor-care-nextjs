import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ActiveLinkProvider } from "@/components/providers/ActiveLinkProvider";

//

export const metadata: Metadata = {
  title: "Doctor Care |",
  description: "Doctor Care | Landing Page",
};

const dmsans = DM_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

//

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmsans.className} relative scroll-smooth bg-primary-green-light antialiased`}
      >
        <ActiveLinkProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ActiveLinkProvider>
      </body>
    </html>
  );
}
