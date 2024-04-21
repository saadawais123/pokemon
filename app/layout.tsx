import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import React from "react";

import Provider from "./Provider";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon",
  description: "Pokemon Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Header />
          <Provider>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
