"use client"
import Button from '@/common/Button'
import TextField from '@/common/TextField'
import { completeProfile } from '@/services/authServices'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const CompleteProfile = () => {
    const router = useRouter()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const { data, isLoading, error, mutateAsync } = useMutation({ mutationFn: completeProfile })

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const { message, user } = await mutateAsync({ name, email })
            toast.success(message)
            if (user.isActive) {
                router.push("/")
            }
        } catch (error) {
            toast.error(error?.response?.data.message)
        }
    }
    const handlerChange = (stateFn) => (event) => {
        const { value } = event.target
        stateFn(value)
    }
    return (
        <div className='w-full '>
            <h2 className='font-bold text-lg my-4'>تکمیل ثبت نام</h2>
            <form className='min-h-[300px] space-y-1'
                onSubmit={onSubmitHandler}
            >
                {/* === Name Input === */}
                <TextField
                    label="نام و نام خانوادگی"
                    placeholder="لطفا نام و نام خانوادگی خود را وارد کنید"
                    name="name"
                    value={name}
                    onChange={handlerChange(setName)}
                />

                {/* === Email Input === */}
                <TextField
                    label="ایمیل"
                    placeholder="لطفا ایمیل خود را وارد کنید"
                    name="email"
                    value={email}
                    onChange={handlerChange(setEmail)}
                />

                {/* == Submit btn === */}
                <Button
                    type="submit"
                    className='w-full'
                    isLoading={isLoading}
                >تکمیل ثبت نام</Button>
            </form>
        </div>
    )
}

export default CompleteProfile