import React from 'react'
import LastedInvoicesAdminTable from './LastedInvoicesTable'

const LastedInvoices = ({ data }) => {
    return (
        <div className='overflow-x-auto'>
            <LastedInvoicesAdminTable invoices={data} />
        </div>
    )
}

export default LastedInvoices