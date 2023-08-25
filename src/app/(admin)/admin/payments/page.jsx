"use client"
import Loading from '@/common/Loading'
import { useGetPayment } from '@/hooks/usePayments'
import React from 'react'
import PaymentAdminTable from './PaymentAdminTable'

const page = () => {
    const { data, isLoading } = useGetPayment()
    const { payments } = data || {}
    if (isLoading) return <Loading />
    return (
        <div className='overflow-auto'>
            <PaymentAdminTable payments={payments} />
        </div>
    )
}

export default page