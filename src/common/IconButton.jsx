"use client";
import clsxm from '@/lib/clsxm';
import { PersianNumbers } from '@/utils/toPersianNumber';
import React from 'react'

const IconButton = React.forwardRef((props
    //     {
    //     className,
    //     disabled: buttonDisabled,
    //     isLoading,
    //     variant = 'primary',
    //     isDarkBg = false,
    //     icon: Icon,
    //     children,
    //     ...rest
    // }
    ,
    ref) => {
    const { children, className, onClick, badge = false, badgeNumber = null } = props
    return (
        <button
            className={clsxm(`relative min-w-[50px] min-h-[50px] cursor-pointer  rounded-2xl flex justify-center items-center border border-slate-100 shadow-lg
            hover:bg-slate-50 transition-all duration-200 hover:scale-105
            `, className)}
            onClick={onClick}
        >
            {badge && <div className={`rounded-full bg-red-500 absolute flex justify-center items-center min-w-[5px] min-h-[5px] top-[5px] left-[5px]
           `} >
            </div>}
            {!!badgeNumber && <div className={`rounded-full bg-red-500 absolute flex justify-center items-center min-w-[20px] min-h-[20px] top-[-7px] left-[-7px]
           `} >
                <span className='text-white text-[10px] mt-1'>{badgeNumber > 3 ? "۳+" : PersianNumbers(badgeNumber)}</span>
            </div>}
            {children}
        </button>
    )
    // const disabled = isLoading || buttonDisabled;
    // return (
    //     <button
    //         ref={ref}
    //         type='button'
    //         disabled={disabled}
    //         className={clsxm(
    //             'inline-flex items-center justify-center rounded font-medium',
    //             'focus-visible:ring-primary-500 focus:outline-none focus-visible:ring',
    //             'shadow-sm',
    //             'transition-colors duration-75',
    //             'min-h-[28px] min-w-[28px] p-1 md:min-h-[34px] md:min-w-[34px] md:p-2',
    //             //#region  //*=========== Variants ===========
    //             [
    //                 variant === 'primary' && [
    //                     'bg-primary-500 text-white',
    //                     'border-primary-600 border',
    //                     'hover:bg-primary-600 hover:text-white',
    //                     'active:bg-primary-700',
    //                     'disabled:bg-primary-700',
    //                 ],
    //                 variant === 'outline' && [
    //                     'text-primary-500',
    //                     'border-primary-500 border',
    //                     'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
    //                     isDarkBg &&
    //                     'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
    //                 ],
    //                 variant === 'ghost' && [
    //                     'text-primary-500',
    //                     'shadow-none',
    //                     'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
    //                     isDarkBg &&
    //                     'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
    //                 ],
    //                 variant === 'light' && [
    //                     'bg-white text-gray-700',
    //                     'border border-gray-300',
    //                     'hover:text-dark hover:bg-gray-100',
    //                     'active:bg-white/80 disabled:bg-gray-200',
    //                 ],
    //                 variant === 'dark' && [
    //                     'bg-gray-900 text-white',
    //                     'border border-gray-600',
    //                     'hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700',
    //                 ],
    //             ],
    //             //#endregion  //*======== Variants ===========
    //             'disabled:cursor-not-allowed',
    //             isLoading &&
    //             'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
    //             className
    //         )}
    //         {...rest}
    //     >
    //         {isLoading && (
    //             <div
    //                 className={clsxm(
    //                     'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    //                     {
    //                         'text-white': ['primary', 'dark'].includes(variant),
    //                         'text-black': ['light'].includes(variant),
    //                         'text-primary-500': ['outline', 'ghost'].includes(variant),
    //                     }
    //                 )}
    //             >
    //                 <ArrowPathIcon className='animate-spin' />
    //             </div>
    //         )}
    //         {children}
    //     </button>
    // );
})

export default IconButton