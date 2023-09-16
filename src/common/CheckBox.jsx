import React from 'react'

const CheckBox = ({
    label,
    name,
    id,
    checked,
    value,
    onChange }) => {
    return (
        <div className='flex flex-row items-center'>
            <input
                type="checkbox"
                name={name}
                id={id}
                checked={checked}
                value={value}
                onChange={onChange}
                className="checkbox checkbox-primary checkbox-sm accent-primary-900 dark:accent-primary-600"
            />
            <label htmlFor={id} className="cursor-pointer mx-2 font-bold dark:text-slate-300">{label}</label>
        </div>
    )
}

export default CheckBox