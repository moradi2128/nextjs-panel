import { useEffect, useState } from "react";
import { getItemAsync, setItemAsync } from "@/constants/DeviceAsyncStorage"

export default function useDarkSide() {
    const themeLocal = getItemAsync("theme")
    const [theme, setTheme] = useState(themeLocal || "light");
    const colorTheme = theme === "dark" ? "light" : "dark";
    useEffect(() => {
        const root = window.document.documentElement;
        // === for tailwind ===
        // root?.classList?.remove(colorTheme);
        // root?.classList?.add(theme)

        // == for daisyUi ===
        root?.setAttribute("data-theme", theme)

        setItemAsync("theme", theme)

    }, [theme, colorTheme])

    return [colorTheme, setTheme]
}