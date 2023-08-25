"use client"
import Loading from '@/common/Loading'
import { useGetUser } from '@/hooks/useAuth'
import React from 'react'
import SectionLayout from '../../../../Layout/SectionLayout'
import PaymentTable from './PaymentTable'

const page = () => {
    const { data, isLoading } = useGetUser()
    const { user, payments } = data || {}

    if (isLoading) return <Loading />

    return (

        <div className='overflow-auto'>
            <PaymentTable
                payments={payments} />
        </div>
    )
}

export default page