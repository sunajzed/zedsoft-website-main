"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
import Head from "next/head"; // Import the Head component
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta
          name="title"
          content="ZedSoftTech | IT Company in Malappuram, Kerala | Top Kerala Web Services"
        />
        <meta
          name="description"
          content="ZedSoftTech, IT company promote online presence of your business with website creation, app development, and digital marketing in Malappuram, Kerala."
        />
        <meta
          name="keywords"
          content="zedsofttech it service company in malappuram, top it services companies in kerala, major web services, best web service webistes in kerala, zedsofttech web service company in malappuram, best it company web services, web service it company in kerala, top web development services in kerala, top web services in kerala, top web service website in kerala, top website creation company in kerala, top digital marketing services in kerala, zedsofttech it service company in kerala, app development services, digital marketing, website creation, top web service it company in kerala, top app development website, portfolio creation services, major web services in kerala, best it company in malappuram, top web service it company in malappuram, top app development services in malappuram, best website creation services in malappuram, top web services in malappuram, zedsofttech web service company in kerala, top digital marketing services in malappuram, online web services in malappuram, best it company web services in malappuram, top portfolio services in malappuram, best web service company in malappuram, top app development company in kerala, best app development company in malappuram, top website creation company in kerala, best website creation company in malappuram, top digital marketing company in kerala, best digital marketing company in malappuram"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <title>
          ZedSoftTech | IT Company in Malappuram, Kerala | Top Kerala Web
          Services
        </title>
      </Head>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
