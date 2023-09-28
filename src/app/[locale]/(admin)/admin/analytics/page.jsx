"use client"

import AreaChart from '@/components/Chrt/AreaChart'
import StatItem from '@/components/Stats/StatItem'
import React from 'react'
import AdminCardLayout from '@/Layout/AdminCardLayout'
import PopularProductsAdminTable from './PopularProductsAdminTable'
import productImg from "@/public/assets/images/product.jpg"
import { useParams } from 'next/navigation'
import { useTranslation } from '@/i18n/client'
const page = () => {
    const locale = useParams()?.locale;
    const { t } = useTranslation(locale, "dashboard")
    const statsTest = [
        {
            id: 0,
            iconColor: "#0090ff",
            title: " درآمد کل",
            titleValue: "23000000",
            lastValue: "20000000",
            return: 62

        },
        {
            id: 1,
            iconColor: "#3a36db",
            title: "مجموع هزینه ها",
            titleValue: "14850000",
            lastValue: "17950000",
            return: 79
        },
        {
            id: 2,
            iconColor: "#1ad598",
            title: "کل پرداخت ها",
            titleValue: "6525000",
            lastValue: "4310000",
            return: 88
        },
    ]
    const popularDataTest = [
        { id: 0, image: productImg, productName: "موبایل آیفون 13", date: new Date(), price: 50000000, author: "محمدرضا مرادی", status: "available", salesCount: 9124 },
        { id: 1, image: productImg, productName: "موبایل سامسونگ ", date: new Date(), price: 20000000, author: "علیرضا سیدی", status: "darft", salesCount: 20471 },
        { id: 2, image: productImg, productName: "لپ تاپ دل", date: new Date(), price: 55000000, author: "محمدرضا مرادی", status: "available", salesCount: 9124 },
        { id: 3, image: productImg, productName: "کتاب جاوااسکریپت", date: new Date(), price: 50000, author: "محمدرضا مرادی", status: "available", salesCount: 9124 }
    ]
    return (
        <div>
            {/* === stats === */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-8">
                {statsTest.map((stat) => {
                    return <StatItem key={stat.id} content={stat} horizontal={true} />
                })}
            </div>

            {/* === line Chart & lasted sales === */}
            <div className="grid grid-cols-6 gap-8 mb-8">
                <div className='col-span-6 md:col-span-4 '>
                    <AdminCardLayout
                        title={t("analytics.incomeCalculation")}

                    >
                        <AreaChart />
                    </AdminCardLayout>
                </div>
                <div className='col-span-6 md:col-span-2 '>
                    {/* <ResentSales data={resentSalesData} /> */}
                </div>
            </div>
            {/* === popular product === */}
            <AdminCardLayout
                title={t("analytics.popularProducts")}
            >
                <div className="overflow-x-auto">
                    <PopularProductsAdminTable products={popularDataTest} />
                </div>

            </AdminCardLayout>
        </div>
    )
}

export default page

