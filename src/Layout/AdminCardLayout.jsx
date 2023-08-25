import React from 'react'

const AdminCardLayout = ({ title, callToAction, children }) => {
    return (
        <section className='border border-gray-100 h-full rounded-3xl py-4 px-6'>
            {/* === Header === */}
            <div className='flex flex-row justify-between items-center mb-3'>
                <h4 className='font-bold text-lg'>{title}</h4>
                {callToAction}
            </div>
            {children}
        </section>
    )
}

export default AdminCardLayout