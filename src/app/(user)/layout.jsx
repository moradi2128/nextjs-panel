import Footer from "@/components/Footer";
import vazirFont from "@/constants/localFonts";
import { Toaster } from "react-hot-toast";
import "../globals.css";
import Header from "../Header";
import Providers from "../Providers";

export const metadata = {
  title: "Next Shop Panel",
  description: "Next.js Course Fronthooks Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${vazirFont.variable} font-sans`}>
        <Providers>
          <Toaster />
          {/* === Header === */}
          <Header />
          {/* === body === */}
          <div>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
