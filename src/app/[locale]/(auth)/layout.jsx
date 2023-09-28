import ThemeProvider from "@/Layout/ThemeProvider";
import "../globals.css";



export const metadata = {
    title: "Next Shop Panel",
    description: "Next.js Course Fronthooks Course",
};

export default function RootLayout({ children }) {
    return (
        <ThemeProvider>
            <main >
                {children}
            </main>
        </ThemeProvider>
    );
}
