
import SideBar from "@/components/SideBar";
import DashboardContainer from "@/Layout/DashboardContainer";
import ThemeProvider from "@/Layout/ThemeProvider";
import "../globals.css";
import Providers from "../Providers";


export const metadata = {
  title: "پنل کاربر",
  description: "خوش آمدید",
};
export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <Providers>
        <DashboardContainer>
          {/* === body === */}
          <SideBar >{children}</SideBar>
        </DashboardContainer>
      </Providers>
    </ThemeProvider>
  );
}
