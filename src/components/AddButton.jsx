import { PlusCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const AddButton = ({ href, children }) => {
    return (
        <Link href={href} className="btn btn__primary">
            <PlusCircleIcon className="w-6 h-6" />
            {children}
        </Link>
    )
}

export default AddButton