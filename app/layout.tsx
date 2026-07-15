import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider }  from "@/components/providers/ThemeProvider";

export const metadaata: Metadata = {
  title: "M.Firmansyah | AI Engineer",
  description: "AI Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}