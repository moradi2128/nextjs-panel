import clsx from 'clsx'
import React from 'react'

const CardAcademyLayout = ({ title = "", children, className }) => {
    return (
        <div className={clsx('p-5 bg-gray-50/25 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-md', className)} >
            {/* === header === */}
            {!!title && <div className='mb-4'>
                <h4 className='text-xl inline'>{title}</h4>
                <div className="border  border-gray-200 dark:border-gray-600 mt-4" />
            </div>}
            {/* === body === */}
            <div>
                {children}
            </div>
        </div>
    )
}

export default CardAcademyLayout