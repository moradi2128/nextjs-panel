import clsxm from '@/lib/clsxm'
import { UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const Avatar = ({ avatarUrl, alt, className }) => {
    if (avatarUrl) return <div className="avatar">
        <div className={clsxm("w-10 rounded-full bg-gray-200", className)}>
            <Image src={avatarUrl} alt={alt} />
        </div>
    </div>

    return (
        <div className="avatar placeholder">
            <div className={clsxm("bg-gray-100 shadow-light border border-white text-neutral-content rounded-full w-10", className)}>
                <UserIcon className="w-6 h-6 text-gray-400" />
            </div>
        </div>
        // <div className={clsxm("w-10 rounded-full bg-gray-200 center", className)}>
        //     <UserIcon className="w-6 h-6 text-gray-400" />
        // </div>
    )
}

export default Avatar