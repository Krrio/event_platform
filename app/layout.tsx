import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Clerk } from "@clerk/nextjs/server";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Noce Saunowe",
  description: "Zarezerwuj to czego pragnie Twoje ciało",
  icons: {
    icon: '/assets/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
