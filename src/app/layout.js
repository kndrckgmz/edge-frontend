import { Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navbar";
import { AuthProvider } from '../context/AuthContext';

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "EDGE",
  description: "Payments Made Simple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfitSans.className} antialiased`}>
        <AuthProvider>
          {children}
          <Nav />
        </AuthProvider>
      </body>
    </html>
  );
}
