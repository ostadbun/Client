import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LayoutClient from "./LayoutClient";
import { DirectionProvider } from "@base-ui/react";

const arad = localFont({
  src: "../../public/fonts/arad/AradVF.woff2",
  variable: "--font-arad",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${arad.className} antialiased`}>






        <DirectionProvider direction="rtl">

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange>
            <LayoutClient>{children}</LayoutClient>
          </ThemeProvider>



        </DirectionProvider>

      </body>
    </html>
  );
}