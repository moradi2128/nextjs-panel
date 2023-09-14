import React from 'react'

const RadioInput = ({
    label,
    name,
    id,
    checked,
    value,
    onChange }) => {
    return (
        <div className="flex flex-row items-center">
            <input
                type="radio"
                name={name}
                id={id}
                checked={checked}
                value={value}
                onChange={onChange}
                className="radio radio-primary radio-sm"
            />
            <label htmlFor={id} className="cursor-pointer mx-2 font-bold dark:text-slate-300">{label}</label>
        </div>
    )
}

export default RadioInput