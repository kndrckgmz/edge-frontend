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
          <div className="w-full min-h-screen flex flex-col items-center justify-center">
            <div className="w-4xl max-w-full flex flex-col items-center">
              {children}
            </div>
          </div>
          <Nav />
        </AuthProvider>
      </body>
    </html>
  );
}
