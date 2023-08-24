import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AuthContextProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Shop Online Ecommerce Store",
  description: "Test Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <nav>
            <NavBar />
          </nav>
          <main>{children}</main>
        </AuthContextProvider>
        <footer>
          <Footer />{" "}
        </footer>
      </body>
    </html>
  );
}
