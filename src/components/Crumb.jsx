import { ChevronLeftIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react'

const Crumb = ({ label, href, last = false }) => {
    if (last) {
        return <li className="text-gray-500">{label}</li>
    }

    // All other crumbs will be rendered as links that can be visited 
    return (
        <li>
            {href ?
                <Link href={href} className='text-primary flex items-center py-2'>
                    {href === "/" ? <HomeIcon className='w-5 h-5' /> : label}
                    <ChevronLeftIcon className='w-4 h-4 mr-2' />
                </Link>
                :
                <span>{label}</span>
            }
        </li>
    );
}
export default Crumb