"use client"
import LineChart from '@/components/Chrt/LineChart'
import { CreditCardIcon, EllipsisHorizontalIcon, ReceiptPercentIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import AdminCardLayout from '@/Layout/AdminCardLayout'
import ResentSales from './ResentSales'


import avatarImg from "@/public/assets/images/avatar.jpg"
import LastedInvoices from './LastedInvoices'
import StatItem from '@/components/Stats/StatItem'
import StateSkeleton from '@/components/Skeleton/StateSkeleton'
import { useParams } from 'next/navigation'
import { useTranslation } from '@/i18n/client'

const page = () => {
  const locale = useParams()?.locale;
  const { t } = useTranslation(locale, "dashboard")
  const [statsTest, setStatsTest] = useState([])
  const [resentSalesData, setResentSalesData] = useState([])
  useEffect(() => {
    setTimeout(() => {
      const _statsTest = [
        {
          id: 0,
          Icon: ShoppingCartIcon,
          iconColor: "#0090ff",
          title: "محموع فروش",
          titleValue: "23000000",
          lastValue: "20000000"
        },
        {
          id: 1,
          Icon: CreditCardIcon,
          iconColor: "#3a36db",
          title: "خرید",
          titleValue: "14850000",
          lastValue: "17950000"
        },
        {
          id: 2,
          Icon: ReceiptPercentIcon,
          iconColor: "#f9b959",
          title: "سود",
          titleValue: "6525000",
          lastValue: "4310000"
        },
      ]
      const _resentSalesData = [
        { id: 0, name: "محمدرضا مرادی", avatar: avatarImg, date: new Date(), price: 100000 },
        { id: 1, name: "رضا رضایی", avatar: avatarImg, date: new Date(), price: 90000 },
        { id: 2, name: "حسین ولی پور", avatar: avatarImg, date: new Date(), price: 1200000 },
        { id: 3, name: "ساسان پرتو", avatar: avatarImg, date: new Date(), price: 20000000 },
        { id: 4, name: "آریا حجتی", avatar: avatarImg, date: new Date(), price: 36500000 },
      ]
      setStatsTest(_statsTest)
      setResentSalesData(_resentSalesData)
    }, 2000)
  }, [])


  const lastedInvoicesData = [
    {
      id: 0,
      invoiceNo: "234314",
      customerName: "محمدرضا مرادی",
      date: new Date(),
      amount: 100000,
      email: "email1234@gamil.com",
      productId: "003145",
      status: "PAID"
    },
    {
      id: 1,
      invoiceNo: "215612",
      customerName: "حسین حقی",
      date: new Date(),
      amount: 120000,
      email: "email1234@gamil.com",
      productId: "004100",
      status: "PENDING"
    },
    {
      id: 2,
      invoiceNo: "214567",
      customerName: "علی رضایی",
      date: new Date(),
      amount: 900000,
      email: "email12334@gamil.com",
      productId: "009988",
      status: "UNPAID"
    },
  ]
  return (
    <div>
      {/* === stats === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-8">
        {statsTest.length === 0 ?
          [...Array(3).keys()].map((_, i) => {
            return <StateSkeleton key={i} />
          })
          : statsTest.map((stat) => {
            return <StatItem key={stat.id} content={stat} />
          })}
      </div>
      {/* === line Chart & lasted sales === */}
      <div className="grid grid-cols-6 gap-8 mb-8">
        <div className='col-span-6 md:col-span-4 '>
          <AdminCardLayout
            title={t("dashboard.salesAnalytics")}

          >
            <LineChart />
          </AdminCardLayout>
        </div>
        <div className='col-span-6 md:col-span-2 '>
          <AdminCardLayout
            title={t("dashboard.lastSales")}
            callToAction={
              <div>
                <button className='p-3'>
                  <EllipsisHorizontalIcon className='w-4 h-4 text-gray-500' />
                </button>
              </div>
            }
          >
            <ResentSales data={resentSalesData} />
          </AdminCardLayout>
        </div>
      </div>
      {/* === lasted invoices === */}
      <AdminCardLayout
        title={t("dashboard.lastPayment")}
      >
        <LastedInvoices data={lastedInvoicesData.slice(0, 10)} />
      </AdminCardLayout>
    </div>
  )
}

export default page