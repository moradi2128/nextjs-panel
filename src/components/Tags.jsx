import { HashtagIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const Tags = ({ tags }) => {
    return (
        <div className="flex gap-4">
            {
                (tags || []).map((tag, i) => {
                    return <Link
                        href={`/tags/${tag}`}
                        key={i}
                        className="text-gray-400"
                    >
                        <HashtagIcon className='w-4 h-4 inline' />
                        {tag}
                    </Link>
                })
            }
        </div>
    )
}

export default Tags