"use client"
import Loading from '@/common/Loading'
import AddButton from '@/components/AddButton'
import { useGetAllCoupons } from '@/hooks/useCoupons'
import React from 'react'
import CouponsTable from './CouponsTable'

const page = () => {
    const { isLoading, data } = useGetAllCoupons();
    const { coupons } = data || {}
    if (isLoading) return <Loading />
    return (
        <div>
            <div className='flex justify-between items-center mb-4'>
                <div/>
                <AddButton href={"admin/coupons/add"}>اصافه کردن کد تخفیف</AddButton>
            </div>
            <div className='overflow-auto'>
                <CouponsTable coupons={coupons} />
            </div>
        </div>
    )
}

export default page