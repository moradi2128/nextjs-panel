"use client"
import vazirFont from '@/constants/localFonts'
import ReactQueryProviders from '../app/ReactQueryProviders'


const ThemeProvider = ({ children }) => {
    return (
        <html >
            <body
                suppressHydrationWarning={true}
                className={`${vazirFont.variable} font-sans`}>
                <ReactQueryProviders>
                    {children}
                </ReactQueryProviders>
            </body>
        </html>
    )
}

export default ThemeProvider