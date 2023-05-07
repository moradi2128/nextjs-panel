import vazirFont from "@/constants/localFonts";
import "./globals.css";

export const metadata = {
  title: "Next Shop Panel",
  description: "Next.js Course Fronthooks Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={`${vazirFont.variable} font-sans`}>{children}</body>
    </html>
  );
}
