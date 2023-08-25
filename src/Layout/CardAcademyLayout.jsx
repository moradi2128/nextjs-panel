import React from 'react'

const CardAcademyLayout = ({ title = "", children }) => {
    return (
        <div className='p-5 bg-gray-50/25 border border-gray-100 rounded-3xl shadow-md' >
            {/* === header === */}
            {!!title && <div className='mb-4'>
                <h4 className='text-xl border-b border-black inline'>{title}</h4>
                <div className="border-b border-gray-200" />
            </div>}
            {/* === body === */}
            <div>
                {children}
            </div>
        </div>
    )
}

export default CardAcademyLayout