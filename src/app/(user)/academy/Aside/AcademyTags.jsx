import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'


const AcademyTags = ({ tags, className }) => {
    return (
        <div className={clsx("flex gap-3 flex-wrap", className)}>
            {
                (tags || []).map((tag, i) => {
                    return <Tag tag={tag} key={i} />
                })
            }
        </div>
    )
}

const Tag = ({ tag }) => {
    return <Link
        href={`/academy/tags/${tag}`}
        className={clsx(
            'text-[12px] color-black px-4 py-2 rounded-3xl border-gray-200 border ',
            'text-gray-900 bg-white',
            'hover:bg-primary-800 hover:text-white active:bg-primary-500 disabled:bg-primary-100',
        )}
    >
        {tag}
    </Link>
}
export default AcademyTags