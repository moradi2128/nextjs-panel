import clsxm from '@/lib/clsxm'
import { ChevronLeftIcon, HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import Crumb from './Crumb'

const Breadcrumbs = ({ breadcrumbs, containerStyle }) => {
    return (
        <div>
            <ul className='flex items-center gap-2'>
                {breadcrumbs && (breadcrumbs).map((breadcrumb, index) => {
                    return <Crumb key={index} href={breadcrumb.href} label={breadcrumb.label} last={index === breadcrumbs.length - 1} />
                })}
            </ul>
        </div>
    )
}

export default Breadcrumbs
