import vazirFont from '@/constants/localFonts'
import Providers from '@/pages/Providers'
import React from 'react'

const ThemeProvider = ({ children }) => {
    return (
        <html lang="fa" dir="rtl">
            <body
                suppressHydrationWarning={true}
                className={`${vazirFont.variable} font-sans`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}

export default ThemeProvider