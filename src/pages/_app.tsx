import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "src/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <div className="flex flex-col min-h-screen transition-colors duration-300 bg-gray-900 antialiased">
    <style jsx global>{`
      :root {
        --font-inter: ${inter.style.fontFamily};
      }
    `}</style>
    <main className="container grow px-4 mx-auto mb-auto lg:px-32">
      <Component {...pageProps} />
    </main>
  </div>
);

export default MyApp;
