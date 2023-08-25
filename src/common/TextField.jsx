import { InformationCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const TextField = React.forwardRef((props, ref) => {
    const { type = "text", label, name, value, onChange, placeholder = "", onFocus, readOnly, className,containerStyle, errorMessage, onBlur } = props
    return (
        <div className={containerStyle}>
            {label && <label htmlFor={name} className="label text-slate-500">{label}</label>}
            <input
                autoComplete='off'
                name={name}
                id={name}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                onFocus={onFocus}
                readOnly={readOnly}
                className={`textField__input ${className} ${errorMessage && "border-red-500 bg-red-50"}`}
            />
            <div className='flex items-center gap-1 mt-1 mr-1 min-h-[20px]'>
                {
                    errorMessage &&
                    <>
                        <InformationCircleIcon className='w-5 h-5 text-red-500' />
                        <span className='text-red-500 text-xs'>{errorMessage}</span>
                    </>
                }
            </div>
        </div>
    )
})

export default TextField