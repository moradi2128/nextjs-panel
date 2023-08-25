import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const LinkSectionLayout = (props) => {
    const { children, href } = props
    return (
        <Link href={href} className="group text-primary-700
        transition-all duration-200
        hover:text-primary-900" >
            {children}
            <ArrowSmallLeftIcon className='inline transition-all  w-5 h-5 mr-1 group-hover:mr-2' />
        </Link>
    )
}

export default LinkSectionLayout