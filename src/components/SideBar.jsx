"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import {
    ArrowRightOnRectangleIcon,
    BanknotesIcon,
    Bars3Icon,
    ChartPieIcon,
    CreditCardIcon,
    HomeIcon,
    IdentificationIcon,
    ShoppingBagIcon,
    Squares2X2Icon,
    TagIcon,
    UserGroupIcon,
    UserIcon,
    WalletIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Logo from './Logo'
import DashboardHeader from './DashboardHeader';const sideBarUser = [
    {
        id: 0,
        title: "",
        children: [
            {
                id: 0,
                label: "صفحه اصلی",
                href: "/",
                Icon: HomeIcon
            },
            {
                id: 1,
                label: "داشبورد",
                href: "/profile",
                Icon: Squares2X2Icon
            },
            {
                id: 2,
                label: "اطلاعت پرداخت",
                href: "/profile/payments",
                Icon: CreditCardIcon
            },
        ]
    },
    {
        id: 2,
        title: "حساب کاربری",
        children: [
            {
                id: 1,
                label: "اطلاعات کاربری",
                href: "/profile/me",
                Icon: IdentificationIcon
            },
        ]
    }
]
const sideBarAdmin = [
    {
        id: 0,
        title: "",
        children: [
            {
                id: 0,
                label: "صفحه اصلی",
                href: "/",
                Icon: HomeIcon
            },
            {
                id: 1,
                label: "داشبورد",
                href: "/admin",
                Icon: Squares2X2Icon
            },
            {
                id: 2,
                label: "آنالیز",
                href: "/admin/analytics",
                Icon: ChartPieIcon
            },
            {
                id: 3,
                label: "فروش",
                href: "/admin/sales",
                Icon: WalletIcon
            },
            {
                id: 4,
                label: "کاربران",
                href: "/admin/users",
                Icon: UserGroupIcon
            },
            {
                id: 5,
                label: "سفارشات",
                href: "/admin/payments",
                Icon: CreditCardIcon
            },
        ]

    },
    {
        id: 1,
        title: "محصولات",
        children: [
            {
                id: 0,
                label: "محصولات",
                href: "/admin/products",
                Icon: ShoppingBagIcon
            },
            {
                id: 1,
                label: "دسته بندی",
                href: "/admin/categories",
                Icon: TagIcon
            },
            {
                id: 2,
                label: "کد تخفیف",
                href: "/admin/coupons",
                Icon: BanknotesIcon
            },
        ]

    },
    {
        id: 2,
        title: "حساب کاربری",
        children: [
            {
                id: 0,
                label: "پنل کاربری",
                href: "/profile",
                Icon: UserIcon
            },
            {
                id: 1,
                label: "اطلاعات کاربری",
                href: "/profile/me",
                Icon: IdentificationIcon
            },
        ]
    }

    // {
    //     id: 7,
    //     label: "خروج از حساب کاربری",
    //     Icon: ArrowRightOnRectangleIcon,
    //     iconStyle: "text-red-400",
    //     callback: logoutHandler,
    // },
]
const SideBar = ({ adminPage = false, children }) => {
    const [titlePage, setTitlePage] = useState()
    const pathname = usePathname()
    const MenuItemChildren = ({ content }) => {
        if (pathname === content?.href) {
            setTitlePage(content.label)
        }
        if (content.callback) {
            return <li key={content.id}
                className={clsx(`hover:bg-primary-100`,
                    "transition-all duration-100 rounded-xl"
                )}
            >
                <button onClick={content.callback} className="block p-4">
                    {content.Icon && <content.Icon className={clsx("w-5 h-5 inline ml-2", content.iconStyle)} />}
                    {content.label}</button>
            </li>
        }
        return <li key={content.id}
            className={clsx(`${pathname === content?.href ? "bg-primary-900 text-white  shadow-lg shadow-primary-500 dark:shadow-black/30" : "hover:bg-primary-100 dark:hover:bg-slate-900 text-secondary-500 dark:date-slate-300"}`,
                "transition-all duration-100 rounded-xl "
            )}
        >
            <Link href={content?.href} className="block p-4 text-[15px]">
                {content.Icon && <content.Icon className="w-5 h-5 inline ml-2" />}
                {content.label}</Link>
        </li>
    }
    const MenuItem = ({ content }) => {
        const { title, children: _menuChild } = content
        return <li className="mt-7">
            <span className="text-secondary-500 dark:text-gray-300 font-bold mb-3">{title}</span>
            <ul className='flex flex-col space-y-2 mt-1'>
                {_menuChild?.map((item) => {
                    return <MenuItemChildren key={item.id} content={item} />
                })}
            </ul>
        </li>
    }
    return (
        <div className="block lg:grid grid-cols-5 h-screen">
            <div className="col-span-5 lg:col-span-1  overflow-y-auto lg:p-4 rounded-tl-[30px] rounded-bl-[30px] p-4 pl-2">
                <div className="hidden lg:block">
                    <Logo className="block text-center" />
                    <ul className='flex flex-col'>
                        {(adminPage ? sideBarAdmin : sideBarUser).map((item) => {
                            return <MenuItem content={item} key={item.id} />
                        })}
                    </ul>
                </div>

                <div className="drawer lg:hidden">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content w-full flex justify-between items-center ">
                        <label htmlFor="my-drawer-4" className="drawer-button bg-wh shadow-xl rounded-xl cursor-pointer p-3"><Bars3Icon className='w-5 h-5' /></label>
                        <Logo />
                    </div>
                    <div className="drawer-side z-10">
                        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                        <ul className='overflow-y-auto p-7 w-full max-w-[320px] h-full bg-white dark:bg-slate-900 text-base-content space-y-2'>
                            <div className="w-full flex justify-between items-center">
                                <Logo />
                                <label htmlFor="my-drawer-4" className="drawer-overlay bg-white dark:bg-slate-800 shadow-xl rounded-xl cursor-pointer p-3"><XMarkIcon className='w-5 h-5' /></label>
                            </div>
                            {
                                (adminPage ? sideBarAdmin : sideBarUser).map((menuItem) => {
                                    return <MenuItem content={menuItem} key={menuItem.id} />
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-span-5 lg:col-span-4 overflow-y-auto p-4 ">
                <div className='min-h-full bg-white dark:bg-slate-800 rounded-3xl p-6'>
                    <DashboardHeader title={titlePage} />
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SideBar