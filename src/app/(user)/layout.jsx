import Footer from "@/components/Footer";
import ThemeProvider from "@/Layout/ThemeProvider";
import "../globals.css";
import Header from "../Header";

export const metadata = {
  title: "Next Shop Panel",
  description: "Next.js Course Fronthooks Course",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      {/* === Header === */}
      <Header />
      {/* === body === */}
      <main>
        {children}
      </main>
      <Footer />
    </ThemeProvider >
  );
}
