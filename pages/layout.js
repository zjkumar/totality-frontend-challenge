

export const metadata = {
  title: "Totality Rental Platform",
  description: "A platform where you can find your dream house",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
