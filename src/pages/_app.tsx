import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "src/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "700"],
});

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <div className="flex flex-col min-h-screen transition-colors duration-300 bg-gray-900">
    <style jsx global>{`
      :root {
        --font-montserrat: ${montserrat.style.fontFamily};
      }
    `}</style>
    <main className="container grow px-4 mx-auto mb-auto lg:px-32">
      <Component {...pageProps} />
    </main>
  </div>
);

export default MyApp;
