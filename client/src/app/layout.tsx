import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VehicleDevX by DevX",
  description: "Professional vehicle price prediction for enterprises",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-black text-gray-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
