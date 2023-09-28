import clsxm from '@/lib/clsxm'
import React from 'react'

const DropdownContent = ({ children, tabIndex, className = "", dir }) => {
    return (
        <ul
            tabIndex={tabIndex}
            className={
                clsxm(`${dir == "rtl" ? "left-0" : "right-0"}`,
                    "dropdown-content z-[1] menu p-2 shadow-light bg-base-100 dark:bg-slate-900 rounded-box mt-2",
                    className
                )
            }>
            {children}
        </ul>
    )
}

export default DropdownContent