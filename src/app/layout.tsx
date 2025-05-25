import { Inter, Geist, Lexend } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the font weights you want to load
});

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the font weights you want to load
});

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the font weights you want to load
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900 font-sans scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}

