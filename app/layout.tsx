import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cars Hub",
  description: "Discover the best sport cars in the world.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
