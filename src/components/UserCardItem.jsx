import { toLocalDateStringShort } from '@/utils/toLocalDate'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import avatarImg from "../../public/assets/images/avatar.jpg"
const UserCardItem = ({ user, callback, readOnly = false }) => {
    return <div className='col-span-4 md:col-span-1 border rounded-2xl shadow-card hover:shadow-light transition-all duration-200 p-5 space-y-2'>
        {/* === Header === */}
        <div className="w-full flex justify-center">
            <div className="avatar online placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                    <Image src={avatarImg} alt={user.name} />
                </div>
            </div>
        </div>
        <h4 className="font-bold text-lg text-center">{user.name}</h4>
        <p className="font-bold text-gray-400 text-md text-center">{user.biography}</p>

        {/* === content === */}
        <div className="mb-3">
            <h5 className='text-primary-600 text-[14px] font-bold'>ایمیل</h5>
            <span className='font-bold text-xs text-slate-900'>{user.email}</span>
        </div>
        <div className="mb-3">
            <h5 className='text-primary-600 text-[14px] font-bold'>شماره تماس</h5>
            <div className='flex flex-row items-center gap-2 '>
                <span className='font-bold text-xs text-slate-900'>{user.phoneNumber}
                </span>
                {user.isVerifiedPhoneNumber && <span className='text-green-500 inline text-[12px]'>
                    <CheckCircleIcon className="w-4 h-4 inline ml-1" />
                    تایید </span>}
            </div>
        </div>
        <div className="mb-3">
            <h5 className='text-primary-600 text-[14px] font-bold'>تاریخ عضویت</h5>
            <span className='font-bold text-xs text-slate-900'>{toLocalDateStringShort(user.createdAt)}</span>
        </div>
        <div className="mb-3">
            <h5 className='text-primary-600 text-[14px] font-bold inline ml-2'>نوع دسترسی : </h5>
            <span className='font-bold text-xs text-slate-900'>{user.role === "ADMIN" ? "ادمین" : "کاربر"}</span>
        </div>
        {/* <Button onClick={callback}>مشاهده جزئیات</Button> */}
        {!readOnly && <Link href={`admin/users/${user._id}`} className="btn btn__primary w-full">مشاهده جزئیات</Link>}

    </div>
}

export default UserCardItem

