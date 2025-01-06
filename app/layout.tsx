"use client"
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

import AppSidebar from "@/components/app-sidebar";
import { useState } from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Provider from "@/components/Provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <head>
        <title>Movie</title>
        <meta name="description" content="English Movie" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
        <SidebarProvider defaultOpen={false}>
          <Provider>
            <AppSidebar />
            <SidebarInset>
              <div className="overflow-hidden w-full h-full">{children}</div>
            </SidebarInset>
          </Provider>
        </SidebarProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
