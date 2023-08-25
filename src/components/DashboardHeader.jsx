
"use client"
import Button from '@/common/Button'
import IconButton from '@/common/IconButton'
import Loading from '@/common/Loading'
import { useGetUser } from '@/hooks/useAuth'
import { logoutHandler } from '@/utils/logoutHandler'
import { toLocalDateString } from '@/utils/toLocalDate'
import { ArrowRightOnRectangleIcon, BellIcon, CheckIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import avatarImg from "../../public/assets/images/avatar.jpg"
import PanelAdminHeaderSkeleton from './Skeleton/PanelAdminHeaderSkeleton'
const DashboardHeader = ({ title }) => {
    const { data, isLoading } = useGetUser()
    const notiData = [
        {
            id: 0,
            type: "info",
            avatar: avatarImg,
            message: "کاربر علی رضایی حساب کاربری ایجاد کرده است",
            date: new Date()
        },
        {
            id: 1,
            type: "comment",
            avatar: avatarImg,
            message: "محمدرضا مرادی برای محصول کتاب جاوااسکریپت نظر ثبت کرده است",
            userComment: `محصول خوبی بود\n راضی بودم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است`,
            date: new Date(),
            dateShort: "جمعه ۱۰:۰۳"
        },
        {
            id: 2,
            type: "comment",
            avatar: avatarImg,
            message: "محمدرضا مرادی برای محصول کتاب جاوااسکریپت نظر ثبت کرده است",
            userComment: `محصول خوبی بود\n راضی بودم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است`,
            date: new Date(),
            dateShort: "جمعه ۱۰:۰۳"
        },
        {
            id: 3,
            type: "comment",
            avatar: avatarImg,
            message: "محمدرضا مرادی برای محصول کتاب جاوااسکریپت نظر ثبت کرده است",
            userComment: `محصول خوبی بود\n راضی بودم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است`,
            date: new Date(),
            dateShort: "جمعه ۱۰:۰۳"
        },
    ]
    if (isLoading) return <PanelAdminHeaderSkeleton />
    return (
        <div className='mb-6 flex flex-row justify-between '>
            {/* === right section === */}
            <div>
                <h2 className='text-slate-700 text-2xl font-bold mb-2'>{title}</h2>
                <span className="text-slate-500">{toLocalDateString(new Date())}</span>
            </div>
            {/* === left section === */}
            <div className='flex flex-row gap-4'>
                <div className="dropdown dropdown-bottom">
                    <IconButton
                        tabIndex={0}
                        badgeNumber={5}
                        className={`w-[35px] h-[35px]`}
                    >
                        <BellIcon className="w-5 h-5 text-slate-500" />
                    </IconButton>
                    <ul tabIndex={0} className="dropdown-content menu z-[9999] p-4 shadow-light rounded-box w-[26rem] md:w-[30rem] bg-white mt-2 -mr-[355px] md:-mr-[420px]">
                        <h3 className='font-bold text-slate-700 text-xl mb-5 mt-2'>پیام ها</h3>
                        {
                            notiData.slice(0, 3).map((notification) => {
                                return <NotificationItem key={notification.id} content={notification} />
                            })
                        }
                        <span className='divider my-1'></span>
                        <div className="flex justify-between items-center">
                            <Button >
                                مشاهده همه پیام ها
                            </Button>
                            <button className="btn btn-ghost text-primary-700">
                                تغییر وضعیت پیام ها به خوانده شده
                                <CheckIcon className='w-4 h-4 ' />
                            </button>
                        </div>

                    </ul>
                </div>
                <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar p-1 rounded-full">
                        <div className="w-20 rounded-full">
                            {/* {data.user?.avatarUrl ? <img src={data.user.avatarUrl} /> : <UserCircleIcon className="w-8 h-8 text-slate-500" />} */}
                            <Image src={avatarImg} alt={data?.user.name} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu menu z-[9999] p-2 shadow-light rounded-box w-64 bg-white mt-2 -mr-[192px]">
                        <li >
                            <Link href="/profile/me" className='flex flex-row pr-2'>
                                <div className='block flex-1'>
                                    <h3 className='text-slate-700 text-lg font-bold mb-2'>{data.user.name}</h3>
                                    <div className="flex flex-row justify-between items-center">
                                        <span className='text-slate-500 font-bold'>{data.user.phoneNumber}</span>
                                        <PencilSquareIcon className='text-slate-500 w-4 h-4' />
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <span className='divider my-1'></span>
                        <li>
                            <button type="button" className='w-full py-4 text-[14px] font-bold' onClick={logoutHandler}>
                                <ArrowRightOnRectangleIcon className='w-5 h-5 text-red-500' />
                                خروح از حساب کاربری</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const NotificationItem = ({ content }) => {
    const renderMessage = (type) => {
        switch (type) {
            case "comment":
                return <li className="p-1">
                    <div className="flex flex-row gap-4 items-start">
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary-900 ring-offset-base-100 ring-offset-2">
                                <Image src={content.avatar} alt="avatar" />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-md font-bold mb-3'>
                                {content.message}
                            </h4>
                            <p className='text-gray-500 line-clamp-3 mb-2'>{content.userComment}</p>
                            <div className="flex justify-between item-center">
                                <span className='text-slate-500'>{content.dateShort}</span>
                                <span className='text-slate-500'>{toLocalDateString(content.date)}</span>
                            </div>
                        </div>
                    </div>
                </li>
            case "info":
                return <li className="p-1">
                    <div className="flex flex-row gap-4 items-start">
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary-900 ring-offset-base-100 ring-offset-2">
                                <Image src={content.avatar} alt="avatar" />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-md font-bold mb-3'>
                                {content.message}
                            </h4>
                            <span className='text-slate-500'>{toLocalDateString(content.date)}</span>
                        </div>
                    </div>
                </li>
            default:
                break;
        }
    }
    return renderMessage(content.type)
}

export default DashboardHeader