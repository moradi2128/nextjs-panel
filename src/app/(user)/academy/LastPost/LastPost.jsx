import { toLocalDateString } from '@/utils/toLocalDate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { lastPostData } from '../../../../../dummy'
import CardAcademyLayout from '@/Layout/CardAcademyLayout'

const LastPost = () => {
    return (
        <CardAcademyLayout title="آخرین مقالات">
            {
                (lastPostData || []).map((post) => {
                    return <PostItem ley={post.id} content={post} />
                })
            }
        </CardAcademyLayout>
    )
}
const PostItem = ({ content }) => {
    const { title, href, img, date, description, alt } = content
    return <article class="group mb-5 last:mb-0">
        <Image
            alt={alt || title}
            src={img}
            class="h-48 w-full rounded-2xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />
        <div class="p-4">
            <time datetime={date} class="block text-xs mb-1 text-gray-500">
                {toLocalDateString(date)}
            </time>
            <Link href={href}>
                <h3 class="text-lg font-medium text-gray-900 dark:text-gray-300">
                    {title}
                </h3>
            </Link>
            <p class="mt-2 line-clamp-2 text-sm/relaxed text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </div>
    </article>

}
export default LastPost