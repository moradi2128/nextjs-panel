"use client"
import { useGetUser } from '@/hooks/useAuth'
import React, { useEffect, useState } from 'react'
import { includeObj } from "@/utils/objectUtils"
import TextField from '@/common/TextField'
import Loading from '@/common/Loading'
import Button from '@/common/Button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateProfile } from '@/services/authServices'
import avatarImg from "../../../../../public/assets/images/avatar.jpg"
import { toast } from 'react-hot-toast'
import { toLocalDateStringShort } from '@/utils/toLocalDate'
import Avatar from '@/components/Avatar'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
const page = () => {
    const { data, isLoading } = useGetUser()
    const { isLoading: isUpdateLoading, mutateAsync } = useMutation({ mutationFn: updateProfile })
    const queryClient = useQueryClient()
    const [formData, setFormData] = useState({})
    const { user } = data || {}
    const [avatar, setAvatar] = useState(null)
    const includesKey = [
        "name",
        "email",
        "biography",
        "phoneNumber"
    ]
    const translateLabel = {
        name: "نام",
        email: "ایمیل",
        biography: "بیوگرافی",
        phoneNumber: "شماره تماس"
    }
    const submitUpdateUserHandler = async (e) => {
        e.preventDefault();
        try {
            const { message } = await mutateAsync(formData)
            // === after success fetch => retry special fetch 
            queryClient.invalidateQueries({ queryKey: "get-user" })
            toast.success(message)
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
    useEffect(() => {
        if (user) {
            setAvatar(user?.avatarImg || avatarImg)
            setFormData(includeObj(user, includesKey))
        }
    }, [user])
    const changeAvatarHandler = (e) => {
        setAvatar(e.target.value)

    }
    if (isLoading) return <div className='h-full flex justify-center items-center'><Loading /></div>
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <form className='grid grid-cols-1 md:grid-cols-2 gap-5' onSubmit={submitUpdateUserHandler} >
                {Object.keys(includeObj(user, includesKey)).map((key) => {
                    return <TextField
                        key={key}
                        name={key}
                        label={translateLabel[key]}
                        value={formData[key] || ""}
                        onChange={(e) => {
                            const { name, value } = e.target
                            setFormData({ ...formData, [name]: value })
                        }}
                    />
                })}
                <Button type="submit" className='w-full' isLoading={isUpdateLoading}>ذخیره تغییرات</Button>
            </form>
            <UserCard user={formData} createdAt={user.createdAt} role={user.role} avatar={avatar} changeAvatarHandler={changeAvatarHandler} />
        </div>
    )
}
const UserCard = ({ user, createdAt, role, avatar, changeAvatarHandler }) => {
    const RenderText = ({ text }) => {
        return <span className='font-bold text-xs text-slate-900 dark:text-gray-500'>{text}
        </span>
    }
    return <div className='border dark:border-gray-600 rounded-2xl shadow-card hover:shadow-light transition-all duration-200 p-5 space-y-3 sticky top-0 self-start'>
        {/* === Header === */}
        <div className="w-full flex justify-center">
            <div className='relative' htmlFor="avatar">
                <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    onChange={changeAvatarHandler}
                    className="absolute inset-0 w-full h-full z-10 opacity-0  cursor-pointer"
                    accept="image/png, image/jpeg" />
                <Avatar className="w-16" avatarUrl={avatar} alt={user.name} />
                <label htmlFor="avatar" className='center p-1 rounded-2xl bg-primary-600 absolute bottom-0'>
                    <PencilSquareIcon className='w-3 h-3 text-gray-100' />
                </label>
            </div>
        </div>
        <h4 className="font-bold text-lg text-center dark:text-gray-300">{user.name}</h4>
        <p className="font-bold text-gray-400 text-md text-center block">{user.biography}</p>

        {/* === content === */}
        <div className="mb-3 flex flex-row items-center gap-3 ">
            <h5 className='text-primary-600 text-[16px] font-bold'>ایمیل : </h5>
            <RenderText text={user.email} />
        </div>
        <div className="mb-3 flex flex-row items-center gap-3">
            <h5 className='text-primary-600 text-[16px] font-bold'>شماره تماس : </h5>
            <div className='flex flex-row items-center gap-2 '>
                <RenderText text={user.phoneNumber} />
                {user.isVerifiedPhoneNumber && <span className='text-green-500 inline text-[12px]'>
                    <CheckCircleIcon className="w-4 h-4 inline ml-1" />
                    تایید </span>}
            </div>
        </div>
        <div className="mb-3 flex flex-row items-center gap-3">
            <h5 className='text-primary-600 text-[16px] font-bold'>تاریخ عضویت : </h5>
            <RenderText text={toLocalDateStringShort(createdAt)} />
        </div>
        <div className="mb-3 flex flex-row items-center gap-3">
            <h5 className='text-primary-600 text-[16px] font-bold inline ml-2'>نوع دسترسی : </h5>
            <RenderText text={role === "ADMIN" ? "ادمین" : "کاربر"} />
        </div>
    </div>
}
export default page