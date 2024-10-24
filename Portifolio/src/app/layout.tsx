import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portifolio Mateus",
    viewport: 'width=device-width, initial-scale=1.0'
};


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return <html lang="pt-BR">
        <body className={inter.className}>{children}</body>
    </html>
}
