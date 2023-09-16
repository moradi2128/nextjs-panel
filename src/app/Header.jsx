"use client"
import React from 'react'
import Link from 'next/link'
// === Common ===
import IconButton from '@/common/IconButton'
// === icons ===
import {
    AcademicCapIcon,
    ArrowLeftOnRectangleIcon,
    ArrowRightOnRectangleIcon,
    Bars3Icon,
    BuildingStorefrontIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
    EnvelopeIcon,
    HomeIcon,
    IdentificationIcon,
    PencilSquareIcon,
    PhotoIcon,
    UserCircleIcon,
    UserIcon
} from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
// === services ===
import { useGetUser } from '@/hooks/useAuth'
import { logoutHandler } from '@/utils/logoutHandler'
import Image from 'next/image'
import Logo from '@/components/Logo'
import avatarImg from "../../public/assets/images/avatar.jpg"
import { PersianNumbers, toPersianNumberWithComma } from '@/utils/toPersianNumber'
import { usePathname } from 'next/navigation'
import ToggleThemeMode from '@/components/ToggleThemeMode'

const Header = () => {
    const pathname = usePathname()
    const navData = [
        {
            id: 1,
            title: "صفحه نخست",
            href: "/",
            Icon: HomeIcon
        },
        {
            id: 2,
            title: "محصولات",
            href: "/products",
            Icon: BuildingStorefrontIcon
        },
        {
            id: 3,
            title: "مقالات",
            href: "/academy",
            Icon: AcademicCapIcon
        },
        {
            id: 4,
            title: "تماس با ما",
            href: "/contact-us",
            Icon: EnvelopeIcon
        },
    ]
    const dropDownItems = [
        {
            id: 0,
            title: "پنل کاربر",
            href: "/profile",
            Icon: IdentificationIcon
        },
        {
            id: 1123123,
            title: "پنل ادمین",
            href: "/admin",
            Icon: CubeTransparentIcon

        },
    ]
    const { data, isLoading } = useGetUser()
    return (
        <header className={`sticky top-0 z-30 flex min-h-[60px] w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100  bg-base-100 text-base-content shadow-sm
         ${isLoading ? "blur-md opacity-30" : "blur-0 opacity-100"}`}>
            <nav className='py-2 container xl:max-w-screen-xl flex items-center justify-between'>
                {/* === Drawer Menu : Mobile ===  */}
                <div className="drawer lg:hidden flex-1">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <Logo />
                    <div className="drawer-content w-[50px] flex justify-center items-center mr-5">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button bg-wh shadow-xl rounded-xl cursor-pointer p-3"><Bars3Icon className='w-5 h-5' /></label>

                    </div>
                    <div className="drawer-side z-10">
                        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                        <ul className='menu p-7 w-80 h-full bg-white dark:bg-slate-700 text-base-content'>
                            {
                                (navData || []).map((menuItem) => {
                                    return <MenuItem key={menuItem.id} menuItem={menuItem} activeSegment={pathname} />
                                })
                            }
                        </ul>
                    </div>
                </div>
                {/*  === Nav menu : Desktop === */}
                <div className='flex items-center gap-10'>
                    <Logo className="hidden lg:block" />
                    {/* === menu === */}
                    <ul className='items-center hidden lg:flex gap-12 '>
                        {
                            (navData || []).map((menuItem) => {
                                return <MenuItem key={menuItem.id} menuItem={menuItem} activeSegment={pathname} />
                            })
                        }

                    </ul>
                </div>

                {/* === Login section === */}
                <div className='flex items-center gap-3'>
                    {/*  === toggle Theme mode === */}
                    <ToggleThemeMode />

                    {
                        data ?
                            <>
                                {/* === Card Product === */}
                                <Link href="/cart">
                                    <IconButton
                                        badgeNumber={data && data?.cart?.productDetail.length}
                                        className={`${pathname === "/cart" ? "border-primary-500" : ""}`}
                                    >
                                        <ShoppingBagIcon className="w-5 h-5 text-[#ff4c83] " />
                                    </IconButton>
                                </Link>
                                {/* <div className="dropdown dropdown-bottom">
                                    <IconButton
                                        tabIndex={0}
                                        badgeNumber={data && data?.cart?.productDetail.length}
                                        onClick={() => console.log("W")}
                                    >
                                        <ShoppingBagIcon className="w-5 h-5 text-slate-500" />
                                    </IconButton>
                                    <ul className="dropdown-content menu p-2 shadow-light rounded-box w-96 bg-white mt-2 -mr-[330px]">
                                        {
                                            (data?.cart.productDetail || []).map((cartItem) => {
                                                return <CartDetailItem cartDetail={cartItem} key={cartItem._id} />
                                            })
                                        }
                                        <span className='divider my-1'></span>
                                        <li>
                                            <button type="button" className='w-full py-4 text-[14px] font-bold' onClick={logoutHandler}>
                                                <ArrowRightOnRectangleIcon className='w-5 h-5 text-red-500' />
                                                خروح از حساب کاربری</button>
                                        </li>
                                    </ul>
                                </div> */}
                                {/* === User menus === */}
                                <div className="dropdown dropdown-bottom">
                                    <IconButton className="px-3" tabIndex={0} >
                                        <UserIcon className="w-5 h-5 text-slate-500 dark:text-slate-300" />
                                        <ChevronDownIcon className='w-3 h-3 text-slate-500 dark:text-slate-300' />
                                    </IconButton>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow-light rounded-box w-64 bg-dropdown-content  mt-2 -mr-[192px]">
                                        <li >
                                            <Link href="/profile/me" className='flex flex-row pr-2'>
                                                <div className="avatar p-1">
                                                    <div className="w-16 mask mask-hexagon flex justify-center items-center">
                                                        {/* {data.user?.avatarUrl ? <img src={data.user.avatarUrl} /> : <UserCircleIcon className="w-8 h-8 text-slate-500" />} */}
                                                        <Image src={avatarImg} alt={data.user.name} />
                                                    </div>
                                                </div>
                                                <div className='block flex-1'>
                                                    <h3 className='text-slate-700 dark:text-slate-300 text-lg font-bold mb-2'>{data.user.name}</h3>
                                                    <div className="flex flex-row justify-between items-center">
                                                        <span className='text-slate-500 dark:text-slate-400 font-bold'>{data.user.phoneNumber}</span>
                                                        <PencilSquareIcon className='text-slate-500 w-4 h-4' />
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <span className='divider my-1'></span>
                                        {
                                            (dropDownItems || []).map((menuItem) => {
                                                return <li key={menuItem.id}>
                                                    <Link className='block py-4 text-[14px] font-bold' href={menuItem.href}>
                                                        <menuItem.Icon className="w-5 h-5 ml-2 inline" />
                                                        {menuItem.title}
                                                    </Link>
                                                </li>
                                            })
                                        }
                                        <span className='divider my-1'></span>
                                        <li>
                                            <button type="button" className='w-full py-4 text-[14px] font-bold' onClick={logoutHandler}>
                                                <ArrowRightOnRectangleIcon className='w-5 h-5 text-red-500' />
                                                خروح از حساب کاربری</button>
                                        </li>
                                    </ul>
                                </div>
                            </>
                            :
                            <Link href="/auth" className='btn btn__primary px-8'>
                                <ArrowLeftOnRectangleIcon className="w-5 h-5 text-white inline-block" />
                                ورود
                            </Link>
                    }

                </div>
            </nav>
        </header>
    )
}

export default Header

const MenuItem = ({ menuItem, activeSegment }) => {
    return <li >
        <Link className={`block py-4 text-[15px] font-bold transition-all duration-200
         ${activeSegment === menuItem.href ?
                "text-primary-800 dark:text-primary-700" :
                "text-slate-500 dark:text-slate-200 hover:text-primary-900"
            }`}
            href={menuItem.href}>
            <menuItem.Icon className="w-5 h-w-5 ml-2 inline" />
            {menuItem.title}
        </Link>
    </li>
}

const CartDetailItem = ({ cartDetail }) => {
    const { discount, title, price, offPrice, quantity, slug } = cartDetail
    return <li >
        <div className="flex flex-row items-start justify-between gap-2">
            {/* {imageLink && <figure><Image src={imageLink} width={200} height={100} alt={title} /></figure>} */}
            <Link
                href={`/products/${slug}`}
            >
                <figure className='h-[50px] w-[50px] bg-black/10 rounded-xl overflow-hidden mb-3'>
                    <span className='flex justify-center items-center h-full'>
                        <PhotoIcon className="w-6 h-6 text-gray-400" />
                    </span>
                </figure>
            </Link>
            <div className='flex flex-row flex-1'>
                <div className="flex flex-col flex-1">
                    <Link className='block mb-2 text-[14px] font-bold' href={`/products/${slug}`}>
                        {title}
                        {!!discount && <sup className='-top-[18px]'><span className='badge badge__error mr-1'>% {PersianNumbers(discount)}</span></sup>}
                    </Link>
                    <span className='font-bold text-gray-800 text-md'>{toPersianNumberWithComma(offPrice)} تومان</span>
                </div>
                <span>تعداد : {quantity}</span>
            </div>
        </div>
    </li>
}