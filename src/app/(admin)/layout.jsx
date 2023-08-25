
import DashboardHeader from "@/components/DashboardHeader";
import SideBar from "@/components/SideBar";
import vazirFont from "@/constants/localFonts";
import { Toaster } from "react-hot-toast";
import "../globals.css";
import Providers from "../Providers";

export const metadata = {
  title: "پنل ادمین",
  description: "خوش آمدید",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${vazirFont.variable} font-sans`}>
        <Providers>
          <Toaster />
          {/* === body === */}
          <div className="block bg-primary-100/30 h-screen">
            <SideBar adminPage >{children}</SideBar>
          </div>
        </Providers>
      </body>
    </html>
  );
}
