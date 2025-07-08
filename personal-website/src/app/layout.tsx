// src/app/layout.tsx
import "../styles/globals.css";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
