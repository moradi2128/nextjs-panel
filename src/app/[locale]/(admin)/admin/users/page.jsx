"use client"
import Loading from '@/common/Loading'
import { useGetAllUsers } from '@/hooks/useAuth'
import Link from 'next/link'

import React, { useState } from 'react'
import SectionLayout from '@/Layout/SectionLayout'
import UsersTable from './UsersTable'
import clsxm from '@/lib/clsxm'
import queryString from 'query-string'
import UserCardItem from '@/components/UserCardItem'
const TABS = [{ label: "کارت", value: "card" }, { label: "جدول", value: "table" },]
const Users = ({ searchParams }) => {
    const [tab, setTab] = useState("card") // card || table
    const { data, isLoading } = useGetAllUsers(queryString.stringify(searchParams))
    // const { data: userData, isLoading: userIsLoading, mutateAsync } = useGetUserById();
    const { users } = data || {}

    if (isLoading) return <Loading />
    return (
        <SectionLayout
        >
            {/* <div className='overflow-auto'>
                <UsersTable users={users} />
            </div> */}
            <div className="tabs tabs-boxed inline">
                {TABS.map((_tab, index) => {
                    return <button
                        key={index}
                        className={clsxm("tab", _tab.value === tab && "tab-active")}
                        onClick={() => setTab(_tab.value)}
                    >{_tab.label}</button>
                })}
                {/* <SearchFilter/> */}
            </div>
            {
                tab === "table" ?
                    <div className='overflow-auto'>
                        <UsersTable users={users} />
                    </div>
                    :
                    <div className='grid grid-cols-4 gap-4'>
                        {users.map((user) => {
                            return <UserCardItem key={user._id} user={user} callback={() => userDitailHandler(user._id)} />
                        })}
                    </div>
            }
        </SectionLayout>
    )
}

export default Users

    // const _users = [
    //     {
    //         otp: {
    //             code: 296849,
    //             expiresIn: "2023-06-15T18:13:59.853Z"
    //         },
    //         _id: "6470d703ff778d923a763bbc",
    //         biography: "برنامه نویس",
    //         likedProducts: [
    //             "6478ac8ee3e16c9842c9a51f"
    //         ],
    //         phoneNumber: "09381416784",
    //         resetLink: null,
    //         isVerifiedPhoneNumber: true,
    //         isActive: true,
    //         Products: [
    //             {
    //                 _id: "6478abaee3e16c9842c9a516",
    //                 title: "کتاب جاوا اسکریپت",
    //                 description: "جاوااسکریپت (به انگلیسی: JavaScript‎) با مخفف JS نوعی زبان برنامه‌نویسی است که با ویژگی‌های ارائه شده در مشخصات اکما اسکریپت مطابق می‌باشد. جاوااسکریپت نوعی زبان سطح بالا، کامپایل درجا، و چندالگویی است. جاوااسکریپت نحو آکولادی دارد، نوع دهی آن پویا است، نوع شیءگرایی اش بر پایه پیش‌نمونه است، و دارای توابع کلاس اول می‌باشد",
    //                 slug: "leadrn-js",
    //                 category: "6478aa7de3e16c9842c9a507",
    //                 imageLink: "null",
    //                 price: 100000,
    //                 offPrice: 90000,
    //                 discount: 10,
    //                 brand: "brand1",
    //                 tags: [
    //                     "ES6",
    //                     "javascreipt",
    //                     "برنامه نویسی"
    //                 ],
    //                 rating: 0,
    //                 numReviews: 0,
    //                 countInStock: 9,
    //                 likes: [],
    //                 createdAt: "2023-06-01T14:31:10.922Z",
    //                 updatedAt: "2023-06-15T12:04:22.762Z",
    //                 __v: 0
    //             }
    //         ],
    //         role: "ADMIN",
    //         createdAt: "2023-05-26T15:57:55.249Z",
    //         updatedAt: "2023-06-15T19:59:23.092Z",
    //         __v: 0,
    //         email: "moradi2565@gmail.com",
    //         name: "محمدرضا مرادی",
    //         cart: {
    //             products: [
    //                 {
    //                     quantity: 1,
    //                     productId: "6478abaee3e16c9842c9a516",
    //                     _id: "648b4852ae298efe1d20fee4"
    //                 },
    //                 {
    //                     quantity: 2,
    //                     productId: "6478ac8ee3e16c9842c9a51f",
    //                     _id: "648b4856ae298efe1d20fef2"
    //                 }
    //             ],
    //             coupon: null,
    //             _id: "647c394bbe8070437baf1298"
    //         },
    //         avatarUrl: null
    //     },
    //     {
    //         otp: {
    //             code: 296849,
    //             expiresIn: "2023-06-15T18:13:59.853Z"
    //         },
    //         _id: "6470d703ff778d923a763bbc",
    //         biography: "برنامه نویس",
    //         likedProducts: [
    //             "6478ac8ee3e16c9842c9a51f"
    //         ],
    //         phoneNumber: "09381416784",
    //         resetLink: null,
    //         isVerifiedPhoneNumber: false,
    //         isActive: true,
    //         Products: [
    //             {
    //                 _id: "6478abaee3e16c9842c9a516",
    //                 title: "کتاب جاوا اسکریپت",
    //                 description: "جاوااسکریپت (به انگلیسی: JavaScript‎) با مخفف JS نوعی زبان برنامه‌نویسی است که با ویژگی‌های ارائه شده در مشخصات اکما اسکریپت مطابق می‌باشد. جاوااسکریپت نوعی زبان سطح بالا، کامپایل درجا، و چندالگویی است. جاوااسکریپت نحو آکولادی دارد، نوع دهی آن پویا است، نوع شیءگرایی اش بر پایه پیش‌نمونه است، و دارای توابع کلاس اول می‌باشد",
    //                 slug: "leadrn-js",
    //                 category: "6478aa7de3e16c9842c9a507",
    //                 imageLink: "null",
    //                 price: 100000,
    //                 offPrice: 90000,
    //                 discount: 10,
    //                 brand: "brand1",
    //                 tags: [
    //                     "ES6",
    //                     "javascreipt",
    //                     "برنامه نویسی"
    //                 ],
    //                 rating: 0,
    //                 numReviews: 0,
    //                 countInStock: 9,
    //                 likes: [],
    //                 createdAt: "2023-06-01T14:31:10.922Z",
    //                 updatedAt: "2023-06-15T12:04:22.762Z",
    //                 __v: 0
    //             }
    //         ],
    //         role: "USER",
    //         createdAt: "2023-05-26T15:57:55.249Z",
    //         updatedAt: "2023-06-15T19:59:23.092Z",
    //         __v: 0,
    //         email: "moradi2565@gmail.com",
    //         name: "محمدرضا مرادی",
    //         cart: {
    //             products: [
    //                 {
    //                     quantity: 1,
    //                     productId: "6478abaee3e16c9842c9a516",
    //                     _id: "648b4852ae298efe1d20fee4"
    //                 },
    //                 {
    //                     quantity: 2,
    //                     productId: "6478ac8ee3e16c9842c9a51f",
    //                     _id: "648b4856ae298efe1d20fef2"
    //                 }
    //             ],
    //             coupon: null,
    //             _id: "647c394bbe8070437baf1298"
    //         },
    //         avatarUrl: null
    //     },
    //     {
    //         otp: {
    //             code: 296849,
    //             expiresIn: "2023-06-15T18:13:59.853Z"
    //         },
    //         _id: "6470d703ff778d923a763bbc",
    //         biography: "برنامه نویس",
    //         likedProducts: [
    //             "6478ac8ee3e16c9842c9a51f"
    //         ],
    //         phoneNumber: "09381416784",
    //         resetLink: null,
    //         isVerifiedPhoneNumber: true,
    //         isActive: true,
    //         Products: [
    //             {
    //                 _id: "6478abaee3e16c9842c9a516",
    //                 title: "کتاب جاوا اسکریپت",
    //                 description: "جاوااسکریپت (به انگلیسی: JavaScript‎) با مخفف JS نوعی زبان برنامه‌نویسی است که با ویژگی‌های ارائه شده در مشخصات اکما اسکریپت مطابق می‌باشد. جاوااسکریپت نوعی زبان سطح بالا، کامپایل درجا، و چندالگویی است. جاوااسکریپت نحو آکولادی دارد، نوع دهی آن پویا است، نوع شیءگرایی اش بر پایه پیش‌نمونه است، و دارای توابع کلاس اول می‌باشد",
    //                 slug: "leadrn-js",
    //                 category: "6478aa7de3e16c9842c9a507",
    //                 imageLink: "null",
    //                 price: 100000,
    //                 offPrice: 90000,
    //                 discount: 10,
    //                 brand: "brand1",
    //                 tags: [
    //                     "ES6",
    //                     "javascreipt",
    //                     "برنامه نویسی"
    //                 ],
    //                 rating: 0,
    //                 numReviews: 0,
    //                 countInStock: 9,
    //                 likes: [],
    //                 createdAt: "2023-06-01T14:31:10.922Z",
    //                 updatedAt: "2023-06-15T12:04:22.762Z",
    //                 __v: 0
    //             }
    //         ],
    //         role: "ADMIN",
    //         createdAt: "2023-05-26T15:57:55.249Z",
    //         updatedAt: "2023-06-15T19:59:23.092Z",
    //         __v: 0,
    //         email: "moradi2565@gmail.com",
    //         name: "محمدرضا مرادی",
    //         cart: {
    //             products: [
    //                 {
    //                     quantity: 1,
    //                     productId: "6478abaee3e16c9842c9a516",
    //                     _id: "648b4852ae298efe1d20fee4"
    //                 },
    //                 {
    //                     quantity: 2,
    //                     productId: "6478ac8ee3e16c9842c9a51f",
    //                     _id: "648b4856ae298efe1d20fef2"
    //                 }
    //             ],
    //             coupon: null,
    //             _id: "647c394bbe8070437baf1298"
    //         },
    //         avatarUrl: null
    //     },
    // ]
    // const userDitailHandler = async (userId) => {
    //     const data = await mutateAsync(userId)
    //     console.log('data', data)
    // }