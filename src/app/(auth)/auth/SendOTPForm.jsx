import Button from '@/common/Button'
import TextField from '@/common/TextField'
import { PersianNumbers } from '@/utils/toPersianNumber'
import React from 'react'


const SendOTPForm = ({ phoneNumber, onChange, onBlur, onFocus, onSubmit, isLoading, errorMessage }) => {
    return (
        <div className='w-full'>
            <form className='space-y-6 min-h-[300px]' onSubmit={onSubmit}>
                <h2 className='font-bold text-lg '>ورود | ثبت نام</h2>
                <TextField
                    label="شماره موبایل"
                    placeholder={PersianNumbers("0912345678")}
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={onChange}
                    className="text-left"
                    errorMessage={errorMessage}
                    onBlur={onBlur}
                    onFocus={onFocus}
                />
                <Button type="submit" className='w-full' isLoading={isLoading}>ارسال کد تایید</Button>
            </form>
        </div>
    )
}

export default SendOTPForm