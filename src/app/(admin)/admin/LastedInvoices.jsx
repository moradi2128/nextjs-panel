import React from 'react'
import AdminCardLayout from '@/Layout/AdminCardLayout'
import LastedInvoicesAdminTable from './LastedInvoicesTable'

const LastedInvoices = ({ data }) => {
    return (
        <AdminCardLayout
            title="آخرین فاکتور"
        >
            <div className='overflow-x-auto'>
                <LastedInvoicesAdminTable invoices={data} />
            </div>
        </AdminCardLayout>
    )
}

export default LastedInvoices