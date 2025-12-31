import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./webcomp/Navbar";
import Footer from "./webcomp/Footer";
import Providers from "./providers"

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata = {
   title: "BHOOMI INDIA",
   description: "BHOOMI INDIA is a Dharuhera, Delhi NCR based company, incorporated in 2023 and led by S K YADAV along with his team of technically advanced and expert professionals. Bhoomi has diversified into different business verticals and services for the industries.",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            <Providers>
               <Navbar />
               {children}
               <Footer />
            </Providers>
         </body>
      </html>
   );
}
