import clsx from 'clsx'
import React from 'react'

const SectionLayout = (props) => {
    const { children, label, LabelIcon, link, className } = props
    return (
        <section className={clsx("space-y-5 mt-5", className)}>
            <div className='flex flex-row items-baseline justify-between w-full' >
                <div className='flex flex-row gap-2'>
                    {LabelIcon && <LabelIcon className="w-5 h-5" />}
                    <h1 className='text-xl font-extrabold'>{label}</h1>
                </div>
                {link}
            </div>
            {children}
        </section>
    )
}

export default SectionLayout