import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Totality Rental Platform",
  description: "A platform where you can find your dream house",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
