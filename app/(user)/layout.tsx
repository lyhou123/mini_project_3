import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavbarComponent from "@/components/navbar/navbar";
import FooterComponent from "@/components/footer/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mini Project Prepare for final Project ",
  description: "Generated by create next app",
  openGraph:{
      images:"https://istad.co/resources/img/CSTAD_120.png",
      description:"This is a mini project to prepare for the final project."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header>
        <NavbarComponent/>
      </header>
      {children}
      <footer>
          <FooterComponent/>
      </footer>
      </body>
    </html>
  );
}
