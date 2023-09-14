"use client"
import useDarkSide from '@/hooks/useDarkSide';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useState } from 'react'

const ToggleThemeMode = () => {
    const [colorTheme, setTheme] = useDarkSide()
    const [darkMode, setDarkMode] = useState(colorTheme === "light");
    const onChangeHandle = (e) => {
        setTheme(colorTheme)
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
    return (
        <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={onChangeHandle} checked={darkMode} />
            {/* sun icon */}
            <SunIcon className="swap-off  w-6 h-6" />
            {/* moon icon */}
            <MoonIcon className="swap-on  w-6 h-6" />
        </label>
    )
}

export default ToggleThemeMode