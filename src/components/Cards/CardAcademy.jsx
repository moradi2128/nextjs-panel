import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PhotoIcon } from '@heroicons/react/24/outline'
import { toLocalDateString } from '@/utils/toLocalDate'
const CardAcademy = ({ content }) => {
    const { title, date, description, imgUrl, href, alt } = content
    return <article
        className="group relative overflow-hidden rounded-lg shadow transition hover:shadow-light"
    >
        <Link href={`/academy/${href}`}>
            {imgUrl ? <Image
                alt={alt || title}
                src={imgUrl}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-all duration-300"
            /> :
                <span className='flex justify-center items-center h-[65%] absolute inset-0'>
                    <span className='absolute inset-0 ' />
                    <PhotoIcon className="w-9 h-9 text-white relative z-10" />
                </span>}
            {/* === body === */}
            <div
                className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
            >
                <div className="p-4 sm:p-6">
                    {/* === Time === */}
                    <time dateTime="2022-10-10" className="block text-xs text-white/90">
                        {toLocalDateString(date)}
                    </time>
                    {/* === Title === */}
                    <h3 className="mt-0.5 text-lg text-white">
                        {title}
                    </h3>
                    {/* === description === */}
                    <p className="mt-2 text-justify text-sm/relaxed text-white/95 line-clamp-3">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    </article>
}

export default CardAcademy